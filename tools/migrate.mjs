import fs from 'node:fs';
import path from 'node:path';
import { htmlToJsx } from './html-to-jsx.mjs';

const SRC = 'c:/Users/Venkatesh.V/Downloads/tattvix-website/tattvix-website/tattvix-website';
const ROOT = 'c:/Users/Venkatesh.V/Downloads/tattvix-website';
const APP = path.join(ROOT, 'app');

const PAGES = [
  ['index', '/', ''],
  ['about', '/about', 'about'],
  ['solutions', '/solutions', 'solutions'],
  ['otto', '/otto', 'otto'],
  ['autonoma', '/autonoma', 'autonoma'],
  ['iraops', '/iraops', 'iraops'],
  ['voice-ai', '/voice-ai', 'voice-ai'],
  ['hr-ai', '/hr-ai', 'hr-ai'],
  ['finance-ai', '/finance-ai', 'finance-ai'],
  ['logistics-ai', '/logistics-ai', 'logistics-ai'],
  ['sales-ai', '/sales-ai', 'sales-ai'],
  ['legal-ai', '/legal-ai', 'legal-ai'],
  ['data-platforms', '/data-platforms', 'data-platforms'],
  ['ai-services', '/ai-services', 'ai-services'],
  ['request-demo', '/request-demo', 'request-demo'],
  ['contact', '/contact', 'contact'],
];

const SLUG_TO_ROUTE = new Map(PAGES.map(([slug, route]) => [slug + '.html', route]));

// index.html -> /, about.html#x -> /about#x, leaves external/mailto/# alone.
function rewriteHref(href) {
  if (!href) return href;
  const m = /^([a-z0-9-]+\.html)(#.*)?$/i.exec(href);
  if (!m) return href;
  const route = SLUG_TO_ROUTE.get(m[1].toLowerCase());
  if (!route) return href;
  return route + (m[2] || '');
}

// Absolute canonical/OG/JSON-LD URLs move onto the extensionless routes too,
// so every self-reference agrees with what the app actually serves.
function rewriteAbsolute(str) {
  if (!str) return str;
  return str.replace(
    /(https:\/\/tattvix\.ai\/)([a-z0-9-]+)\.html/gi,
    (whole, origin, slug) => {
      const route = SLUG_TO_ROUTE.get(slug.toLowerCase() + '.html');
      return route ? origin.slice(0, -1) + route : whole;
    }
  );
}

const read = (f) => fs.readFileSync(path.join(SRC, f), 'utf8');

function extract(html) {
  let head = html.slice(0, html.indexOf('<body>'));
  const body = html.slice(html.indexOf('<body>'));

  // The <noscript> reveal fallback is shared chrome and must keep its wrapper,
  // otherwise its !important rules would permanently defeat the scroll animation.
  const noscript = [];
  head = head.replace(/<noscript>([\s\S]*?)<\/noscript>\s*/g, (_, inner) => {
    noscript.push(inner);
    return '';
  });

  const pick = (re) => {
    const m = re.exec(head);
    return m ? m[1] : null;
  };

  const styles = [...head.matchAll(/<style>\n?([\s\S]*?)<\/style>/g)].map((m) => m[1]);
  const jsonld = [...head.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1].trim());

  const mainStart = body.indexOf('<main>');
  const mainEnd = body.lastIndexOf('</main>');
  let main = body.slice(mainStart + '<main>'.length, mainEnd);

  // Pull <style> blocks that live inside <main> out into the page-level styles.
  const inlineStyles = [];
  main = main.replace(/<style>([\s\S]*?)<\/style>\s*/g, (_, css) => {
    inlineStyles.push(css.trim());
    return '';
  });

  return {
    title: pick(/<title>([\s\S]*?)<\/title>/),
    description: pick(/<meta name="description" content="([\s\S]*?)">/),
    robots: pick(/<meta name="robots" content="([\s\S]*?)">/),
    canonical: pick(/<link rel="canonical" href="([\s\S]*?)">/),
    ogType: pick(/<meta property="og:type" content="([\s\S]*?)">/),
    ogSiteName: pick(/<meta property="og:site_name" content="([\s\S]*?)">/),
    ogTitle: pick(/<meta property="og:title" content="([\s\S]*?)">/),
    ogDescription: pick(/<meta property="og:description" content="([\s\S]*?)">/),
    ogUrl: pick(/<meta property="og:url" content="([\s\S]*?)">/),
    ogImage: pick(/<meta property="og:image" content="([\s\S]*?)">/),
    twitterCard: pick(/<meta name="twitter:card" content="([\s\S]*?)">/),
    baseCss: styles[0],
    pageCss: [...styles.slice(1), ...inlineStyles],
    noscript,
    jsonld,
    main,
  };
}

// Decode the numeric/named entities the source uses, so JSX source carries real
// characters. Rendered output is byte-identical either way.
function decodeEntities(s) {
  return s
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, '\u00a0')
    .replace(/&amp;/g, '&');
}

const pages = new Map();
for (const [slug] of PAGES) pages.set(slug, extract(read(slug + '.html')));

// ---- sanity: shared chrome really is identical everywhere ----
const baseSet = new Set([...pages.values()].map((p) => p.baseCss));
if (baseSet.size !== 1) throw new Error(`base CSS differs across pages (${baseSet.size} variants)`);

