# Scout / Inventory Routing Demo

A standalone, interactive **demo only** in the visual language of `/Users/kcdacre8tor/pallet-price-scout`: charcoal panels, acid-lime highlights, thin borders, Space Grotesk, and DM Mono.

The live combined web workspace is `pallet-price-scout` (`/` scan, `/routing/` this demo). Prefer that project.

## Run

Requires Node.js 22 or later. No runtime packages or API credentials are needed.

```sh
npm start
# http://127.0.0.1:41007
```

For development and automated tests:

```sh
npm install
npm test
npm run check
npm run dev
```

Use `PORT=41008 npm start` to choose another port. The server binds to loopback only and serves an explicit list of public assets. Fonts are bundled locally with their OFL licenses. Once installed, the demo needs no external connections.

## Demo walkthrough

1. **Overview** — 215 fictional units across 16 product lines; $12,260 in ready retail reference value. The default plan reserves 40 units ($3,940 retail) for the sample Main Street store, leaves 166 units ($8,320 retail) for pallets, and holds 9 units for review.
2. **Analysis results** — inspect quantity, model identity confidence, example unit retail, exact store SKU matches, and routing. Search/filter results; click a product for its assumptions. Unknown value is never presented as zero.
3. **Single-item pulls** — compare 30-day unit sales, average days to sell, and current store stock. Edit pull quantities; export a CSV; confirm a simulated transfer. Dispatch locks the pull list until reset.
4. **Pallet builder** — select a sale tier, manually choose unit quantities or auto-fill to target, review accumulated retail, and confirm simulated packing. Packed and reserved quantities cannot be allocated twice.
5. **Packing & dispatch** — inspect store/pallet manifests and export CSVs. No actual store, POS, carrier, or inventory system is contacted.

State is saved in this browser’s localStorage under `scout-routing-demo-v1`, not on a server. **Reset demo** restores the original sample batch after confirmation. Invalid stored state is discarded with a notice. If storage is unavailable, changes last only for the session.

## Business rules

### Singles

An automatic fast-seller recommendation requires:

- An exact fictional SKU match, known price, and ready condition.
- At least 20 units sold in 30 days.
- Average time to sell of no more than 7 days.

The recommended quantity is:

```text
min(batch quantity, max(0, ceil(30-day units sold / 30 × 7) - store on-hand))
```

Exact-match ready products may be manually pulled even when slower-selling. Unconfirmed identities, unknown prices, and condition issues cannot be pulled or packed. Products without store history can go to pallets, but are not presumed to be fast sellers. Confidence refers to fictional product identity, not price verification.

### Pallets

**Minimum accumulated retail = sale price × 1.30.** This is 30% above sale, not a 30% discount from retail, a profit margin, or guaranteed resale proceeds.

| Pallet sale | Minimum accumulated retail |
| --- | --- |
| $400 | $520 |
| $600 | $780 |
| $900 | $1,170 |
| $1,400 | $1,820 |

Values are calculated in integer cents. Auto-fill performs bounded subset-sum selection from unallocated inventory, choosing the closest achievable total at or above target. It replaces the current draft. It does **not** optimize physical dimensions, weights, condition mix, category balance, or profitability. Packing is disabled below target; shortages are reported without silently relaxing the target. The demo is a single-batch, single-browser workflow, not a concurrent warehouse system.

## Files

- `index.html`, `styles.css` — responsive shell and reference-matched design tokens.
- `app.js` — five views, interactions, dialogs, CSV exports, and local persistence.
- `demo.js` — fictional fixtures, recommendations, reservation/packing rules, and target selection.
- `server.js` — dependency-free local static server.
- `tests/demo.test.js` — domain invariants and edge cases.
- `tests/ui.test.js` — happy-dom integration tests. Happy DOM is a development-only dependency, not a real browser.
- `assets/` — self-hosted fonts and licenses.

## Verification

`npm test`: 10 tests passed at initial delivery. `npm run check`: passed. Local HTTP endpoint: 200.

DOM-level integration covers search, held filters, product dialogs, quantity validation, simulated transfer locking, all four pallet tiers, packing manifests, CSV generation, and reset. Domain tests cover stock conservation, double-allocation prevention, shortage, and state validation.

**Live-browser visual verification is blocked:** Dodis Browser lists tabs, but navigate/snapshot calls return `No active browser tab`, including after switching tabs. Desktop/mobile CSS is implemented but not visually verified. No competing interactive browser automation was used. A manual visual/responsive check remains necessary.

## Deliberate boundaries

No real analysis or POS import, retail price research, real product photos, shipping, accounts, inventory mutation outside this demo, or external transfers. All inventory quantities, sales, prices, confidence scores, and statuses are fictional. Production use would require verified identities/prices/conditions, a real sales-history definition and source, physical pallet constraints, transactional inventory, and operational permissions.
