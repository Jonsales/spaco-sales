## Why

The landing page currently has no written record of its initial design system, responsive breakpoints, and section inventory — that knowledge only exists implicitly in `index.html`/`styles.css`. Before any future change (real photos, new sections, layout tweaks), we need a baseline spec capturing the current state so changes can be diffed against a known reference.

## What Changes

- Document the current design tokens (color palette, typography, container/easing tokens).
- Document the two responsive breakpoints (900px, 560px) and what changes at each.
- Document the ordered inventory of page sections, their layout pattern, and current placeholder status.
- No code changes — this is a documentation-only baseline capture.

## Capabilities

### New Capabilities
- `landing-page`: The visual design system, responsive breakpoints, and section structure of the Spaço Sales landing page (`index.html` + `styles.css`).

### Modified Capabilities
- (none)

## Impact

Documentation only. No changes to `index.html`, `styles.css`, or `script.js`. Establishes `openspec/specs/landing-page/spec.md` as the reference for future changes to this page.
