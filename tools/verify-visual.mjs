// Visual regression: full-page screenshot diff of the original static site
// against the running Next build, at desktop and mobile widths.
//
// Needs three packages that are not part of the app:
//   npm i -D playwright pixelmatch pngjs && npx playwright install chromium
// Then: npm start (in another shell) && node tools/verify-visual.mjs
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'tattvix-website/tattvix-website');
const NEXT = process.env.ORIGIN || 'http://127.0.0.1:3210';
const OUT = path.join(ROOT, '.visual');
const PORT = 3299;

const PAGES = [
  ['index', '/index.html', '/'], ['about', '/about.html', '/about'],
  ['solutions', '/solutions.html', '/solutions'], ['otto', '/otto.html', '/otto'],
  ['autonoma', '/autonoma.html', '/autonoma'], ['iraops', '/iraops.html', '/iraops'],
  ['voice-ai', '/voice-ai.html', '/voice-ai'], ['hr-ai', '/hr-ai.html', '/hr-ai'],
  ['finance-ai', '/finance-ai.html', '/finance-ai'],
  ['logistics-ai', '/logistics-ai.html', '/logistics-ai'],
  ['sales-ai', '/sales-ai.html', '/sales-ai'], ['legal-ai', '/legal-ai.html', '/legal-ai'],
  ['data-platforms', '/data-platforms.html', '/data-platforms'],
  ['ai-services', '/ai-services.html', '/ai-services'],
  ['request-demo', '/request-demo.html', '/request-demo'],
  ['contact', '/contact.html', '/contact'],
];

// Scroll reveal is time dependent; pin every .reveal element to its end state on
// both sides so the diff measures layout and paint, not animation timing.
const FREEZE = `
  html.io .reveal, .reveal { opacity:1 !important; transform:none !important; }
  *, *::before, *::after { transition:none !important; animation:none !important; }
`;

const TYPES = { '.html': 'text/html; charset=utf-8', '.png': 'image/png', '.xml': 'application/xml', '.txt': 'text/plain' };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split('?')[0]);
  const file = path.join(SRC, rel === '/' ? '/index.html' : rel);
  if (!file.startsWith(SRC)) return res.writeHead(403).end();
  fs.readFile(file, (err, buf) => {
    if (err) return res.writeHead(404).end();
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
    res.end(buf);
  });
});
await new Promise((r) => server.listen(PORT, '127.0.0.1', r));
const ORIG = `http://127.0.0.1:${PORT}`;

fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
const rows = [];

for (const vp of [
  { name: 'desktop', width: 1280, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
]) {
  const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1 });
  const page = await ctx.newPage();

  for (const [slug, origPath, nextPath] of PAGES) {
    const shoot = async (url, file) => {
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.addStyleTag({ content: FREEZE });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(250);
      await page.screenshot({ path: file, fullPage: true });
      return PNG.sync.read(fs.readFileSync(file));
    };
    const a = await shoot(ORIG + origPath, `${OUT}/${vp.name}-${slug}-orig.png`);
    const b = await shoot(NEXT + nextPath, `${OUT}/${vp.name}-${slug}-next.png`);

    if (a.width !== b.width || a.height !== b.height) {
      rows.push({ vp: vp.name, slug, result: `SIZE ${a.width}x${a.height} vs ${b.width}x${b.height}` });
      continue;
    }
    const diff = new PNG({ width: a.width, height: a.height });
    const n = pixelmatch(a.data, b.data, diff.data, a.width, a.height, { threshold: 0.1 });
    if (n > 0) fs.writeFileSync(`${OUT}/${vp.name}-${slug}-diff.png`, PNG.sync.write(diff));
    rows.push({ vp: vp.name, slug, size: `${a.width}x${a.height}`, diffPx: n });
  }
  await ctx.close();
}

await browser.close();
server.close();
console.table(rows);
const bad = rows.filter((r) => r.result || r.diffPx > 0);
console.log(bad.length ? `\n${bad.length} page(s) differ — see ${OUT}` : `\nAll ${rows.length} screenshots pixel-identical.`);
process.exitCode = bad.length ? 1 : 0;
