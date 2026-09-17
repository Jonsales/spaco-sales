## 1. Prerequisite

- [x] 1.1 Confirm the real GA4 Measurement ID (format `G-XXXXXXXXXX`) with the user; do not proceed to task 2 until a real ID is provided — verify by having the ID in hand before editing any file — confirmed by user: `G-GKCP70MKEM`

## 2. GA4 snippet installation

- [x] 2.1 Add the standard `gtag.js` snippet to `index.html`'s `<head>`, configured with the confirmed Measurement ID; verify by inspecting the rendered `<head>` for the `googletagmanager.com/gtag/js` script tag and a matching `gtag('config', '<id>')` call

## 3. Event tracking

- [x] 3.1 In `assets/scripts/script.js`, add a click listener that fires a `contato_whatsapp` GA4 event for any link whose `href` starts with `https://wa.me/`; verify by clicking each of the 6 WhatsApp links (header, hero, aniversário CTA, final-cta, footer, floating button) with the browser's network/console tools open and confirming the event fires each time — 6/6 `wa.me` links confirmed present and matched by the `a[href^="https://wa.me/"]` selector; live-click verification deferred to task 4.1 (needs a real browser + live GA4 property)
- [x] 3.2 Add a click listener that fires an `interacao_localizacao` GA4 event (with a parameter identifying which link) for the "Abrir no mapa" and "Avaliar no Google" links; verify by clicking both and confirming the event fires with the correct identifying parameter — both links confirmed as the only two children of `.location-actions`, each event carries the link's visible text as `link_label`; live-click verification deferred to 4.1
- [x] 3.3 Add a click listener that fires a `clique_instagram` GA4 event for any link whose `href` is the Instagram profile URL; verify by clicking each of the 6 Instagram links and confirming the event fires each time — 6/6 Instagram links confirmed matched by the selector; live-click verification deferred to 4.1
- [x] 3.4 Confirm no event payload includes visitor-entered text or personal data — verify by inspecting the `gtag('event', ...)` calls added in 3.1–3.3 and confirming their parameters only identify the clicked element (e.g. link location/label), nothing else — confirmed: `link_location` uses only the link's static `className`, `link_label` uses only the link's static button text; no visitor input, phone numbers, or message text is captured

## 4. Cross-cutting verification

- [ ] 4.1 Load the page with GA4's DebugView (or the browser's network tab filtering for `google-analytics.com/g/collect`) and confirm a page_view event fires automatically and all 3 custom events fire correctly when triggered — report result back, since this requires a real browser and a live GA4 property this session does not have
- [x] 4.2 Confirm no existing visible markup, styling, or link `href`/text changed as a side effect of adding tracking — quick visual check of the header, hero, location section, Instagram section, and footer — confirmed: this phase's edits were purely additive (the `gtag.js` snippet inserted into `<head>`, new listeners appended to the end of `script.js`); no existing line of markup, CSS, or link `href`/text was modified or removed
