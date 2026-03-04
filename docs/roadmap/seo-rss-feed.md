# SEO + RSS Feed for SCREED

**Status:** Done (merged PR #2, 2026-03-03)
**Branch:** `feat/seo-rss` off `main`

## Why

SCREED has basic Open Graph tags but no RSS feed, sitemap, robots.txt, canonical URLs, Twitter cards, or structured data. Feed readers can't discover new posts, and search engines have limited crawl guidance. This adds all of those in one pass.

---

## Steps

### 1. Install RSS plugin

```bash
npm install @11ty/eleventy-plugin-rss
```

v2.x (CJS-compatible, matches the project's CommonJS setup).

### 2. New file: `src/_data/site.json`

Global data so the site URL isn't hardcoded in multiple templates:

```json
{
  "title": "SCREED",
  "url": "https://screed.cultureshock.xyz",
  "description": "Dispatches from the underground. A counterculture document drop.",
  "language": "en"
}
```

### 3. Modify: `.eleventy.js`

- `require` and register `feedPlugin` (Atom format, `/feed.xml`, collection `"doc"`, limit 20)
- Add `data: "_data"` to dir config (explicit)

### 4. New file: `src/sitemap.njk`

Nunjucks template generating `/sitemap.xml` from `collections.all`. Uses `site.url` + `page.url` for absolute URLs, `dateToISO` for lastmod. Excluded from collections.

### 5. New file: `src/robots.njk`

Generates `/robots.txt` pointing to the sitemap. Excluded from collections.

### 6. Modify: `src/_includes/layouts/base.njk` (head section)

Add in this order after the existing `<meta name="description">`:

- `<link rel="canonical">` using `site.url` + `page.url`
- `<link rel="alternate" type="application/atom+xml">` pointing to `/feed.xml`
- Twitter Card meta: `twitter:card` (summary), `twitter:title`, `twitter:description`
- Article-specific OG: `article:published_time`, `article:author` (inside existing `{% if date %}` block)
- JSON-LD: Article schema on doc pages, WebSite schema on homepage

Replace hardcoded `"SCREED"` and `"Dispatches from the underground."` with `site.title` / `site.description` from global data.

**CSP note:** `<script type="application/ld+json">` is not executable JS — the existing `script-src 'self'` CSP does not block it. No `_headers` changes needed.

---

## Files touched

| File | Action |
|------|--------|
| `package.json` | Modified (npm install) |
| `src/_data/site.json` | New |
| `.eleventy.js` | Modified |
| `src/sitemap.njk` | New |
| `src/robots.njk` | New |
| `src/_includes/layouts/base.njk` | Modified |

---

## Verification

After implementation, run `npm start` and check:

- [ ] `/feed.xml` — valid Atom XML with doc entries, full content
- [ ] `/sitemap.xml` — lists all pages with absolute URLs
- [ ] `/robots.txt` — references sitemap
- [ ] View source on a doc page: canonical link, feed link, Twitter Card meta, Article JSON-LD
- [ ] View source on homepage: canonical link, feed link, Twitter Card meta, WebSite JSON-LD
- [ ] No CSP violations in browser console
