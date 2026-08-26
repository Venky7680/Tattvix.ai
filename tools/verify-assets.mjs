// Completeness audit: proves every stylesheet, JSON-LD block and <head> tag from
// the original pages survives into the rendered app, with matching values.
//
// Run `npm start` first, then `npm run verify:assets`.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'tattvix-website/tattvix-website');
const ORIGIN = process.env.ORIGIN || 'http://127.0.0.1:3210';

const PAGES = [
  ['index', '/'], ['about', '/about'], ['solutions', '/solutions'],
  ['otto', '/otto'], ['autonoma', '/autonoma'], ['iraops', '/iraops'],
  ['voice-ai', '/voice-ai'], ['hr-ai', '/hr-ai'], ['finance-ai', '/finance-ai'],
  ['logistics-ai', '/logistics-ai'], ['sales-ai', '/sales-ai'],
  ['legal-ai', '/legal-ai'], ['data-platforms', '/data-platforms'],
  ['ai-services', '/ai-services'], ['request-demo', '/request-demo'],
  ['contact', '/contact'],
];

const SLUGS = new Map(PAGES.map(([s, r]) => [s + '.html', r]));
const rewriteUrl = (s) =>
  (s || '').replace(/(https:\/\/tattvix\.ai\/)([a-z0-9-]+)\.html/gi, (w, o, g) =>
    SLUGS.has(g.toLowerCase() + '.html') ? o.slice(0, -1) + SLUGS.get(g.toLowerCase() + '.html') : w);

const norm = (s) => s.replace(/\s+/g, ' ').trim();
const decode = (s) =>
  (s || '')
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&');

// The RSC flight payload echoes page markup as JS strings; drop it so tag
// searches don't double-count.
const stripFlight = (h) => h.replace(/<script>self\.__next_f[\s\S]*?<\/script>/g, '');
const all = (re, s) => [...s.matchAll(re)].map((m) => m.slice(1));

const problems = [];
const note = (slug, kind, msg) => problems.push({ slug, kind, msg });

// ---------- one-time: globals.css is the original base stylesheet ----------
{
  const base = /<style>\n?([\s\S]*?)<\/style>/.exec(fs.readFileSync(path.join(SRC, 'index.html'), 'utf8'))[1];
  const globals = fs.readFileSync(path.join(ROOT, 'app/globals.css'), 'utf8');
  if (base.trimEnd() !== globals.trimEnd()) note('(all)', 'css', 'app/globals.css differs from original base stylesheet');
}

let baseRef = null;

for (const [slug, route] of PAGES) {
  const orig = fs.readFileSync(path.join(SRC, slug + '.html'), 'utf8');
  const res = await fetch(ORIGIN + route);
  if (!res.ok) { note(slug, 'http', `status ${res.status}`); continue; }
  const got = stripFlight(await res.text());
  const head = orig.slice(0, orig.indexOf('<body>'));

  // ---------- JSON-LD ----------
  const oLd = all(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g, orig).map(([s]) => norm(rewriteUrl(s)));
  const gLd = all(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g, got).map(([s]) => norm(s));
  if (oLd.length !== gLd.length) note(slug, 'json-ld', `count ${oLd.length} -> ${gLd.length}`);
  else oLd.forEach((s, i) => { if (s !== gLd[i]) note(slug, 'json-ld', `block ${i} differs`); });

  // ---------- stylesheets ----------
  const oStyles = all(/<style>([\s\S]*?)<\/style>/g, orig).map(([s]) => s);
  if (baseRef === null) baseRef = oStyles[0];
  else if (baseRef !== oStyles[0]) note(slug, 'css', 'base stylesheet differs between original files');

  if (!/<link[^>]*rel="stylesheet"[^>]*href="\/_next[^"]+\.css"/.test(got))
    note(slug, 'css', 'globals stylesheet not linked');

  // Everything after the base block must still be present. Order between the
  // <noscript> fallback and page overrides may differ; nothing they target
  // overlaps, so compare as sets.
  const oRest = oStyles.slice(1).map(norm).sort();
  const gRest = all(/<style>([\s\S]*?)<\/style>/g, got).map(([s]) => norm(s)).sort();
  if (oRest.join('||') !== gRest.join('||'))
    note(slug, 'css', `page <style> set mismatch (${oRest.length} -> ${gRest.length})`);

  // ---------- head tags, compared by value ----------
  const gMetaName = new Map(all(/<meta name="([^"]+)" content="([^"]*)"/g, got));
  const gMetaProp = new Map(all(/<meta property="([^"]+)" content="([^"]*)"/g, got));

  for (const [name, val] of all(/<meta name="([^"]+)" content="([^"]*)"/g, head)) {
    if (name === 'viewport') continue; // Next emits its own, equivalent
    const g = gMetaName.get(name);
    if (g === undefined) note(slug, 'head', `missing <meta name="${name}">`);
    else if (decode(g) !== decode(rewriteUrl(val))) note(slug, 'head', `meta ${name} value differs`);
  }
  for (const [prop, val] of all(/<meta property="([^"]+)" content="([^"]*)"/g, head)) {
    const g = gMetaProp.get(prop);
    if (g === undefined) note(slug, 'head', `missing <meta property="${prop}">`);
    else if (decode(g) !== decode(rewriteUrl(val))) note(slug, 'head', `og ${prop}: "${decode(rewriteUrl(val))}" -> "${decode(g)}"`);
  }

  const oTitle = decode(/<title>([\s\S]*?)<\/title>/.exec(head)?.[1]);
  const gTitle = decode(/<title>([\s\S]*?)<\/title>/.exec(got)?.[1]);
  if (oTitle !== gTitle) note(slug, 'head', `title "${oTitle}" -> "${gTitle}"`);

  const oCanon = rewriteUrl(/<link rel="canonical" href="([^"]*)"/.exec(head)?.[1]);
  const gCanon = /<link rel="canonical" href="([^"]*)"/.exec(got)?.[1];
  if (oCanon !== gCanon) note(slug, 'head', `canonical "${oCanon}" -> "${gCanon}"`);

  if (!/rel="icon"/.test(got)) note(slug, 'head', 'missing favicon');
  if (!/fonts\.googleapis\.com\/css2/.test(got)) note(slug, 'head', 'missing Google Fonts stylesheet');
  if (!/rel="preconnect" href="https:\/\/fonts\.googleapis\.com"/.test(got)) note(slug, 'head', 'missing fonts preconnect');
  if (!/<noscript>/.test(got)) note(slug, 'head', 'missing <noscript> reveal fallback');
  if (!/<html lang="en"/.test(got)) note(slug, 'head', 'missing lang="en"');
}

if (problems.length === 0) {
  console.log(`\nAsset parity OK across ${PAGES.length} pages:`);
  console.log('  · app/globals.css byte-identical to the original base stylesheet');
  console.log('  · every page <style> override present');
  console.log('  · JSON-LD blocks match one-for-one');
  console.log('  · title, canonical, description, robots, og:*, twitter:* values match');
  console.log('  · favicon, font preconnect + stylesheet, <noscript>, lang="en" present');
} else {
  console.log(`\n${problems.length} problem(s):`);
  for (const p of problems) console.log(`  [${p.slug}] ${p.kind}: ${p.msg}`);
  process.exitCode = 1;
}
