# Asset Descriptions

⚠️  No vision credentials — descriptions below are catalog-derived (alt text, headings, section context, filename) instead of Vision-generated. To get richer Vision descriptions on the next capture, set GEMINI_API_KEY (or GOOGLE_API_KEY), or HYPERFRAMES_VERTEX_PROJECT_ID plus HYPERFRAMES_VERTEX_SERVICE_ACCOUNT for Vertex service-account auth, and re-run.

The `logo-<hash>.svg` filename prefix is a structural hint (DOM said this SVG was inside a `<header>`, home-link `<a>`, or had an aria-label matching the page brand). To pick the actual brand logo without Vision, open the `logo-*` candidates in a previewer or rasterize them with `sharp` before referencing — composing a fake logo ships off-brand in the final video.

- svgs/svg-219240e7.svg — svg 219240e7
- svgs/svg-4e2337d6.svg — svg 4e2337d6
- svgs/svg-b7606ebc.svg — svg b7606ebc
- svgs/svg-c6ee0411.svg — svg c6ee0411
- svgs/svg-d702b5fb.svg — svg d702b5fb

## App view screenshots (scripted headless capture, 1920-wide viewport at 2x → 3840px wide; element boxes in `extracted/view-boxes.json`, CSS-px coordinates)

- view-overview.png — Overview (full page): "Good inventory. Better decisions." · batch strip · 4 stat cards 215 / $12,260 / 40 / 166 · "Send the best sellers first." table (Ninja 48 sold, 3.2 days, 10 units pull) · "Where it goes." 96% ready-to-route panel with 40 / 166 / 9 bar · "Four price points. One value rule." $400/$600/$900/$1,400 pallet tier cards
- view-analysis.png — Analysis results (full page): all 16 product lines with quantity, identity confidence, unit retail, store SKU match, route
- view-analysis-held.png — Analysis results filtered to held items only (unidentified appliance, Dyson variant unconfirmed, damaged toaster)
- view-dialog-ninja.png — Product dialog, Ninja air fryer: exact match 99%, fast-seller assumptions (viewport)
- view-dialog-lodge.png — Product dialog, Lodge cast iron skillet: exact match, slow seller → pallet (viewport)
- view-dialog-unknown.png — Product dialog, "??" unidentified countertop appliance: model label obscured, 62% confidence, price unknown, held for review (viewport)
- view-singles.png — Single-item pulls (full page): fast sellers with 30-day sales, days to sell, store stock, editable pull quantities, 40 units to Main Street
- view-pallets-empty.png — Pallet builder (full page), $400 tier selected, empty draft, $520 minimum retail target
- view-pallets-autofill.png — Pallet builder after Auto-fill to target ($400 tier) with toast "Draft filled to …"
- view-pallets-slow-sellers.png — Pallet builder, hand-built $400 pallet of slow sellers: 10 Lodge skillets + Instant Pot + Levoit purifier + Oster blender = $540 retail ≥ $520 target
- view-dialog-pack.png — "Mark this pallet packed?" confirm dialog: $400 pallet, $540 / $520 minimum (viewport)
- view-dialog-transfer.png — "Create a store transfer?" dialog: 40 units to Main Street store (viewport)
- view-dispatch.png — Packing & dispatch (full page) after TRF-001 store transfer sent and PLT-001 packed: store + pallet manifests, CSV export
- view-overview-after.png — Overview after transfer + one packed pallet
