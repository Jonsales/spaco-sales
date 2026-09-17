## 1. Crawling and indexing files

- [x] 1.1 Create `robots.txt` at the repo root allowing crawling and pointing to `https://jonsales.github.io/spaco-sales/sitemap.xml`; verify by opening the file and confirming an `Allow`/no blanket `Disallow` and a `Sitemap:` line with the absolute URL
- [x] 1.2 Create `sitemap.xml` at the repo root listing `https://jonsales.github.io/spaco-sales/` in valid sitemap XML; verify it parses as well-formed XML and validates against the sitemap schema (e.g. via an online sitemap validator or `xmllint --noout`)

## 2. Head metadata (canonical, title, description)

- [x] 2.1 Add `<link rel="canonical" href="https://jonsales.github.io/spaco-sales/">` to `index.html`'s `<head>`; verify by inspecting the rendered `<head>`
- [x] 2.2 Replace `<title>` with "Espaço para Eventos e Festas em Jacareí | Spaço Sales"; verify the browser tab title updates and contains "Jacareí"
- [x] 2.3 Replace `<meta name="description">` with the optimized version mentioning Jacareí and at least one concrete differentiator (salão, piscina, pergolado or área externa) plus an invitation to contact; verify by inspecting the tag content against the `seo-metadata` spec's description requirement

## 3. Structured data and social preview

- [x] 3.1 Produce a 1200×630 social preview image under `assets/img/` (crop/export from an existing venue photo) and verify its pixel dimensions with an image tool
- [x] 3.2 Add a JSON-LD `<script type="application/ld+json">` block with `@type: "EventVenue"`, `name`, `telephone`, `address` (`PostalAddress`), `geo` (`GeoCoordinates` matching the existing map coordinates `-23.291475,-46.0441583`), and `sameAs` (Instagram URL); verify by validating the JSON with a JSON-LD/schema.org validator and confirming no `review`, `aggregateRating`, `priceRange`, or `openingHours` properties are present
- [x] 3.3 Add Open Graph tags (`og:type`, `og:title`, `og:description`, `og:url`, `og:locale`, `og:image`, `og:image:width=1200`, `og:image:height=630`) and `<meta name="twitter:card" content="summary_large_image">` to `index.html`'s `<head>`; verify with a social share debugger/preview tool (e.g. a Twitter Card or Open Graph validator) that title, description, and image render correctly

## 4. Image dimensions and loading strategy

- [x] 4.1 Read the real pixel dimensions of every content image referenced in `index.html` (hero, gallery, structure cards, etc.) using an image-inspection tool; record them for use in the next tasks
- [x] 4.2 Add `width` and `height` attributes to every `<img>` in `index.html` matching each image's real aspect ratio (from 4.1); verify by loading the page and confirming no layout shift occurs before images finish loading (e.g. via browser DevTools Layout Shift regions or a Lighthouse CLS check)
- [x] 4.3 Add `loading="lazy"` to every `<img>` outside the hero section; verify via DevTools Network panel that below-the-fold images are not requested until scrolled near
- [x] 4.4 Add `fetchpriority="high"` to the hero `<img>` and confirm it has no `loading="lazy"` attribute; verify via DevTools Network panel that the hero image is requested with high priority immediately on load

## 5. Gallery lightbox fix

- [x] 5.1 Replace the lightbox's static `.image-placeholder` block in `index.html` with an `<img>` element (reusing the existing `.lightbox-image` class for sizing), initially empty/hidden; verify the markup change doesn't alter the closed-lightbox layout
- [x] 5.2 Update `assets/scripts/script.js` so that clicking a `.gallery-item` sets the lightbox `<img>`'s `src` (and `alt`) from the clicked item's own `<img>` `src`/`alt`, in addition to the existing `data-title` caption behavior; verify by clicking each of the 6 gallery items and confirming the correct photo appears in the lightbox each time
- [x] 5.3 Verify existing lightbox interactions still work unchanged: close via close-button click, backdrop click, and Escape key

## 6. Direct phone contact link

- [x] 6.1 Add an `<a href="tel:+5512988556812">` link next to an existing WhatsApp link (header and/or footer); verify by inspecting the rendered HTML and confirming the link is present and correctly formatted

## 7. Cross-cutting verification

- [ ] 7.1 Run the full page through a Lighthouse/PageSpeed Insights check and confirm no new console errors, no broken images, and CLS/LCP show measurable improvement over the pre-change baseline
- [ ] 7.2 Manually diff the rendered page against the current live site (https://jonsales.github.io/spaco-sales/) to confirm no visual/design regression was introduced
- [x] 7.3 Validate `robots.txt`, `sitemap.xml`, and the JSON-LD block once more after all edits are in place, since later tasks (e.g. image attribute changes) could not have affected them but confirms nothing else broke them incidentally
