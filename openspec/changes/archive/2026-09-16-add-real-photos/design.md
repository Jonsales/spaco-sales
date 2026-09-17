## Context

Every framing class (`.image-hero`, `.image-tall`, `.image-wide`, `.image-space-1..7`, `.image-birthday`, `.image-detail`, and the gallery `g1..g6` grid-sizing classes) currently sets sizing (`aspect-ratio`, `grid-column`/`grid-row`, etc.) for a `.image-placeholder` `<div>` — a flex container showing a gradient + caption. `styles.css` has no `object-fit` rule anywhere; the only global `img` rule is `img{max-width:100%;display:block}` (`styles.css`).

## Goals / Non-Goals

**Goals:**
- Real photos fill their framing box exactly like the placeholder did, cropping instead of stretching when the photo's native aspect ratio doesn't match the box.

**Non-Goals:**
- Art-directing per-photo crop focal points (`object-position`) — default centering is enough for this pass; revisit per-photo only if a specific crop looks wrong.

## Decisions

- Add one additive CSS rule targeting `<img>` elements carrying a framing class, setting `width:100%;height:100%;object-fit:cover;display:block`. This keeps the existing framing classes as the single source of sizing truth (per the "Placeholder image convention" requirement) instead of introducing a parallel image-specific class system.
- Where a placeholder today is a wrapper `<div class="image-placeholder image-hero"><span>...</span></div>`, the replacement is `<img class="image-hero" src="assets/img/...">` directly — no wrapper div, no span — matching the proposal's "surrounding framing class is preserved" language literally (the class moves onto the `<img>` itself).

## Risks / Trade-offs

- [Risk] A framing class also styled `.image-placeholder`-specific things (e.g. `.image-placeholder:before` gradient overlay, caption `<span>` sizing) that won't apply to a bare `<img>` → Mitigation: none needed, that decorative styling is placeholder-only by design and is expected to disappear once a real photo replaces it.
- [Risk] `object-fit:cover` on a very differently-cropped source photo could crop out an important part of the image → Mitigation: accepted for this pass per Non-Goals; flag specific bad crops after visual review instead of solving pre-emptively.
