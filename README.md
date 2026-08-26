# Tattvix.ai — Next.js site

The Tattvix.ai marketing site, rebuilt on the Next.js App Router. This was a
**structural** migration from 16 standalone HTML files: the design, layout, copy
and content are unchanged, and every page was verified pixel-identical to the
original.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # all 16 pages prerender as static HTML
npm start
```

## Layout

```
app/
  layout.tsx          Root layout: fonts, favicon, header, <main>, footer
  globals.css         The shared stylesheet, byte-identical to the original
  page.tsx            /
  about/page.tsx      /about   … one directory per route
  not-found.tsx       404
  sitemap.ts          Generates /sitemap.xml
  robots.ts           Generates /robots.txt
components/
  SiteHeader.tsx      Sticky nav + mobile menu (client)
  SiteFooter.tsx      Footer link columns
  RevealOnScroll.tsx  IntersectionObserver scroll-reveal (client)
  DemoForm.tsx        Demo request form: validation, storage, relay (client)
lib/logo.ts           Inlined base64 brand mark
public/assets/        Logo PNGs, referenced by og:image
tools/                Migration + verification scripts (not part of the build)
legacy-static-site.zip  The original 16 HTML files, archived
```

### What became shared

Each old file carried its own copy of the same chrome. Those now live in exactly
one place:

| Was duplicated 16× | Now |
| --- | --- |
| Base `<style>` block (15KB) | `app/globals.css` |
| `<header class="site">` | `components/SiteHeader.tsx` |
| `<footer class="site">` | `components/SiteFooter.tsx` |
| Menu toggle + reveal script | `SiteHeader` / `RevealOnScroll` |
| Base64 logo (3× per file) | `lib/logo.ts` |

Page-specific `<style>` blocks and JSON-LD stayed with their pages, in the same
cascade order.

### Nav highlighting

The nav marks one entry `aria-current="page"`. On the ten product and vertical
pages (`/otto`, `/autonoma`, `/iraops`, `/voice-ai`, and the five `*-ai` pages)
that entry is **Solutions**, not the page itself; `/request-demo` highlights
nothing. This mapping is explicit in `SiteHeader.tsx` — a plain
`pathname === href` check would silently drop it.

## URLs

Routes are extensionless: `/about`, `/otto`, `/contact`. Every old `.html` URL
permanently redirects (`next.config.mjs`), and `canonical`, `og:url`, the
JSON-LD `url` fields and the sitemap were all updated to match. Next emits
**308** for permanent redirects, which search engines treat as equivalent to 301.

To keep the `.html` URLs instead, rename each route directory to e.g.
`app/about.html/page.tsx` and drop the redirect block — nothing else depends on
the path shape.

## Verification

Three suites run against a production server and need no extra dependencies.
They diff against the original HTML, so extract `legacy-static-site.zip` first
(see *Migration tooling* below):

```bash
npm start            # in one shell
npm run verify       # in another — parity + assets + links
```

- **`verify:parity`** — diffs every rendered route against the original HTML on
  element structure (every tag and attribute: class, href, inline style) and on
  visible text. *Result: 16/16 pages identical.*
- **`verify:assets`** — `globals.css` byte-identical to the original base
  stylesheet; every page `<style>` override present; JSON-LD blocks match
  one-for-one; title / canonical / description / robots / `og:*` / `twitter:*`
  values match; favicon, font preconnect + stylesheet, `<noscript>` fallback and
  `lang="en"` present. *Result: OK across 16 pages.*
- **`verify:links`** — every anchor matches the original in order, all internal
  routes return 200, in-page anchor targets exist, legacy `.html` URLs redirect
  correctly. *Result: 524 anchors, 16 routes, 16 redirects — all OK.*

Two further suites need browser tooling, installed on demand:

```bash
npm i -D playwright pixelmatch pngjs && npx playwright install chromium
node tools/verify-visual.mjs      # screenshot diff vs the original site
node tools/verify-behaviour.mjs   # menu, reveal, routing, demo form
```

- **`verify-visual`** — full-page screenshots at 1280px and 390px, original vs
  rebuild. *Result: 0 differing pixels across all 32 screenshots.*
- **`verify-behaviour`** — *Result: 23/23 checks pass.*

## Migration tooling

`tools/migrate.mjs` (`npm run migrate`) regenerates `app/**/page.tsx` from the
original HTML using `tools/html-to-jsx.mjs`, a parse5-based HTML→JSX serializer.
It is idempotent — re-running produces byte-identical files. The conversion was
mechanical rather than hand-transcribed, so no copy could drift.

The original HTML has been removed from the working tree and archived to
`legacy-static-site.zip` (20 files: 16 pages, 2 logos, `robots.txt`,
`sitemap.xml`). The migration and verification scripts read from
`tattvix-website/tattvix-website/`, so to re-run any of them, extract the
archive there first:

```bash
mkdir -p tattvix-website/tattvix-website
unzip legacy-static-site.zip -d tattvix-website/tattvix-website
```

Nothing in `app/`, `components/` or `lib/` references the originals — they were
only ever inputs to the migration, never served. Delete the archive too once
you no longer want the audit trail.

## Things worth knowing

**The 404 page is the one screen with no original.** The static site shipped
none, so `app/not-found.tsx` was written from scratch — using only existing site
classes (`page-hero`, `section-head`, `platform-row`, `cta-box`, `btn`) so it
inherits the same type, colour and spacing. It is the only authored copy in the
project; reword or remove it freely.

**Two pre-existing bugs were reproduced, not fixed,** to honour the no-content-
changes constraint. Both are in `components/DemoForm.tsx`:

- the sending button label is the literal string `Sending&#8230;` rather than
  `Sending…`
- the relay email subject is `Demo request &#8212; <org>` rather than
  `Demo request — <org>`

They came from an HTML-entity encoding pass that also rewrote strings inside the
original `<script>` block. Replacing those two literals with `…` and `—` fixes
them whenever you want that change.

**Fonts** still load from Google Fonts via the original `<link>` tags rather than
`next/font`, so loading behaviour matches the original exactly. Switching to
`next/font/google` would self-host them and cut a round trip, at the cost of a
build-time network fetch.
