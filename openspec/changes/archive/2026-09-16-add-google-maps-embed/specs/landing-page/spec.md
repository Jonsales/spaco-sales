## ADDED Requirements

### Requirement: Location map embed
The location section (`#contato`) SHALL display a real, embedded Google Map in place of the decorative `.map-placeholder` block, using the Google Maps `output=embed` iframe format (no API key required) centered on the venue's verified coordinates (`-23.291475,-46.0441583`, the same coordinates used by the existing "Abrir no mapa" link).

#### Scenario: Map renders the verified location
- **WHEN** the location section is rendered
- **THEN** an iframe pointing to Google Maps `output=embed` with coordinates `-23.291475,-46.0441583` is present in place of the former `.map-placeholder` block

#### Scenario: Map styling lives in a dedicated stylesheet
- **WHEN** any CSS rule targets the map embed (container sizing, iframe, color filter)
- **THEN** that rule is defined in a dedicated `map.css` file linked from `index.html`, and no map-embed rule is added to `styles.css`

#### Scenario: Map colors are tinted toward the site palette
- **WHEN** the map iframe is rendered
- **THEN** a CSS filter (grayscale + sepia) is applied to it so its colors read closer to the site's forest/sand palette instead of Google's default map styling

#### Scenario: No redundant pin overlay
- **WHEN** the map is displayed
- **THEN** no separate "SPAÇO SALES" badge/pin overlay is rendered on top of it, since the embedded map's own marker already identifies the location
