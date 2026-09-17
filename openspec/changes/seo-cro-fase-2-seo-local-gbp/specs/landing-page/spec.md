## ADDED Requirements

### Requirement: Google review call-to-action
The location section (`#contato`) SHALL include a link inviting visitors to leave a review on Google, pointing to the Google review-writing URL built from the venue's real Google Maps Place ID (the same Place ID already used by the existing "Abrir no mapa" link) — no invented or placeholder review content.

#### Scenario: Review link is present and uses the venue's real Place ID
- **WHEN** the location section is rendered
- **THEN** it includes a link to `https://search.google.com/local/writereview?placeid=<the venue's real Place ID>`, next to the existing "Abrir no mapa" link
