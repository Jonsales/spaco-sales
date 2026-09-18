## 1. CSS fix

- [x] 1.1 In `assets/css/styles.css`, inside the existing `@media(max-width:900px)` block, add a `box-shadow` override for `.whatsapp-float` with a smaller blur/offset (e.g. `0 4px 12px rgba(0,0,0,.18)`) than the desktop rule at line 922, and verify the desktop (>900px) rule is untouched.
- [ ] 1.2 Verify on an actual iPhone Safari (or via remote debugging/screen mirroring) that the button no longer shows a dark smudge below it near the bottom toolbar, at default zoom and after pinch-zooming in.
- [ ] 1.3 Verify the button still looks intentional (not flat/shadowless) on mobile viewports between 561px-900px and below 560px.
