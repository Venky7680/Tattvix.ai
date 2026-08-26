// Link audit: every anchor in the original pages must exist in the rendered app
// pointing at the equivalent target, every internal route must resolve, every
// legacy .html URL must redirect, and every in-page anchor must have its target.
//
// Run `npm start` first, then `npm run verify:links`.
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

/** Original href -> the href it should have become. */
function expected(href) {
  const m = /^([a-z0-9-]+\.html)(#.*)?$/i.exec(href);
  if (m && SLUGS.has(m[1].toLowerCase())) return SLUGS.get(m[1].toLowerCase()) + (m[2] || '');
  return href;
}

const stripFlight = (h) => h.replace(/<script>self\.__next_f[\s\S]*?<\/script>/g, '');
const body = (h) => h.slice(h.indexOf('<body>'));

// Attribute values are entity-encoded in the source; the browser decodes them
// before the href is used, so compare the decoded form.
const decode = (s) =>
  s
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');

const hrefsOf = (html) =>
  [...body(html).matchAll(/<a[^>]*\shref="([^"]*)"/g)].map((m) => decode(m[1]));

const problems = [];
const note = (slug, msg) => problems.push({ slug, msg });

const internal = new Set();
const anchors = new Map(); // route -> Set(fragment)
let totalLinks = 0;

for (const [slug, route] of PAGES) {
  const orig = fs.readFileSync(path.join(SRC, slug + '.html'), 'utf8');
  const res = await fetch(ORIGIN + route);
  if (!res.ok) { note(slug, `page returned ${res.status}`); continue; }
  const got = stripFlight(await res.text());

  const want = hrefsOf(orig).map(expected);
  const have = hrefsOf(got);
  totalLinks += want.length;

  if (want.length !== have.length) note(slug, `anchor count ${want.length} -> ${have.length}`);
  const n = Math.min(want.length, have.length);
  for (let i = 0; i < n; i++) {
    if (want[i] !== have[i]) { note(slug, `link ${i}: "${want[i]}" -> "${have[i]}"`); break; }
  }

  for (const h of have) {
    if (h.startsWith('/')) {
      const [p, frag] = h.split('#');
      internal.add(p);
      if (frag) {
        if (!anchors.has(p)) anchors.set(p, new Set());
        anchors.get(p).add(frag);
      }
    } else if (h.startsWith('#')) {
      if (!anchors.has(route)) anchors.set(route, new Set());
      anchors.get(route).add(h.slice(1));
    } else if (!/^(mailto:|https?:|tel:)/.test(h)) {
      note(slug, `unrecognised href "${h}"`);
    }
  }
}

// ---------- every internal target resolves ----------
for (const p of [...internal].sort()) {
  const r = await fetch(ORIGIN + p, { redirect: 'manual' });
  if (r.status !== 200) note('(links)', `${p} -> HTTP ${r.status}`);
}

// ---------- every in-page anchor target exists ----------
for (const [route, frags] of anchors) {
  const html = stripFlight(await (await fetch(ORIGIN + route)).text());
  for (const f of frags) {
    if (!new RegExp(`id="${f}"`).test(html)) note('(anchors)', `${route}#${f} — no element with id="${f}"`);
  }
}

// ---------- legacy .html URLs redirect ----------
for (const [slug, route] of PAGES) {
  const legacy = slug === 'index' ? '/index.html' : `/${slug}.html`;
  const r = await fetch(ORIGIN + legacy, { redirect: 'manual' });
  const loc = r.headers.get('location');
  if (r.status !== 301 && r.status !== 308) note('(redirects)', `${legacy} -> HTTP ${r.status}`);
  else if (new URL(loc, ORIGIN).pathname !== route) note('(redirects)', `${legacy} -> ${loc} (want ${route})`);
}

if (problems.length === 0) {
  console.log(`\nLink audit OK:`);
  console.log(`  · ${totalLinks} anchors across ${PAGES.length} pages match the originals, in order`);
  console.log(`  · ${internal.size} internal routes all return 200`);
  console.log(`  · ${[...anchors.values()].reduce((n, s) => n + s.size, 0)} in-page anchor target(s) exist`);
  console.log(`  · ${PAGES.length} legacy .html URLs redirect to the right route`);
} else {
  console.log(`\n${problems.length} problem(s):`);
  for (const p of problems) console.log(`  [${p.slug}] ${p.msg}`);
  process.exitCode = 1;
}
