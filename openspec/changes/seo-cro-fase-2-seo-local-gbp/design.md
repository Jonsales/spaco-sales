## Context

The site already publishes a real Google Maps "Abrir no mapa" link in the location section:
`https://www.google.com/maps/place/Spa%C3%A7o+Sales/@-23.291475,-46.0441583,17z/data=!3m1!4b1!4m6!3m5!1s0x94cc33007f05a187:0x8e0ffcb14cf0bc90!8m2!3d-23.291475!4d-46.0441583!16s%2Fg%2F11vppzf6sv`

Embedded in that URL is the venue's CID (`0x94cc33007f05a187:0x8e0ffcb14cf0bc90`), the identifier Google uses for this specific listing. This is the only Place/CID data available in the codebase — see proposal.md for why fixing NAP consistency and linking the GBP listing matters now.

## Goals / Non-Goals

**Goals:**
- Make the visible address and the JSON-LD address byte-identical.
- Link the site to its real Google Business Profile listing via structured data (`sameAs`) and a visible review CTA, using only the CID already published on the page — no invented Place ID.

**Non-Goals:**
- Claiming, verifying, or editing the Google Business Profile itself (categories, hours, photos, description) — that happens in the Google Business Profile account, outside this repository, and is not a code task. Recorded here as a follow-up recommendation, not a `tasks.md` item.
- Collecting or displaying real reviews/ratings on the site (still explicitly excluded, per Fase 1's data-fabrication rule — reviews must come from Google itself, not be invented or scraped).
- Any visual/design change — this phase only touches text content and a link's `href`.

## Decisions

- **Reuse the existing CID as the review-link identifier, instead of looking up a separate "Place ID".** Google's review-write endpoint (`https://search.google.com/local/writereview?placeid=...`) accepts the same CID value already embedded in a standard Maps share/place URL — the `0x...:0x...` pair — so no new external lookup or API call is needed; the identifier used for the `sameAs` entry and the review link is exactly the one already trusted by the existing "Abrir no mapa" link. Alternative considered: querying the Google Places API for a canonical `place_id` — rejected because it requires an API key and billing account, which is out of scope for a static GitHub Pages site with no backend.
- **Fix the address typo by editing the visible `<address>` to match the JSON-LD spelling ("Igarapés"), not the other way around.** The JSON-LD was written deliberately against source data in Fase 1; the visible text is the one with the accidental typo.
- **Place the review CTA next to "Abrir no mapa" in the location section**, not in the footer or header, since it's most relevant to someone already looking at the venue's location/map.

## Risks / Trade-offs

- [Risk] The review-write URL built from the CID has not been clicked/verified from inside this session (no browser access here) → Mitigation: task list includes a manual verification step where the user opens the published link and confirms it lands on a Google review form for Spaço Sales, the same pattern used for Fase 1's Lighthouse check.
- [Risk] If the venue's Google Business Profile is not yet claimed/verified, the review link may still work (reviews can be left on unclaimed listings) but the `sameAs` linkage carries less weight until the profile is verified → Mitigation: documented as a recommended manual follow-up, not blocking this change.

## Migration Plan

Small, additive text/attribute edits to `index.html` only. Rollback is a plain `git revert` of the commit if the review link or address text needs correction.
