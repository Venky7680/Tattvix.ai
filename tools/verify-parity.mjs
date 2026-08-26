// Renders every route from the built Next app and diffs it against the original
// static HTML on two axes that together cover everything a reader can perceive:
//   1. element structure + attributes (tag tree, classes, hrefs, styles)
//   2. visible text content (all copy, in order)
// Whitespace-only text nodes are normalised away because CSS collapses them.
import fs from 'node:fs';
import path from 'node:path';
import { parseFragment } from 'parse5';

const SRC = path.resolve(import.meta.dirname, '../tattvix-website/tattvix-website');
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

const BLOCK = new Set([
  'address', 'article', 'aside', 'blockquote', 'br', 'caption', 'col', 'colgroup',
  'dd', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr', 'li', 'main',
  'nav', 'ol', 'option', 'p', 'section', 'table', 'tbody', 'td', 'tfoot', 'th',
  'thead', 'tr', 'ul',
]);

const normStyle = (v) =>
  v.split(';').map((d) => d.trim()).filter(Boolean)
    .map((d) => { const i = d.indexOf(':'); return i === -1 ? d : `${d.slice(0, i).trim()}:${d.slice(i + 1).trim()}`; })
    .sort().join(';');

const normHref = (v) => {
  const m = /^([a-z0-9-]+\.html)(#.*)?$/i.exec(v);
  if (m && SLUGS.has(m[1].toLowerCase())) return SLUGS.get(m[1].toLowerCase()) + (m[2] || '');
  return v.replace(/(https:\/\/tattvix\.ai\/)([a-z0-9-]+)\.html/gi, (w, o, s) =>
    SLUGS.has(s.toLowerCase() + '.html') ? o.slice(0, -1) + SLUGS.get(s.toLowerCase() + '.html') : w);
};

/** Ordered list of `tag[sorted attrs]` — text nodes ignored entirely. */
function structure(html) {
  const out = [];
  (function walk(node) {
    for (const k of node.childNodes || []) {
      if (k.nodeName === '#text' || k.nodeName === '#comment') continue;
      const attrs = (k.attrs || [])
        .map((a) => {
          let v = a.value;
          if (a.name === 'style') v = normStyle(v);
          if (a.name === 'href') v = normHref(v);
          return `${a.name}="${v}"`;
        })
        .sort()
        .join(' ');
      out.push(attrs ? `${k.tagName} ${attrs}` : k.tagName);
      walk(k);
    }
  })(parseFragment(html));
  return out;
}

// Flex/grid containers (per globals.css) discard whitespace-only children, and
// SVG never renders text outside <text>. Both sides are normalised the same way
// so these browser-invisible nodes cannot masquerade as content differences.
const FLEXGRID = new Set([
  'cards', 'chips', 'contact-grid', 'cta-actions', 'cta-box', 'demo', 'eyebrow',
  'foot-base', 'foot-col', 'foot-grid', 'form-grid', 'founder-sign', 'hero-split',
  'logo', 'mv-grid', 'nav', 'nav-links', 'pcard', 'platform-row', 'spec', 'steps',
  'success', 'tick',
]);

const isFlexGrid = (node) => {
  const cls = (node.attrs || []).find((a) => a.name === 'class');
  return cls ? cls.value.split(/\s+/).some((c) => FLEXGRID.has(c)) : false;
};

/** All visible copy, with block boundaries forced to whitespace then collapsed. */
function text(html) {
  let buf = '';
  (function walk(node, inSvg) {
    const drop = inSvg || isFlexGrid(node);
    for (const k of node.childNodes || []) {
      if (k.nodeName === '#text') {
        if (!(drop && !k.value.trim())) buf += k.value;
        continue;
      }
      if (k.nodeName === '#comment') continue;
      const svg = inSvg || k.tagName === 'svg';
      const boundary = BLOCK.has(k.tagName) || svg;
      if (boundary) buf += ' ';
      walk(k, svg);
      if (boundary) buf += ' ';
    }
  })(parseFragment(html), false);
  return buf.replace(/\s+/g, ' ').trim();
}

function region(html, startTag, endTag) {
  const s = html.indexOf(startTag);
  const e = html.lastIndexOf(endTag);
  return s === -1 || e === -1 ? null : html.slice(s + startTag.length, e);
}

const stripDemo = (h) =>
  h.replace(/<form id="demo-form"[\s\S]*?<\/form>/, '')
   .replace(/<div id="demo-success"[\s\S]*?role="status"[\s\S]*?<\/div>\s*<\/div>/, '');

function cmpList(a, b) {
  const n = Math.max(a.length, b.length);
  for (let i = 0; i < n; i++) if (a[i] !== b[i]) return { i, a: a[i] ?? '(end)', b: b[i] ?? '(end)' };
  return null;
}

function cmpText(a, b) {
  if (a === b) return null;
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  return { i, a: a.slice(Math.max(0, i - 60), i + 120), b: b.slice(Math.max(0, i - 60), i + 120) };
}

const problems = [];
let clean = 0;

for (const [slug, route] of PAGES) {
  const orig = fs.readFileSync(path.join(SRC, slug + '.html'), 'utf8');
  const got = await (await fetch(ORIGIN + route)).text();
  let bad = false;

  for (const [label, startTag, endTag] of [
    ['main', '<main>', '</main>'],
    ['header', '<header class="site">', '</header>'],
    ['footer', '<footer class="site">', '</footer>'],
  ]) {
    let o = region(orig, startTag, endTag);
    let g = region(got, startTag, endTag);
    const clip = (h) =>
      h.replace(/<style[^>]*>[\s\S]*?<\/style>/g, '').replace(/<script[^>]*>[\s\S]*?<\/script>/g, '');
    o = clip(o); g = clip(g);
    if (slug === 'request-demo' && label === 'main') { o = stripDemo(o); g = stripDemo(g); }

    const s = cmpList(structure(o), structure(g));
    if (s) { problems.push({ slug, label, kind: 'structure', ...s }); bad = true; }
    const t = cmpText(text(o), text(g));
    if (t) { problems.push({ slug, label, kind: 'text', ...t }); bad = true; }
  }
  if (!bad) clean++;
}

console.log(`\nPages matching original exactly: ${clean}/${PAGES.length}`);
if (problems.length) {
  console.log(`\n${problems.length} mismatch(es):`);
  for (const p of problems.slice(0, 30)) {
    console.log(`\n[${p.slug} / ${p.label}] ${p.kind} @ ${p.i}`);
    console.log('  original: ' + String(p.a).slice(0, 240));
    console.log('  rendered: ' + String(p.b).slice(0, 240));
  }
}
