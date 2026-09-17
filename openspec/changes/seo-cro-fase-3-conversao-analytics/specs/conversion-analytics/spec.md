## Purpose

Defines how the site measures visitor behavior — which analytics snippet is installed and which visitor interactions are recorded as trackable events — so future decisions about content, SEO, and paid traffic can be based on real usage data instead of guesses.

## ADDED Requirements

### Requirement: Google Analytics 4 tracking snippet
The page SHALL load the Google Analytics 4 (`gtag.js`) tracking snippet in its `<head>`, configured with a real Measurement ID belonging to a GA4 property for this site. No placeholder, example, or invented Measurement ID SHALL be committed.

#### Scenario: gtag.js is present and configured with a real Measurement ID
- **WHEN** the page's `<head>` is rendered
- **THEN** it includes the `gtag.js` script loaded from `https://www.googletagmanager.com/gtag/js` and a `gtag('config', '<Measurement ID>')` call using a Measurement ID matching the format `G-XXXXXXXXXX`

### Requirement: WhatsApp contact conversion event
Every link that opens a WhatsApp conversation (`wa.me` links, including the floating WhatsApp button) SHALL fire a `contato_whatsapp` GA4 event on click, so WhatsApp contact intent is measurable as a conversion.

#### Scenario: Clicking any WhatsApp link fires the conversion event
- **WHEN** a visitor clicks any link whose `href` starts with `https://wa.me/`
- **THEN** a `contato_whatsapp` event is sent to GA4 before or without blocking navigation to WhatsApp

### Requirement: Location interaction event
The "Abrir no mapa" and "Avaliar no Google" links in the location section SHALL each fire an `interacao_localizacao` GA4 event on click, so interest in visiting or reviewing the venue is measurable.

#### Scenario: Clicking "Abrir no mapa" or "Avaliar no Google" fires the event
- **WHEN** a visitor clicks the "Abrir no mapa" link or the "Avaliar no Google" link
- **THEN** an `interacao_localizacao` event is sent to GA4, identifying which of the two links was clicked

### Requirement: Instagram click event
Every link pointing to the venue's Instagram profile SHALL fire a `clique_instagram` GA4 event on click, tracked as an engagement signal distinct from the WhatsApp conversion event.

#### Scenario: Clicking any Instagram link fires the engagement event
- **WHEN** a visitor clicks any link whose `href` is the venue's Instagram profile URL
- **THEN** a `clique_instagram` event is sent to GA4

### Requirement: No additional personal data collection
Event tracking SHALL NOT collect or transmit any visitor personal data beyond what GA4 collects by default (e.g. no capturing of WhatsApp message text, phone numbers entered by the visitor, or form input).

#### Scenario: Event payloads carry no visitor-entered content
- **WHEN** any of the tracked events (`contato_whatsapp`, `interacao_localizacao`, `clique_instagram`) is sent
- **THEN** its event parameters identify only which link/element was clicked, not any text the visitor typed or personal data about them
