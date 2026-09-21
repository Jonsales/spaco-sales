## Why

The site has no `404.html` at its repo root, so GitHub Pages currently falls back to its generic, unbranded 404 page for any broken or outdated link (old Instagram bio links, mistyped URLs, removed anchors). That page has no navigation, no way back to the site, and no WhatsApp CTA — a dead end that loses a visitor who was otherwise interested.

## What Changes

- Add a `404.html` file at the repo root, styled with the same design system as `index.html` (header with logo/nav, footer, WhatsApp floating button), so GitHub Pages serves it automatically (with a real HTTP 404 status) for any unmatched URL.
- The page communicates that the content wasn't found and offers a button back to the home page plus the same WhatsApp CTA used elsewhere on the site, so a lost visitor isn't dead-ended. Navigation back to the home page's sections is provided by the shared header and footer links (no separate quick-links block in the page content).
- Header navigation links point to `/#<section>` (absolute anchors) since the 404 page has no sections of its own.
- The header always renders in its "scrolled" appearance (solid cream background, forest-green logo/text) instead of the transparent overlay style used at the top of the main page, since the 404 page has no hero image behind it.
- The page keeps the same GA4 tag (`G-GKCP70MKEM`) as the rest of the site, so broken-link traffic is visible in Analytics.
- The page declares `<meta name="robots" content="noindex">` so it is never indexed as real content, and does not declare a canonical URL.
- Page-specific styling (the always-scrolled header and the not-found content layout) lives in a new `assets/css/404.css`, loaded only by `404.html`, instead of growing `styles.css` with rules the main page never uses.

## Capabilities

### New Capabilities
- `not-found-page`: defines the existence, content, navigation, and crawl behavior of the site's custom 404 page.

### Modified Capabilities
(none — this reuses the existing `landing-page` design system without changing its requirements, and does not change `seo-metadata`, which scopes only the main page)

## Impact

- New files: `404.html` and `assets/css/404.css` at their respective paths.
- Reuses existing `assets/css/styles.css` and shared assets (logo, WhatsApp icon); no changes to `index.html` or other existing specs.
- No build step or server config involved — GitHub Pages serves `404.html` natively from the repo root.
