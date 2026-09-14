---
format: 1920x1080
duration: 63s
message: "Every unit goes where it earns the most: best sellers to the shelf, the rest into value-backed pallets, nothing guessed."
arc: BAB with feature-benefit progression — hook → promise → fate 1 (shelf) → fate 2 (pallet) → fate 3 (held) → dispatch → benefits → brand
audience: store operators and liquidation / returns-inventory managers
mode: collaborative
music: confident minimal tech underscore, steady mid-tempo pulse, dry industrial percussion, no vocals
narration: Fish Audio voice 536d3a5e000945adb7038665781a4aca, one take per frame (SCRIPT.md); on-screen copy unchanged
---

# Pallet Price Scout — Three Units, Three Fates

No narration. Each frame's `onscreen:` cues are the pacing spine (reveal one cue at a time, never all at t=0).
All numbers come from the app's fictional sample batch (`demo.js`); a small persistent `SAMPLE DATA` chrome tag
stays on every frame that shows figures.

## Video direction

- **Palette (from `frame.md`, app's own tokens):** ground `ink-black #0D0F0E` on a full-bleed clip layer; panels `ink-black-alt #151816` / `panel-2 #1B1E1B`; 1px hairlines `border-dark #30342F`; text `cream #E9E8DF`; secondary text `cream-muted #A0A49A`; the ONE accent is acid lime `fire-orange #D6FF55` — numbers that matter, check marks, the focal word of a statement, active borders. `warn #FF8058` appears ONLY on the held fate (frame 08, and the "FATE 03" tag + `??` mark in frame 01). Dark register on every frame; no lime-ground register.
- **Type:** new statements in Space Grotesk 700, lowercase, negative-tracked (display ramp from `frame.md`); chrome/kickers/figures in DM Mono uppercase 0.14em with `tabular-nums`; quoted app copy (e.g. "The right items. The right place.") keeps the app's sentence case. Fonts ship in `assets/fonts/` (`space-grotesk.woff2`, `dm-mono.woff2`) — `@font-face` inside each frame.
- **Captured screens:** the real 2x app captures (`assets/view-*.png`, 3840px wide = 1920 CSS px × 2) shown flat inside a clipped window with a 1px `#30342F` hairline border and square corners — no device mockup, no browser chrome, no cursor, no drop shadow. Coordinates in the Scene lines are **CSS px of the 1920-wide page** (multiply by 2 for image pixels). Place the image at `width: 1920px` (i.e. 1 CSS px = 1 canvas px at scale 1); punch-ins scale the image wrapper up to at most 2.0 (the 2x native limit — never blur past it).
- **Persistent chrome:** a `SAMPLE DATA` tag (DM Mono, cream-muted, 1px hairline box) top-right at the frame's safe inset on frames 02–09; enters with the frame, never animates.
- **Motion grammar:** smooth long-tail settles (`power3` / `expo.out` on fast arrivals), no bounce/overshoot. No narration, so cues pace to the music bed (~110 BPM → one beat ≈ 0.55s): each `onscreen` cue reveals on its own beat, spread across the shot and especially its back half. Entrances only (`fromTo`); the injected `transition_in` is every non-final frame's exit. Holds are still — subtle jitter at most, no breathing, no back-half drift or slow push.
- **Rhythm / held frames:** energy peaks at 04 (count-up), 07 (meter crosses target), 08 (HELD stamp). Deliberate breathers: 06 (rule cards assemble then hold), 10 (benefit list holds), 11 (brand lockup holds). Fates 03/05/08 each open on a real-screen punch-in so the three read as one repeated grammar.
- **Keep-out:** every element above y = 900 on the 1080 canvas (bottom band clear).
- **Negative list:** laptop/phone mockups, browser chrome, cursors, gradients, drop shadows, rounded surfaces, glows/bokeh, stock imagery, a second accent hue, invented numbers (every figure traces to the app capture or `demo.js`), bouncy entrances, `repeat`/`yoyo`, `Math.random`/`Date.now`, CSS transitions/keyframes — and both failure modes: slideshow (front-load then freeze) and screensaver (many elements floating independently).
- **Registry components installed for workers:** `count-up` (stat counter, used in 04 and 07) and `headline-slam` (the HELD stamp in 08) — adapt their mechanics, restyle to `frame.md`.

## Frame 1 — Same truck

- scene: One mixed batch, three product chips — NI, LO, ?? — then the line "Same truck. Three different futures."
- onscreen: "Batch 024 · 215 units" | "Same truck." | "Three different futures."
- voiceover: "Every returns truck looks the same. What’s inside isn’t."
- duration: 4.5s
- transition_in: cut
- status: animated
- src: compositions/frames/01-same-truck.html
- type: hook
- persuasion: Curiosity gap — three identical-looking units, three undisclosed outcomes
- beat: intrigue
- blueprint: kinetic-type-beats (Adapt)
- asset_candidates:
- focal: the two-line statement "same truck. / three different futures."
- roles: product chips = supporting · kicker = chrome
- sfx: key-press at 0.1s, click-soft ×3 at 1.0s / 1.45s / 1.9s, impact-bass-1 at 3.2s

Adapt: keep the statement built across beats onto a payoff line; add the three chips as the "truck" the statement is about.
Scene 1 (0.0–0.9s): bare dark field; mono kicker "BATCH 024 · 215 UNITS · MIXED MERCHANDISE" types on top-left (`discrete-text-sequence`), a 1px hairline draws under it left→right. Left-anchored, upper third.
Scene 2 (0.9–2.2s): the three chips land left→right one per beat (staggered, smooth rise + fade) in the row under the kicker — identical panel tiles, 1px hairline, mono mark (NI / LO in cream, `??` in cream-muted) over the product name; under each a tiny mono tag "FATE 01 / FATE 02 / FATE 03" (FATE 03 in warn). Same treatment for all three — they look alike on the truck.
Scene 3 (2.2–3.2s): "same truck." slams in below the chips (`kinetic-beat-slam`, fast arrival, smooth settle), cream, h1 scale, left-anchored.
Scene 4 (3.2–4.5s): "three different futures." lands on the next beat directly beneath in lime; hold still to the cut. Asymmetric composition, chips row + statement fill the top ~80%.

narrativeRole: Open on tension, not a product description — every unit in a returns batch looks the same on the truck; the video promises to show why they shouldn't be treated the same.
keyMessage: Not every unit deserves the same route.

## Frame 2 — Where it goes

- scene: Tight on the app's "Where it goes." panel (40 / 166 / 9 bar), one decelerating zoom-out to the full Overview; the promise lands.
- onscreen: "Best sellers → the shelf." | "The rest → value-backed pallets." | "Nothing guessed." | "Pallet Price Scout · inventory routing"
- voiceover: "Pallet Price Scout sends every unit to where it earns the most."
- duration: 6s
- transition_in: zoom-through
- status: animated
- src: compositions/frames/02-where-it-goes.html
- type: product_intro
- persuasion: Promise-first — the value claim before any evidence
- beat: clarity
- blueprint: zoom-out-workspace-reveal (Adapt)
- asset_candidates: assets/view-overview.png — full Overview: 215 / $12,260 / 40 / 166 stat cards, best-sellers table, "Where it goes." 40/166/9 panel, four pallet tier cards
- focal: assets/view-overview.png
- roles: view-overview = cutout (inside the right window) · route lines = supporting
- sfx: whoosh-cinematic at 2.8s

Adapt: keep the signature — open TIGHT on one small UI region, then ONE continuous decelerating zoom-out reveals the containing whole and the frame LOCKS; the zoom lives inside the right-hand window (the sketch's 994×600 block at x820 y150), the promise text builds in the left column.
Scene 1 (0.0–1.4s): right window opens tight on the "Where it goes." allocation panel (overview box x1478 y445 290×492 — "96% ready to route", the 40 / 166 / 9 bar and legend) at ~1.9×, centered in the window; left column: "best sellers → the shelf." reveals (`dynamic-content-sequencing`, per chunk), cream with "the shelf." in lime.
Scene 2 (1.4–2.8s): "the rest → value-backed pallets." reveals beneath on the next beats, "value-backed pallets." in lime.
Scene 3 (2.8–4.1s): ONE continuous heavily-decelerating zoom-out inside the window (`coordinate-target-zoom` run in reverse / `multi-phase-camera` pull phase) from the panel to the whole upper Overview (page x0–1920, y0–1160, fit to window width) — header, 215 / $12,260 / 40 / 166 stats, best-sellers table, the panel now small on the right; the window LOCKS still. As it locks, "nothing guessed." lands in lime under the two route lines.
Scene 4 (4.1–6.0s): mono kicker "PALLET PRICE SCOUT · INVENTORY ROUTING" types on at top-left (the product named at the payoff); hold still. Asymmetric 40/60 split, 3 depth layers (ground, window, text).

narrativeRole: Land the message by beat 2 (value before evidence) and name the product; the three routes the rest of the video proves.
keyMessage: One batch in, three clear routes out.

## Frame 3 — Fate 1: the fast seller

- scene: Punch-in on the Ninja air fryer row of the Single-item pulls table; three rule checks tick on beside it.
- onscreen: "Ninja air fryer" | "48 sold in 30 days" | "3.2 days to sell" | "Exact SKU match ✓" | "Fast seller."
- voiceover: "This air fryer sold forty-eight last month, and moves in three days. That’s a fast seller."
- duration: 6.6s
- transition_in: crossfade
- status: animated
- src: compositions/frames/03-fast-seller.html
- type: feature_showcase
- persuasion: Show-don't-tell proof — the real row, the real thresholds (≥20 sold / 30 days, ≤7 days to sell, exact match)
- beat: confidence
- blueprint: agent-progress-theater (Adapt)
- asset_candidates: assets/view-singles.png — Single-item pulls table: Ninja 48 sold · FAST · 3.2d · 2 on hand · 14 batch · rec 10 · pull 10 · plus the formula line under the table heading; assets/view-dialog-ninja.png — Ninja product dialog, exact match 99%
- focal: assets/view-singles.png
- roles: view-singles = cutout (top strip window, punched in on the Ninja row) · view-dialog-ninja = supporting (unused unless the strip needs a second beat — do not show both)
- sfx: whoosh-short at 0.2s, click-soft at 1.4s / 2.3s / 3.2s, ping at 4.0s

Adapt: keep the receipt that cascades in and CHECKS OFF row by row; the "trigger" is the punch-in onto the real row, the checklist is the fast-seller rule.
Scene 1 (0.0–1.2s): top full-width strip window (sketch block x106 y160 1708×300) punches in on view-singles.png (`coordinate-target-zoom`, fast arrival then locked): frame the table header + Ninja row — page region x433–1767, y600–712 (header labels PRODUCT / 30D SOLD / AVG. DAYS TO SELL / STORE ON-HAND / BATCH QTY / REC. / PULL QTY visible above the row), scaled to the window width (~1.28×). Lock.
Scene 2 (1.2–2.2s): check 1 ticks on in the checklist below (`svg-path-draw` for the ✓ in lime, then the line "exact SKU match" + mono "99%"); simultaneously a 2px lime underline marker sweeps under the product cell in the strip (page x465–900 of the row; `css-marker-patterns` highlight).
Scene 3 (2.2–3.4s): check 2 "48 sold in 30 days" + mono "≥ 20" ticks, marker moves to the 30D SOLD cell (page x925–1060); check 3 "3.2 days to sell" + mono "≤ 7" ticks, marker moves to the AVG. DAYS cell (page x1080–1220). One check per beat.
Scene 4 (3.4–6.0s): "fast seller." enters bottom-right in lime at display scale (smooth long-tail settle, no overshoot) and holds; the FAST badge region in the strip gets one keyword glow pulse (one finite attack-decay lime flash). Hold still.

narrativeRole: First fate. Explain the fast-seller rule through one product, so the rule is a story, not a spec.
keyMessage: Proven sellers are recognised automatically — by real sales, not a hunch.

## Frame 4 — Stock the shelf

- scene: The pull formula resolves live in big mono type, counts up to 10; then pull back to "40 units → Main Street store".
- onscreen: "ceil(48 ÷ 30 × 7) − 2 on hand" | "= 10 units" | "40 units → Main Street store" | "Stock the shelf. Not the backroom."
- voiceover: "So Scout pulls one week of demand, minus what’s on the shelf. Ten units, straight to the store."
- duration: 6.7s
- transition_in: push-slide LEFT
- status: animated
- src: compositions/frames/04-stock-the-shelf.html
- type: benefit_highlight
- persuasion: Feature-to-benefit translation — the math becomes "a week of demand on the shelf, no more"
- beat: control
- blueprint: dataviz-countup (Adapt)
- asset_candidates: assets/view-singles.png — the "40 units → Main Street store / Create store transfer" bar and the 6 / 40 / $3,940 / DRAFT stat row; assets/view-dialog-transfer.png — "Create a store transfer?" dialog, 40 units
- focal: the count-up "= 10 units"
- roles: view-singles = supporting (right window, action bar) · view-dialog-transfer = supporting (unused — keep to one screen)
- sfx: typing at 0.3s, pop at 2.1s, whoosh-short at 3.0s

Adapt (Key_Feature montage-cut): keep the count-up as hero and exactly ONE fast zoom punch landing the product close-up; frame locked otherwise.
Scene 1 (0.0–1.4s): mono kicker "7 DAYS OF DEMAND − WHAT'S ON THE SHELF" top-left; the formula "ceil(48 ÷ 30 × 7) − 2 on hand" builds token by token (`dynamic-content-sequencing`) in large DM Mono, cream, the figures 48 / 7 / 2 landing in lime as they appear. Left-anchored, upper third.
Scene 2 (1.4–2.8s): "= 10" counts 0 → 10 in lime at stat scale (`counting-dynamic-scale`; mechanics from the installed `count-up` component), mono "UNITS" label settles beside it.
Scene 3 (2.8–4.2s): right window (sketch block x1080 y380 734×220) — ONE fast zoom punch (`coordinate-target-zoom`) lands on view-singles.png's action bar "40 units → Main Street store · Create store transfer →" (page box x432 y1477 1336×84, fit to window width, ~0.55× then settled). Lock.
Scene 4 (4.2–6.0s): "stock the shelf. not the backroom." reveals per phrase beneath (`dynamic-content-sequencing`), "not the backroom." in lime; hold still.

narrativeRole: Show the exact arithmetic (7 days of demand minus what's already on the shelf) and cash it in as the store benefit, using the app's own line.
keyMessage: Pull exactly a week of demand — the shelf stays stocked without overstocking.

## Frame 5 — Fate 2: the slow seller

- scene: The Lodge skillet row: 9 sold, 16 days to sell, recommended pull 0 — it slides out of the shelf lane toward the pallet lane.
- onscreen: "Lodge cast iron skillet" | "9 sold · 16 days to sell" | "Pull: 0" | "Slow on the shelf." | "Strong in a pallet."
- voiceover: "The skillet? Nine sales, sixteen days to sell. It skips the shelf."
- duration: 6s
- transition_in: zoom-through
- status: animated
- src: compositions/frames/05-slow-seller.html
- type: feature_showcase
- persuasion: Negative contrast — same exact match as the fast seller, opposite outcome
- beat: curiosity
- blueprint: kinetic-type-beats (Adapt)
- asset_candidates: assets/view-singles.png — Lodge cast iron skillet row: 9 sold · 16d · 6 on hand · 22 batch · rec 0; assets/view-dialog-lodge.png — Lodge product dialog
- focal: the statement "slow on the shelf. strong in a pallet."
- roles: view-singles = cutout (top strip window, Lodge row) · view-dialog-lodge = supporting (unused — keep to one screen)
- sfx: whoosh-short at 0.2s, whoosh at 2.5s, click at 3.5s

Adapt: keep the statement built beat by beat onto a payoff line; the lanes carry the "route" before the words land. Mirrors frame 03's grammar (strip punch-in first) so the fates read as a series.
Scene 1 (0.0–1.2s): top strip window (sketch block x106 y160 1708×260) punches in on view-singles.png — header + Lodge row, page region x433–1767, y1080–1186 (the Lodge row box is x433 y1118 1334×68), ~1.28×; lock. A 2px cream-muted underline marker sweeps the 9 / 16d / REC. 0 cells.
Scene 2 (1.2–2.4s): SHELF lane panel (sketch x106 y480 834×150) reveals left: mono "SHELF", then "pull: 0" in cream-muted.
Scene 3 (2.4–3.8s): a small mono token "LO × 22" rises from the SHELF lane and slides right into the PALLET lane (sketch x980 y480 834×150) — cut-the-curve style lateral move with a smooth long-tail stop; as it arrives the PALLET lane's hairline turns lime and "22 units available" reveals.
Scene 4 (3.8–6.0s): "slow on the shelf." lands, then on the next beat "strong in a pallet." in lime (`kinetic-beat-slam`, restrained); hold still.

narrativeRole: Second fate. A slow seller isn't a loss — it's pallet value; sets up the pallet rule.
keyMessage: Slow sellers don't clog the shelf — they get a better route.

## Frame 6 — Four price points, one rule

- scene: Four pallet tier cards assemble ($400 / $600 / $900 / $1,400), each stamping its minimum retail; the rule line pins above.
- onscreen: "The pallet rule" | "Retail value ≥ sale price × 1.30" | "$400 → $520" | "$600 → $780" | "$900 → $1,170" | "$1,400 → $1,820"
- voiceover: "Every pallet carries at least thirty percent more retail than its price."
- duration: 5s
- transition_in: crossfade
- status: animated
- src: compositions/frames/06-pallet-rule.html
- type: feature_showcase
- persuasion: Rule of four + risk reversal — every pallet carries at least 30% more retail than its price
- beat: trust
- blueprint: grid-card-assemble (Reproduce)
- asset_candidates: assets/view-pallets-empty.png — Pallet builder tier cards $400/$600/$900/$1,400 with $520/$780/$1,170/$1,820 minimum retail
- focal: the four tier cards (rebuilt live in HTML from the capture's values — not the screenshot)
- roles: view-pallets-empty = supporting (reference for the cards' look; not placed)
- sfx: click-soft at 1.1s / 1.6s / 2.1s / 2.6s

Reproduce: N cards self-assemble in a staggered cascade into a row and hold. A breather frame.
Scene 1 (0.0–1.0s): kicker "THE PALLET RULE", then "retail value ≥ sale price × 1.30" reveals per chunk at h2 scale, "× 1.30" in lime landing last.
Scene 2 (1.0–3.0s): four tier cards cascade in left→right, one per beat (`dynamic-content-sequencing`, smooth rise) — panel fill, top hairline only, mono "SALE PRICE", big numeral $400 / $600 / $900 / $1,400; right after each card lands, its lime mono line "$520 / $780 / $1,170 / $1,820 min retail" writes in.
Scene 3 (3.0–5.0s): mono note "30% above the sale price — not a discount, not a margin." types on beneath in cream-muted; hold still.

narrativeRole: State the core pallet business rule clearly — and what it is not (30% above sale, not a discount or a margin).
keyMessage: Every pallet is priced below the retail value inside it — by rule.

## Frame 7 — Build the value

- scene: Pallet builder: 10 Lodge skillets + Instant Pot + Levoit + Oster stack into the composition; the accumulated-retail meter counts $0 → $540 and crosses the $520 line; "Retail target reached ✓".
- onscreen: "10× Lodge skillet" | "+ Instant Pot · Levoit · Oster" | "$540 of $520 minimum" | "Retail target reached ✓" | "$400 pallet · 35% above sale"
- voiceover: "Ten skillets and three slow movers: a four-hundred-dollar pallet, holding five-forty in retail."
- duration: 7s
- transition_in: push-slide LEFT
- status: animated
- src: compositions/frames/07-build-the-value.html
- type: benefit_highlight
- persuasion: Show-don't-tell proof — the meter physically crosses the target
- beat: satisfaction + confidence
- blueprint: camera-journey (Adapt)
- asset_candidates: assets/view-pallets-slow-sellers.png — Pallet builder with 10× Lodge, 1× Instant Pot, 1× Levoit, 1× Oster, composition panel $540, "of $520 minimum 104%", lime meter, "✓ Retail target reached", 35.0% above sale, 13 units in 4 SKUs; assets/view-pallets-autofill.png — Auto-fill to target state
- focal: the rebuilt composition panel ($540 counter + meter) on the right
- roles: view-pallets-slow-sellers = cutout (left window, inventory rows) · view-pallets-autofill = supporting (unused — keep to one screen)
- sfx: click-soft at 1.6s / 2.1s / 2.6s / 3.1s, chime at 3.7s

Adapt (A — action roundtrip): keep the camera connecting cause (a row in the table) to consequence (the panel that updates); cursorless — the left window's view travels row to row as each line item lands on the right.
Scene 1 (0.0–1.6s): left window (sketch block x106 y160 980×680) shows view-pallets-slow-sellers.png's inventory table at ~1.1×, framed on the rows Instant Pot → Oster (page region x433–1447, y955–1215; Lodge row box x433 y987 1014×59); a lime underline marks the Lodge row's IN PALLET stepper "10". Right: the composition panel (sketch x1160 y160 654×680, rebuilt in HTML) with mono "ACCUMULATED RETAIL", "$0", an empty 10px meter and a cream 2px target tick at 96.3% labeled "$520" in mono.
Scene 2 (1.6–3.6s): line items enter the panel list one per beat — "10× Lodge cast iron skillet $300", "1× Instant Pot Duo $100", "1× Levoit air purifier $90", "1× Oster blender $50" — each landing drives the counter ($300 → $400 → $490 → $540, `counting-dynamic-scale` via the installed `count-up` mechanics) and the lime meter fill (55.6% → 74.1% → 90.7% → 100%, `stat-bars-and-fills`); in lockstep the left window's view steps to the matching row (`viewport-change`, short smooth pans: Lodge → Instant Pot → Levoit → Oster).
Scene 3 (3.6–5.0s): the fill crosses the $520 tick — "✓ retail target reached" writes in lime; "of $520 minimum · 104%" settles under the counter.
Scene 4 (5.0–7.0s): footer rows reveal: "$400 pallet · 35% above sale" and mono "13 UNITS / 4 SKUS" in cream-muted; hold still.

narrativeRole: Payoff of fate 2 — slow sellers become a pallet that provably clears its value target; mention auto-fill exists (closest total at or above target).
keyMessage: Slow sellers, combined, become a pallet buyers can trust.

## Frame 8 — Fate 3: held, not guessed

- scene: The "??" unidentified appliance dialog: label obscured, 62% confidence, price unknown — a warn-orange "HELD" stamp; it leaves both lanes.
- onscreen: "Model label obscured" | "62% confidence · price unknown" | "Held for review." | "Not guessed. Not priced at zero."
- voiceover: "And the mystery appliance? No label. No price. It’s held for review, never guessed."
- duration: 6.4s
- transition_in: zoom-through
- status: animated
- src: compositions/frames/08-held-not-guessed.html
- type: benefit_highlight
- persuasion: Risk reversal — the system refuses to route what it can't verify
- beat: peace of mind
- blueprint: titlecard-reveal (Adapt)
- asset_candidates: assets/view-dialog-unknown.png — "Unidentified countertop appliance" dialog: ?? mark, qty 3, retail Unknown, 62% confidence, condition Review, "Review required before routing."; assets/view-analysis-held.png — Analysis filtered to the 9 held units
- focal: assets/view-dialog-unknown.png
- roles: view-dialog-unknown = cutout (left window, the dialog) · view-analysis-held = supporting (unused — keep to one screen)
- sfx: whoosh-short at 0.2s, impact-bass-2 at 3.0s

Adapt: keep ONE restrained hero move then a still hold — the move is the HELD stamp (mechanics from the installed `headline-slam`: scale-down landing + deterministic three-frame shake, then still).
Scene 1 (0.0–1.5s): left window (sketch block x106 y160 900×640) — the dialog from view-dialog-unknown.png (viewport-shot coords: dialog box x670 y250 580×582) rises into the window at ~1.05× (smooth long-tail), cropped to the dialog alone with the dimmed page edge just visible.
Scene 2 (1.5–3.0s): on the right, mono facts reveal one per beat: "MODEL LABEL OBSCURED", then "62% CONFIDENCE · PRICE UNKNOWN"; as each lands, a warn-orange hairline box draws around the matching dialog cell (the "Unknown" retail cell and the "62%" cell; `css-marker-patterns` outline).
Scene 3 (3.0–4.0s): "HELD" stamp slams in warn orange above the facts (sketch x1100 y170) — 4px warn border, DM Mono — lands with the three-frame shake, then still.
Scene 4 (4.0–6.0s): "held for review." then "not guessed. not priced at zero." (warn) reveal per line; hold still.

narrativeRole: Third fate — the trust beat. Uncertain identity, price, or condition never enters a shelf pull or a pallet.
keyMessage: Uncertainty stays visible — never hidden inside a pallet.

## Frame 9 — Ready for the next stop

- scene: Packing & dispatch: TRF-001 (40 units, sent) and PLT-001 ($400 · $540 retail · packed) land as two manifest cards, CSV export chip.
- onscreen: "TRF-001 · 40 units → store" | "PLT-001 · $400 pallet · $540 retail" | "Manifests + CSV, ready"
- voiceover: "The store transfer and packed pallet are ready, with manifests to match."
- duration: 5s
- transition_in: crossfade
- status: animated
- src: compositions/frames/09-dispatch.html
- type: feature_showcase
- persuasion: Completion proof — the plan ends as records, not a spreadsheet to rebuild
- beat: ease
- blueprint: device-surface-showcase (Adapt)
- asset_candidates: assets/view-dispatch.png — Packing & dispatch: 1 transfer / 1 pallet / $400 / $540 stat row, TRF-001 Sent · simulated card, PLT-001 packed card; assets/view-dialog-pack.png — "Mark this pallet packed?" dialog
- focal: the two rebuilt manifest cards
- roles: view-dispatch = supporting (faint provenance strip, sketch x980 y680 834×160 at ~50% opacity, cropped to the Store transfers + Packed pallets sections) · view-dialog-pack = supporting (unused)
- sfx: pop at 1.1s, pop at 2.5s, click at 3.9s

Adapt (cursorless stepwise flow): keep the real surface advancing step by step — here the dispatch records complete one after the other, rebuilt as cards from the capture's exact values.
Scene 1 (0.0–1.0s): kicker "05 · PACKING & DISPATCH", then "ready for the next stop." per-word reveal at h2 scale.
Scene 2 (1.0–2.4s): TRF-001 card assembles (left, sketch x106 y360 834×280): mono "TRF-001 · STORE TRANSFER", "40 units → Main Street", "$3,940 retail reference"; the "SENT · SIMULATED" lime pill stamps in top-right of the card.
Scene 3 (2.4–3.8s): PLT-001 card assembles (right, sketch x980 y360): "$400 pallet", lime "$540 retail · 13 units · 4 SKUs" (the $540 counts up quickly), "✓ PACKED" pill stamps.
Scene 4 (3.8–5.0s): "↓ manifests + CSV" chip (sketch x106 y700) enters with a tactile press (`press-release-spring`, smooth, no bounce); the faint dispatch screenshot strip is already resting beside it as provenance; hold still.

narrativeRole: Close the loop operationally — both routes end in a clear, exportable record.
keyMessage: From analysis to dispatch in one workspace.

## Frame 10 — What you get

- scene: Three benefit lines accumulate on a bare field, each with a lime `/` marker; the last one holds.
- onscreen: "/ Best sellers stay on the shelf." | "/ Every pallet clears 1.30× retail." | "/ Nothing gets guessed."
- voiceover: "Shelves stay stocked. Pallets prove their value. Nothing gets guessed."
- duration: 5.5s
- transition_in: blur-crossfade
- status: animated
- src: compositions/frames/10-what-you-get.html
- type: benefit_highlight
- persuasion: Value stacking (rule of three)
- beat: confidence
- blueprint: grid-card-assemble (Reproduce)
- asset_candidates:
- focal: the three-line benefit list
- roles: kicker = chrome
- sfx: click-soft at 0.3s / 1.7s / 3.1s

Reproduce (vertical benefit list): short value phrases populate a vertical list one per ~1.4s, co-resident and accumulating. Breather frame.
Scene 1 (0.0–1.4s): kicker "WHAT YOU GET"; line 1 — the lime `/` marker draws first, then "best sellers stay on the shelf." reveals per word (`dynamic-content-sequencing`).
Scene 2 (1.4–2.8s): line 2 "every pallet clears 1.30× retail." the same way, directly beneath.
Scene 3 (2.8–4.2s): line 3 "nothing gets guessed." the same way.
Scene 4 (4.2–5.0s): hold still — all three read together.

narrativeRole: Restate the message as three outcomes the viewer can repeat — the three fates, translated into benefits.
keyMessage: Shelf stocked. Pallets proven. Uncertainty held.

## Frame 11 — The right place

- scene: The ✳ mark draws on, "PALLET PRICE SCOUT" wordmark completes, the app's tagline lands with "place." in lime; sample-data footer.
- onscreen: "✳ PALLET PRICE SCOUT" | "The right items." | "The right place." | "Inventory routing · demo workspace · sample data"
- voiceover: "Pallet Price Scout. The right items, in the right place."
- duration: 4.5s
- transition_in: crossfade
- status: animated
- src: compositions/frames/11-the-right-place.html
- type: branding
- persuasion: Brand recall — the app's own tagline as the last word
- beat: inevitability
- blueprint: logo-assemble-lockup (Adapt)
- asset_candidates:
- focal: the ✳ PALLET PRICE SCOUT lockup
- roles: tagline = supporting · footer = chrome
- sfx: riser at 0.0s, chime at 2.1s

Adapt (Brand_Outro): keep the mark drawing itself on, the wordmark completing the lockup, the lockup holding, then the final fade. This is the final frame — its exit fade is allowed.
Scene 1 (0.0–1.0s): centered — the app's ✳ mark rebuilt as an inline SVG (eight lime spokes from a center point) draws on spoke by spoke (`svg-path-draw`).
Scene 2 (1.0–1.8s): "PALLET PRICE SCOUT" DM Mono wordmark builds letter by letter beneath the mark (`discrete-text-sequence`), cream, tracked 0.14em.
Scene 3 (1.8–3.0s): tagline in the app's sentence case — "The right items." then "The right place." with "place." in lime — reveals line by line; mono footer "INVENTORY ROUTING · DEMO WORKSPACE · SAMPLE DATA" in cream-muted settles last.
Scene 4 (3.0–4.5s): hold still; final 0.4s the whole lockup fades to the ground color.

narrativeRole: Wordmark end sting rebuilt from the app header; the tagline "The right items. The right place." closes the three-fates story.
keyMessage: Pallet Price Scout — the right items, the right place.