const nsSet = new Set([...pages.values()].map((p) => p.noscript.join('|')));
if (nsSet.size !== 1) throw new Error(`noscript block differs across pages (${nsSet.size} variants)`);
console.log('shared noscript:', [...nsSet][0]);

fs.mkdirSync(APP, { recursive: true });
fs.writeFileSync(path.join(APP, 'globals.css'), [...baseSet][0].trimEnd() + '\n');

// ---- logo data URI (identical in every page) ----
const logoSrc = /<link rel="icon" type="image\/png" href="(data:image\/png;base64,[^"]+)">/.exec(read('index.html'))[1];
fs.mkdirSync(path.join(ROOT, 'lib'), { recursive: true });
fs.writeFileSync(
  path.join(ROOT, 'lib', 'logo.ts'),
  `// Inlined brand mark, carried over verbatim from the original static pages.\n` +
    `export const LOGO_DATA_URI =\n  '${logoSrc}';\n`
);

// ---- pages ----
const report = [];
for (const [slug, route, dir] of PAGES) {
  const p = pages.get(slug);
  let mainHtml = p.main;

  // The demo form carries its own validation/submit logic, so it becomes a
  // hand-written client component rather than generated markup.
  let usesDemoForm = false;
  if (slug === 'request-demo') {
    const start = mainHtml.indexOf('<form id="demo-form"');
    const endMarker = '</div>';
    const successStart = mainHtml.indexOf('<div id="demo-success"');
    const end = mainHtml.indexOf(endMarker, mainHtml.indexOf('</p>', successStart)) + endMarker.length;
    if (start === -1 || successStart === -1) throw new Error('demo form markers not found');
    mainHtml = mainHtml.slice(0, start) + '<demo-form-slot></demo-form-slot>' + mainHtml.slice(end);
    mainHtml = mainHtml.replace(/<script>[\s\S]*?<\/script>\s*/g, '');
    usesDemoForm = true;
  }

  const usedLink = { value: false };
  let jsx = htmlToJsx(mainHtml, { rewriteHref, linkComponent: 'Link', usedLink });
  if (usesDemoForm) {
    const before = jsx;
    jsx = jsx.replace(/<demo-form-slot \/>|<demo-form-slot><\/demo-form-slot>/, '<DemoForm />');
    if (jsx === before) throw new Error('demo form slot was not substituted');
  }

  const canonical = rewriteAbsolute(p.canonical);
  const ogUrl = rewriteAbsolute(p.ogUrl);

  // Next's metadata resolver strips the trailing slash from a root URL, which
  // would turn the home page's "https://tattvix.ai/" into "https://tattvix.ai".
  // For that one page the two tags are emitted directly so they stay verbatim.
  const rootUrl = canonical.endsWith('/');

  const meta = {
    title: decodeEntities(p.title),
    description: decodeEntities(p.description),
    alternates: rootUrl ? undefined : { canonical },
    openGraph: {
      type: p.ogType || undefined,
      siteName: p.ogSiteName || undefined,
      title: p.ogTitle ? decodeEntities(p.ogTitle) : undefined,
      description: p.ogDescription ? decodeEntities(p.ogDescription) : undefined,
      url: rootUrl ? undefined : ogUrl || undefined,
      images: p.ogImage ? [p.ogImage] : undefined,
    },
    twitter: p.twitterCard ? { card: p.twitterCard } : undefined,
    robots: p.robots || undefined,
  };

  const headTags = rootUrl
    ? [
        `      <link rel="canonical" href=${JSON.stringify(canonical)} />`,
        ogUrl ? `      <meta property="og:url" content=${JSON.stringify(ogUrl)} />` : null,
      ]
        .filter(Boolean)
        .join('\n')
    : '';

  const styleBlocks = p.pageCss
    .map(
      (css) =>
        `      <style dangerouslySetInnerHTML={{ __html: ${JSON.stringify(css)} }} />`
    )
    .join('\n');

  const ldBlocks = p.jsonld
    .map((ld) => rewriteAbsolute(ld))
    .map(
      (ld) =>
        `      <script\n        type="application/ld+json"\n        dangerouslySetInnerHTML={{ __html: ${JSON.stringify(ld)} }}\n      />`
    )
    .join('\n');

  const body = jsx
    .split('\n')
    .map((l) => (l ? '      ' + l : l))
    .join('\n');

  const imports = [
    "import type { Metadata } from 'next';",
    usedLink.value ? "import Link from 'next/link';" : null,
    usesDemoForm ? "import DemoForm from '@/components/DemoForm';" : null,
  ].filter(Boolean).join('\n');

  // Unquote object keys so the emitted metadata reads like hand-written TS.
  const metaLiteral = JSON.stringify(meta, null, 2).replace(/^(\s*)"([A-Za-z_$][\w$]*)":/gm, '$1$2:');

  const src = `${imports}

export const metadata: Metadata = ${metaLiteral};

export default function Page() {
  return (
    <>
${[headTags, ldBlocks, styleBlocks].filter(Boolean).join('\n')}
${body}
    </>
  );
}
`;

  const outDir = dir ? path.join(APP, dir) : APP;
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'page.tsx'), src);
  report.push({ slug, route, bytes: src.length, styles: p.pageCss.length, jsonld: p.jsonld.length });
}

console.table(report);
console.log('base css bytes:', [...baseSet][0].length);
