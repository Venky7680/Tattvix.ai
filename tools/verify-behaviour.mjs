// Behavioural checks for the logic that used to live in inline <script> tags:
// mobile menu, scroll reveal, client-side routing, and the demo form.
//
// Needs playwright (npm i -D playwright && npx playwright install chromium).
// Then: npm start (in another shell) && node tools/verify-behaviour.mjs
import { chromium } from 'playwright';

const NEXT = process.env.ORIGIN || 'http://127.0.0.1:3210';
const results = [];
const check = (name, pass, detail = '') => results.push({ name, result: pass ? 'PASS' : 'FAIL', detail });

const browser = await chromium.launch();

// ---- mobile menu ----
{
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  await page.goto(NEXT + '/', { waitUntil: 'networkidle' });
  const nav = page.locator('#nav-links');
  const btn = page.locator('.menu-btn');

  check('menu: hidden initially', !(await nav.isVisible()));
  check('menu: aria-expanded=false', (await btn.getAttribute('aria-expanded')) === 'false');
  await btn.click();
  check('menu: opens on tap', await nav.isVisible());
  check('menu: aria-expanded=true', (await btn.getAttribute('aria-expanded')) === 'true');
  await btn.click();
  check('menu: closes again', !(await nav.isVisible()));
  await btn.click();
  await page.locator('#nav-links a[href="/about"]').click();
  await page.waitForURL('**/about');
  check('menu: closes after navigating', !(await page.locator('#nav-links').isVisible()));
  await ctx.close();
}

// ---- scroll reveal ----
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(NEXT + '/solutions', { waitUntil: 'networkidle' });
  check('reveal: html.io applied', await page.evaluate(() => document.documentElement.classList.contains('io')));

  const last = page.locator('.reveal').last();
  await last.scrollIntoViewIfNeeded();
  await page.waitForTimeout(900);
  check('reveal: gains .in on scroll', await last.evaluate((el) => el.classList.contains('in')));
  check('reveal: ends fully opaque', (await last.evaluate((el) => getComputedStyle(el).opacity)) === '1');
  await ctx.close();
}

// ---- routing ----
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(NEXT + '/', { waitUntil: 'networkidle' });
  check('routing: Home marked current', (await page.getAttribute('.nav-links a[href="/"]', 'aria-current')) === 'page');

  await page.click('.nav-links a[href="/solutions"]');
  await page.waitForURL('**/solutions');
  check('routing: Solutions current after nav', (await page.getAttribute('.nav-links a[href="/solutions"]', 'aria-current')) === 'page');

  await page.click('.foot-col a[href="/otto"]');
  await page.waitForURL('**/otto');
  check('routing: product page keeps Solutions current', (await page.getAttribute('.nav-links a[href="/solutions"]', 'aria-current')) === 'page');

  await page.goto(NEXT + '/request-demo', { waitUntil: 'networkidle' });
  check('routing: request-demo marks nothing current', (await page.locator('.nav-links a[aria-current="page"]').count()) === 0);

  await page.goto(NEXT + '/otto', { waitUntil: 'networkidle' });
  const revealed = await page.locator('.reveal').first().evaluate(async (el) => {
    el.scrollIntoView();
    await new Promise((r) => setTimeout(r, 800));
    return el.classList.contains('in');
  });
  check('routing: reveal re-arms on new route', revealed);

  await page.goto(NEXT + '/', { waitUntil: 'networkidle' });
  await page.click('a[href="#solutions-index"]');
  await page.waitForTimeout(600);
  check('routing: in-page anchor scrolls', await page.evaluate(() => window.scrollY > 200));
  await ctx.close();
}

// ---- demo form ----
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  let relayBody = null;
  await page.route('https://formsubmit.co/**', (r) => {
    relayBody = JSON.parse(r.request().postData() || '{}');
    return r.fulfill({ status: 200, body: '{}' });
  });
  await page.goto(NEXT + '/request-demo', { waitUntil: 'networkidle' });

  await page.click('#f-submit');
  check('form: empty submit flags all 5 fields', (await page.locator('.field.invalid').count()) === 5);
  check('form: success panel still hidden', !(await page.locator('#demo-success').isVisible()));

  await page.fill('#f-name', 'Priya Sharma');
  await page.fill('#f-org', 'Coastal Retail');
  await page.fill('#f-email', 'priya@gmail.com');
  await page.selectOption('#f-size', { index: 1 });
  await page.fill('#f-problem', 'Cloud ops toil');
  await page.click('#f-submit');
  const emailInvalid = () => page.locator('#f-email').evaluate((el) => el.closest('.field').classList.contains('invalid'));
  check('form: free email domain rejected', await emailInvalid());

  await page.fill('#f-email', 'priya@coastalretail.com');
  check('form: invalid clears on input', !(await emailInvalid()));

  await page.click('#f-submit');
  await page.waitForSelector('#demo-success.show', { timeout: 5000 });
  check('form: success panel shown', await page.locator('#demo-success').isVisible());
  check('form: form removed after submit', (await page.locator('#demo-form').count()) === 0);

  const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('tattvix_demo_requests') || '[]'));
  check('form: persisted to localStorage', stored.length === 1 && stored[0].email === 'priya@coastalretail.com');
  check('form: relay payload complete',
    relayBody && relayBody.Name === 'Priya Sharma' && relayBody.Organization === 'Coastal Retail' &&
    relayBody['Organization email'] === 'priya@coastalretail.com' && !!relayBody['Company size'] &&
    relayBody['Problem to solve with AI'] === 'Cloud ops toil');
  await ctx.close();
}

await browser.close();
console.table(results);
const failed = results.filter((r) => r.result === 'FAIL');
console.log(failed.length ? `\n${failed.length} check(s) FAILED` : `\nAll ${results.length} behavioural checks passed.`);
process.exitCode = failed.length ? 1 : 0;
