## ADDED Requirements

### Requirement: WhatsApp floating CTA shadow does not bleed into mobile browser chrome
The `.whatsapp-float` button's `box-shadow` on mobile viewports (`max-width:900px`) SHALL be small enough (blur and vertical offset) that it does not visually extend into the region occupied by a mobile browser's translucent bottom toolbar (e.g. Safari's compact/collapsed address bar on iOS), so no dark smudge appears below the button. Desktop appearance (viewports above 900px) is unaffected and keeps the existing shadow.

#### Scenario: WhatsApp button viewed on iPhone Safari
- **WHEN** a visitor views the page on iPhone Safari with the compact bottom toolbar active
- **THEN** no visible shadow/smudge from the WhatsApp button appears below it, over or near the browser's toolbar area

#### Scenario: WhatsApp button viewed on desktop
- **WHEN** a visitor views the page on a desktop browser (viewport wider than 900px)
- **THEN** the WhatsApp button keeps its original, more pronounced drop shadow
