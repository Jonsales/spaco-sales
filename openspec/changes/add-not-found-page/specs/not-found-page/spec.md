## Purpose

Defines the existence, content, navigation, and crawl behavior of the site's custom 404 page, so a visitor who reaches a broken or outdated URL lands on a branded page that guides them back into the site instead of a dead end.

## ADDED Requirements

### Requirement: Custom 404 file at the site root

The site SHALL serve a `404.html` file at its root, so the hosting platform's native not-found mechanism returns it (with an HTTP 404 status) for any requested path that does not match an existing file.

#### Scenario: Unmatched URL serves the custom 404 page
- **WHEN** a visitor requests a URL under the site's domain that does not correspond to an existing file
- **THEN** the response body is the content of `404.html` and the response status is 404

### Requirement: Branded not-found content

The 404 page SHALL reuse the site's header (logo and navigation), footer, and design system (colors, typography, spacing) from the main landing page, and SHALL clearly state that the requested page was not found.

#### Scenario: Page renders with the shared header and footer
- **WHEN** the 404 page is rendered
- **THEN** it includes the same site header (logo, navigation links, WhatsApp button) and footer as `index.html`, styled with the same stylesheet and design tokens

#### Scenario: Not-found message is visible
- **WHEN** the 404 page is rendered
- **THEN** it displays a clear message indicating the requested page does not exist

### Requirement: Recovery paths back into the site

The 404 page SHALL offer a way back to the home page, the same WhatsApp contact call-to-action used elsewhere on the site, and links to the main sections of the home page.

#### Scenario: Button returns to the home page
- **WHEN** a visitor activates the "back to home" action on the 404 page
- **THEN** they are navigated to the site's root URL

#### Scenario: WhatsApp CTA is present
- **WHEN** the 404 page is rendered
- **THEN** it includes a link to the same WhatsApp number used on the main page, opening a chat in a new tab

#### Scenario: Header navigation links resolve to home page sections
- **WHEN** a visitor activates a navigation link (e.g. "Estrutura", "Eventos", "Galeria", "Contato") from the 404 page
- **THEN** they are navigated to the corresponding section of the home page (e.g. `/#estrutura`)

### Requirement: Excluded from search indexing

The 404 page SHALL declare `<meta name="robots" content="noindex">` in its `<head>` and SHALL NOT declare a canonical URL, so search engines never treat it as indexable content or as the authoritative version of another page.

#### Scenario: Noindex directive is present
- **WHEN** the 404 page's `<head>` is parsed
- **THEN** it includes `<meta name="robots" content="noindex">`

#### Scenario: No canonical link is declared
- **WHEN** the 404 page's `<head>` is parsed
- **THEN** it contains no `<link rel="canonical">` element

### Requirement: Analytics tracking parity

The 404 page SHALL load the same Google Analytics (GA4) tag used on the main page, so traffic that lands on broken links is visible in Analytics.

#### Scenario: GA4 tag fires on the 404 page
- **WHEN** the 404 page is loaded in a browser
- **THEN** it loads the same GA4 measurement ID used on the main landing page
