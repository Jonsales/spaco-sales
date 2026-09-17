## Context

The site is a single static page with a fixed section order (see `landing-page` spec's "Ordered section inventory"). It has no FAQ or testimonials section today. The user provided, in chat, the real facts needed for the FAQ and 4 real Google review screenshots (reviewer name, star rating, review text) to use as testimonials — see proposal.md for why this matters now.

## Goals / Non-Goals

**Goals:**
- Answer the site's biggest pre-contact objections (capacity, what's included, price, how to visit) using only confirmed facts.
- Show real social proof (4 real Google reviews) without fabricating or altering review content.
- Strengthen long-tail SEO for event-type searches without inventing new claims.

**Non-Goals:**
- Live-updating reviews pulled from the Google Business Profile API — the user mentioned this as a future desire; this phase uses static, manually-transcribed review content instead. A live integration would need a backend or a third-party embed widget, which is a bigger, separate effort for a later phase.
- Adding `review`/`aggregateRating` structured data (JSON-LD) for the 4 testimonials — real reviews now exist, which would make this technically honest, but it's a `seo-metadata` capability change, not `landing-page`, and expands this phase's scope. Flagged as a good candidate for a future phase if the user wants it.
- Any new page/URL for event types — the user chose to expand the existing single-page section instead of creating dedicated pages per event type.
- Redesigning existing sections' visual style — new sections follow the existing design tokens; no new CSS custom properties, breakpoints, or component patterns are introduced.

## Decisions

- **Use the 4 Google reviews exactly as transcribed from the user's screenshots, including reviewer names, unedited.** The user explicitly confirmed using all 4 as-is, including the review attributed to "Jonathan Sales" (the venue's own owner) without a disclosure label — a concern this design raised with the user directly, who decided to proceed as a normal testimonial. Recorded here for transparency, not as an unresolved risk.
- **Place the new sections in the order `quote → testimonials → faq → instagram`**, right before the location/contact section — standard CRO ordering (build trust with social proof → answer objections → make it easy to act), and it doesn't disturb the anchor-linked sections (`#estrutura`, `#eventos`, `#galeria`, `#contato`) referenced by the nav.
- **Expand event-type copy in place rather than creating new URLs**, per the user's explicit choice — keeps the site a single static page with no routing/sitemap/canonical changes needed.
- **FAQ content stays limited to the 4 confirmed questions.** No speculative FAQ entries (e.g. "can I bring outside catering?") are added without the user confirming the real answer — same anti-fabrication rule as every prior phase.

## Risks / Trade-offs

- [Risk] The Larissa Furtado review contains a minor criticism ("só falta uns ventilador") within an otherwise 5-star review → Mitigation: kept as-is per the "no altering review text" requirement; an honest, mostly-positive real review is more credible than a filtered one, and altering it would violate the anti-fabrication rule this project has followed since Fase 1.
- [Risk] The owner's own review being shown without a disclosure label could look inauthentic to a visitor who happens to recognize the name → Mitigation: the user was explicitly informed of this concern before deciding; not re-litigated here, but documented for future reference.

## Migration Plan

Additive HTML/CSS changes only (two new sections, expanded text in an existing section). Rollback is a plain `git revert` if any content needs correction.
