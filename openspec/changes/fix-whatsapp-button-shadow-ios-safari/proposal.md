## Why

On iPhone Safari, the fixed WhatsApp CTA button shows a visible dark smudge below it that does not appear on desktop browsers or in DevTools mobile emulation. The button's `box-shadow` (`0 12px 35px rgba(0,0,0,.18)`) is large enough to extend into the region where Safari's translucent, compact bottom toolbar live-blurs the page content behind it, so the shadow bleeds into the browser chrome. This is a visible visual defect for real iPhone visitors, the button's most common context given it exists specifically for mobile contact.

## What Changes

- Reduce the `.whatsapp-float` box-shadow within the existing `max-width:900px` mobile media query (`assets/css/styles.css`) so it no longer extends far enough to be visible through Safari's translucent bottom toolbar.
- No change to the button's position, size, color, or desktop appearance — desktop is unaffected by this bug and keeps its current shadow.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `landing-page`: adds a requirement that the WhatsApp floating CTA's shadow must be constrained on mobile viewports so it does not visually bleed into mobile browser chrome (e.g. Safari's translucent toolbar).

## Impact

- `assets/css/styles.css`: `.whatsapp-float` rule inside the `@media(max-width:900px)` block (around line 1062-1069).
- No HTML or JS changes required.
- No impact on desktop layout, other breakpoints, or other floating/fixed elements.
