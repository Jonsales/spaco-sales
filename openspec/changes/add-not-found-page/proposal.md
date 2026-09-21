## Why

The site has no `404.html` at its repo root, so GitHub Pages currently falls back to its generic, unbranded 404 page for any broken or outdated link (old Instagram bio links, mistyped URLs, removed anchors). That page has no navigation, no way back to the site, and no WhatsApp CTA — a dead end that loses a visitor who was otherwise interested.

## What Changes

- Add a `404.html` file at the repo root, styled with the same design system as `index.html` (header with logo/nav, footer, WhatsApp floating button), so GitHub Pages serves it automatically (with a real HTTP 404 status) for any unmatched URL.
- The page communicates that the content wasn't found, offers a button back to the home page, and repeats the WhatsApp CTA and quick links to the main sections (Estrutura, Eventos, Galeria, Contato) so a lost visitor isn't dead-ended.
- Header navigation links point to `/#<section>` (absolute anchors) since the 404 page has no sections of its own.
- The page keeps the same GA4 tag (`G-GKCP70MKEM`) as the rest of the site, so broken-link traffic is visible in Analytics.
- The page declares `<meta name="robots" content="noindex">` so it is never indexed as real content, and does not declare a canonical URL.

## Capabilities

### New Capabilities
- `not-found-page`: defines the existence, content, navigation, and crawl behavior of the site's custom 404 page.

### Modified Capabilities
(none — this reuses the existing `landing-page` design system without changing its requirements, and does not change `seo-metadata`, which scopes only the main page)

## Impact

- New file: `404.html` at the repo root.
- Reuses existing `assets/css/styles.css` and shared assets (logo, WhatsApp icon); no changes to `index.html`, `styles.css`, or other existing specs.
- No build step or server config involved — GitHub Pages serves `404.html` natively from the repo root.
