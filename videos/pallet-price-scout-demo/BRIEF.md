---
workflow: product-launch-video
flow: automation
storyboard: yes
message: "Every unit goes where it earns the most: best sellers to the shelf, the rest into value-backed pallets, nothing guessed."
destination: youtube
aspect: 1920x1080
language: en
audience: store operators and liquidation / returns-inventory managers
length: 63s
angle: three-fates
narration: yes
---

## Intent

A ~60s hybrid showcase of Pallet Price Scout's inventory routing demo (the local app at
http://127.0.0.1:41007): real captured app screens as the proof, benefit-led on-screen copy on top.
It must showcase and explain the business logic and the benefits.

Chosen concept — **#4 Three Units, Three Fates**: "Same truck. Three different futures." Instead of a
feature tour, follow three products from one mixed batch:

- **Ninja air fryer** — exact SKU match, 99% identity confidence, 48 sold in 30 days, 3.2 days to sell,
  2 on hand at Main Street → fast seller → `ceil(48/30×7) − 2 = 10` units pulled as singles to the store.
- **Lodge cast iron skillet** — exact match but slow (9 sold, 16 days to sell) → not a fast seller →
  rides a pallet. Pallet rule: minimum accumulated retail = sale price × 1.30 ($400 → $520,
  $600 → $780, $900 → $1,170, $1,400 → $1,820). Auto-fill picks the closest total at or above target.
- **"??" unidentified countertop appliance** — model label obscured, 62% confidence, price unknown →
  held for review; never guessed, never priced as zero, never packed.

Each fate lands on a punch-in of the real app screen that proves it. Batch totals from the app:
215 units / 16 product lines / $12,260 retail reference; default plan 40 units ($3,940) to the store,
166 units ($8,320) to pallets, 9 units held.

Benefits to land as outcomes: best sellers stay stocked on the shelf; the rest sells as pallets whose
retail value is guaranteed ≥ 1.30× the sale price; uncertain items are held instead of guessed;
manifests and CSVs ready for dispatch.

## Assets

- (none supplied) — capture the running app, all five hash views: #overview, #analysis, #singles, #pallets, #dispatch.

## Customizations

- Design: the app's own look — charcoal #0d0f0e canvas, #151816 panels, #30342f hairlines, acid-lime #d6ff55 accent, #ff8058 warnings, Space Grotesk + DM Mono. Workflow picks a preset for layout bones; app colors/fonts remixed onto it.
- Punch-ins (camera zoom) on the relevant table row / panel for each fate — dense tables must not be shown full-frame at 16:9.
- Count-ups on the key numbers (10 units pulled, $520 target, 215 / 40 / 166 / 9).
- End sting: rebuild the app's "✳ PALLET PRICE SCOUT" wordmark with its tagline "The right items. The right place."
- Audio: Fish Audio voiceover (voice 536d3a5e000945adb7038665781a4aca, model s2.1-pro-free), one take per frame — copy in SCRIPT.md; light SFX under it. Music dropped (user decision).

## Notes

- All app data is fictional sample data; keep a small "sample data" tag on screen. Do not imply real POS, real stores, or guaranteed resale proceeds — 1.30× is retail reference value, not profit.
- The pallet rule is 30% ABOVE sale price, not a 30% discount or a margin.
- Avoid generic SaaS demo tropes (laptop mockups, "Introducing…" feature bullet lists).
