## 1. Page scaffold

- [x] 1.1 Create `404.html` at the repo root with `<!doctype html>`, `lang="pt-BR"`, and the shared `<head>` metadata (charset, viewport, theme-color, title, favicon links) matching `index.html`'s conventions, and verify the file loads locally without console errors
- [x] 1.2 Add `<meta name="robots" content="noindex">` and confirm no `<link rel="canonical">` is present, and verify by inspecting the rendered `<head>`
- [x] 1.3 Add the GA4 tag script block with the same measurement ID (`G-GKCP70MKEM`) used in `index.html`, and verify it matches byte-for-byte

## 2. Shared header and footer

- [x] 2.1 Copy the `.site-header` block (logo, nav links, WhatsApp nav button, mobile menu toggle) from `index.html` into `404.html`, and verify visually that it matches the main page's header
- [x] 2.2 Update each nav link href to point to the home page section (`/#espaco`, `/#estrutura`, `/#eventos`, `/#galeria`, `/#contato`) instead of an in-page anchor, and verify each link navigates to `index.html` and scrolls to the right section
- [x] 2.3 Copy the `.footer` block (brand, explore links, contact links, location) from `index.html` into `404.html`, updating its explore links to the same `/#section` pattern, and verify it renders identically to the main page's footer
- [x] 2.4 Copy the `.whatsapp-float` floating button into `404.html`, and verify it opens WhatsApp with the same phone number as the main page

## 3. Not-found content

- [x] 3.1 Build a centered content section (reusing existing typography/spacing classes such as `.section`, `.section-kicker`, heading styles) that states the page was not found, and verify it renders consistently with the site's visual language at desktop width
- [x] 3.2 Add a primary button linking to `/` (home page), and verify activating it navigates to the site root
- [x] 3.3 Add a WhatsApp CTA button in the content section using the same prefilled message pattern as the main page's CTAs, and verify the link opens a WhatsApp chat in a new tab
- [x] 3.4 ~~Add quick links to the main sections in the content section~~ — superseded: removed the separate quick-links block since the shared header nav and footer already link to every section (`/#estrutura`, `/#eventos`, `/#galeria`, `/#contato`); verified those links are present and correct in tasks 2.2 and 2.3

## 4. Page-specific styling

- [x] 4.1 Create `assets/css/404.css` and link it from `404.html` after `styles.css`, and verify it loads with a 200 response
- [x] 4.2 Add a `.not-found-page` class to `<body>` and, in `404.css`, make the header always render in its "scrolled" appearance (cream background, forest logo/text, dark nav button) regardless of scroll position, and verify visually that the header looks scrolled immediately on load
- [x] 4.3 Move the `.not-found`/`.not-found-content` layout rules out of `assets/css/styles.css` into `404.css`, and verify `styles.css` no longer contains page-specific 404 rules

## 5. Verification

- [x] 5.1 Open `404.html` directly in a browser and confirm layout matches `index.html`'s header/footer at desktop, tablet (900px), and mobile (560px) breakpoints, and that the header renders scrolled-style even at the top of the page
- [ ] 5.2 Deploy (or preview via GitHub Pages) and confirm requesting a nonexistent path under the domain returns HTTP 404 with `404.html`'s content
- [x] 5.3 Validate the page's HTML head against the `not-found-page` spec scenarios (noindex present, no canonical, GA4 tag matches) by manual inspection
