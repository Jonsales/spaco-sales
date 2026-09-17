## Why

The client added real photos of the venue to `assets/img/` (filenames matching most placeholders one-to-one). The page still shows `.image-placeholder` gradient blocks for these — swapping them in is exactly the replacement path the "Placeholder image convention" requirement was designed for.

## What Changes

- Replace 18 `.image-placeholder` blocks with real `<img>` tags, keeping each block's framing class (`image-hero`, `image-tall`, `image-space-1..7`, `image-birthday`, `image-detail`, gallery `g1..g6`) unchanged so aspect ratio and position are preserved:
  - hero → `assets/img/hero.JPG`
  - editorial photo (#espaco) → `assets/img/foto-espaco-01.jpeg`
  - structure cards 01–07 → `salao_principal.jpg`, `area_externa.JPG`, `pergolado.JPG`, `piscina.JPG`, `churrasqueira.jpeg`, `cozinha.jpeg`, `estacionamento.jpeg`
  - birthday photo (#eventos) → `assets/img/aniversario.jpeg`
  - gallery g1–g6 → `assets/img/foto-01.JPG` through `foto-06.jpeg` (exact per-file extension case)
  - details photo → `assets/img/foto-madeira.JPG`
  - quote section photo → `assets/img/foto-cinematografica.jpeg`
- Left as placeholders (no matching photo yet, per explicit decision): the "experience" panoramic photo, the final-CTA photo, and the 4 Instagram-grid tiles.
- No spec changes: the existing "Placeholder image convention" requirement (`openspec/specs/landing-page/spec.md`) already defines this exact replacement behavior — this change is a straightforward application of it, so `.openspec.yaml` sets `skip_specs: true`.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
(none — see explanation above; `skip_specs: true` is set)

## Impact

- `index.html`: 18 `.image-placeholder` blocks become `<img src="assets/img/...">`, framing classes unchanged.
- No CSS or JS changes — `.image-placeholder` styling simply no longer applies to these 18 elements once the class-bearing wrapper is replaced by (or emptied in favor of) an `<img>`.
- No files moved; images already sit at `assets/img/`.
