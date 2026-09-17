## Context

See `proposal.md` — Why. The site is a single static `index.html` plus `assets/css/`, `assets/scripts/script.js`, hosted on GitHub Pages with no build step, no bundler, and no server-side rendering. All changes here must work as plain static files served as-is.

Relevant current state (from the codebase):
- `index.html` head currently has `title`, `description`, `theme-color`, favicons, and Google Fonts links — no `canonical`, no `robots` meta, no JSON-LD, no Open Graph/Twitter tags.
- No `robots.txt` or `sitemap.xml` exist at the repo root.
- Content images (`hero.JPG`, `foto-espaco-01.jpeg`, `salao_principal.jpg`, etc.) are `<img>` tags without `width`/`height`/`loading` attributes; several are large (`hero.JPG` ~766 KB).
- `assets/scripts/script.js` implements the gallery lightbox by writing `item.dataset.title` into `#lightboxTitle`/`#lightboxLabel` text nodes; the lightbox markup (`#lightbox`) has no `<img>` element — it uses a static `.image-placeholder` div with a caption span.
- WhatsApp links use `wa.me/5512988556812` with URL-encoded pre-filled messages; there is no `tel:` link anywhere on the page.

## Goals / Non-Goals

**Goals:**
- Make the page reliably crawlable and give search engines/social platforms accurate, structured signals (canonical, sitemap, robots, JSON-LD, Open Graph).
- Reduce layout shift and initial payload via explicit image dimensions and lazy loading, without changing visual output.
- Fix the lightbox so it shows the real photo, using the image markup that already exists in the gallery grid.
- Add a `tel:` link with zero layout/design impact.

**Non-Goals:**
- No visual redesign, no new CSS components, no changes to the responsive grid system (all covered by the existing `landing-page` spec and left untouched).
- No image re-encoding/compression pipeline or WebP/AVIF conversion — that is a separate, larger effort (image asset optimization) planned for a later phase; this phase only adds `width`/`height`/`loading`/`fetchpriority` attributes to the existing files.
- No analytics/tag manager wiring (Phase 3).
- No new pages or content sections.

## Decisions

**1. JSON-LD type: `EventVenue` over generic `LocalBusiness`.**
`EventVenue` (a schema.org subtype of `LocalBusiness`/`Place`) is the most specific type available for a physical space rented out for events, per the earlier audit. Using the most specific applicable type is schema.org best practice and avoids under-describing the business. Alternative considered: plain `LocalBusiness` — rejected as less specific than warranted.

**2. Determine `width`/`height` values by reading actual file dimensions, not guessing.**
Each image's real pixel dimensions will be read from the file (e.g. via an image-inspection tool/script) before writing the attributes, so the declared aspect ratio matches the file exactly and doesn't fight the CSS framing classes already defined in the `landing-page` spec (`image-hero`, `image-tall`, etc., which set `aspect-ratio` via CSS). The HTML `width`/`height` attributes only need to communicate the intrinsic ratio for browser layout reservation — the CSS classes still control the final rendered box.

**3. Lightbox fix reuses the existing gallery `<img>` rather than fetching/duplicating image data.**
Each `.gallery-item` button already wraps an `<img src="...">`. The fix reads that same `src` (and `alt`) when a gallery item is clicked and sets it on an `<img>` placed inside `#lightbox` (replacing the current static `.image-placeholder` div), instead of introducing a second copy of the image list in JS or fetching anything. This keeps the gallery as the single source of truth for which photos exist. Alternative considered: a `data-full-src` attribute pointing to a higher-resolution version — rejected as unnecessary for this phase since no separate high-res assets exist yet; can be added later without changing this requirement's contract (the spec only requires "that item's own photo", not a specific resolution).

**4. `robots.txt` and `sitemap.xml` hardcode the current GitHub Pages URL.**
Since the domain migration to `spacosales.com.br` is a separate, later phase (Phase 5 in the roadmap), these files intentionally reference `https://jonsales.github.io/spaco-sales/` for now. The migration phase will update them, along with canonical, Open Graph `og:url`, and JSON-LD, in one coordinated change.

**5. Social preview image is a new static asset, not a generated one.**
A single 1200×630 JPG/PNG will be added under `assets/img/` (e.g. cropped from an existing venue photo), referenced by `og:image`. No dynamic image generation is introduced, consistent with the static-site, no-build-step constraint.

## Risks / Trade-offs

- **[Risk]** Declaring `width`/`height` that don't match an image's true aspect ratio would visually distort it if CSS `object-fit` isn't already applied. → **Mitigation**: verify the CSS framing classes (`.image-*`) already use `object-fit: cover` (per current styling) before finalizing attribute values, and derive attribute values from the actual file dimensions, not estimates.
- **[Risk]** `loading="lazy"` on an image just below the fold (e.g. the intro section's `foto-espaco-01.jpeg`) could cause a visible pop-in on fast scroll. → **Mitigation**: this is standard, accepted lazy-loading behavior across production sites and is explicitly scoped to non-hero images by the spec; no mitigation beyond browser-native lazy loading is needed.
- **[Risk]** Replacing the lightbox's placeholder `<img>` markup could interact with existing lightbox CSS (`.lightbox-image`, `.image-placeholder`) sized for a decorative block rather than a photo. → **Mitigation**: keep the existing `.lightbox-image` sizing/positioning class on the new `<img>` element (add `object-fit: contain` if not already present) so the change is additive to markup, not a CSS rewrite.
- **[Risk]** JSON-LD `sameAs`/`telephone`/address values drifting from what's shown in visible page content if either is edited later without the other. → **Mitigation**: none automated in this phase (no CI schema validation exists); flagged as a manual-consistency note for future edits.

## Migration Plan

No data migration. Deployment is: commit changes to `main`, GitHub Pages redeploys automatically. Rollback is a plain `git revert` of the commit(s), since all changes are static files with no external state.
