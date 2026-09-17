## Context

The site is a single static `index.html` with no build step, no backend, and no existing analytics or tag manager. It already has 6 WhatsApp links (`wa.me`), 6 Instagram links, one "Abrir no mapa" link, and one "Avaliar no Google" link (see proposal.md for why these matter). There is no GA4 property or Measurement ID for this site yet — the user is creating one and will provide the real `G-XXXXXXXXXX` ID separately.

## Goals / Non-Goals

**Goals:**
- Install a standard `gtag.js` GA4 snippet, with a real Measurement ID, that works on GitHub Pages with no server/build step.
- Fire the three defined events (`contato_whatsapp`, `interacao_localizacao`, `clique_instagram`) on the relevant existing links without changing their visible markup, text, or styling.

**Non-Goals:**
- Configuring GA4-side conversions, audiences, or reports — that happens inside the GA4 web interface, not in this codebase.
- Google Tag Manager — a single static site with 3 simple events doesn't need a tag-management layer; `gtag.js` directly is simpler and has one less moving part.
- Cookie-consent banner — out of scope for this phase; flagged as an open question below since it may be legally required depending on how the user configures the GA4 property (IP anonymization, consent mode), which is outside this repo.
- Tracking `tel:` clicks (phone) — the user did not select this event for Fase 3; can be added later without a design change if requested.

## Decisions

- **Use `gtag.js` loaded directly from Google's CDN, with `addEventListener` calls in `assets/scripts/script.js`, instead of adding `onclick` attributes inline in `index.html`.** Keeps the tracking logic in one place (consistent with how the lightbox/scroll behaviors already live in `script.js`) and keeps `index.html` free of inline JS handlers.
- **Select tracked elements by existing `href` patterns (`wa.me`, the Instagram URL, the two location-section links), not by adding new classes or IDs.** No markup restructuring needed; the CSS/HTML from Fases 1–2 stays untouched, matching this phase's non-goal of no visual change.
- **Do not hardcode a placeholder Measurement ID.** Per the project's standing rule against inventing data, the snippet is only written once a real ID is available — the first task blocks on the user supplying it, mirroring how Fase 2 wouldn't invent a Place ID.

## Risks / Trade-offs

- [Risk] Without a real Measurement ID yet, this change cannot be fully implemented today → Mitigation: tasks.md's first task is explicitly "obtain the real ID from the user"; apply will pause there if it's still missing when implementation starts.
- [Risk] `gtag.js` is a third-party script and will add to the third-party cookie count Lighthouse already flagged from the Maps embed (pre-existing, Fase 1 finding) → Mitigation: expected and acceptable trade-off of adding analytics; no action needed, just noting it won't be mistaken for a new regression.
- [Risk] GA4's default configuration may set cookies that require visitor consent under Brazilian LGPD depending on how the property is configured → Mitigation: flagged as an open question below; not blocking this phase's code change, but the user should confirm their GA4 property's data-collection settings.

## Open Questions

- Does the venue need a cookie-consent banner for LGPD compliance once GA4 is live? This depends on the GA4 property's own configuration (e.g. consent mode, data retention), which happens outside this repository — worth a quick manual check by the user after Fase 3 ships, not a blocker for writing the tracking code itself.
