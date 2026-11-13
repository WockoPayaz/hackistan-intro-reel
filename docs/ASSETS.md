# Asset checklist

The user-uploaded assets on main and the feature branch were inspected. All 19 originals are retained byte-for-byte, organized into `public/assets/branding/`, `projects/`, and `stickers/`. No artwork was fabricated or recolored. Transparent sticker shapes and logo aspect ratios are preserved.

| Asset | Status | Destination / manifest key |
|---|---|---|
| Authentic Hackistan H logo | Supplied SVG, used | branding/hackistan-h.svg / hackistan |
| Official Hack Club flag | Supplied PNG, used | branding/flag-standalone.png / hackclub |
| Boba Drops member website | Supplied screenshot, used | projects/boba-drops-website-screenshot.png / boba |
| BakeBuild CAD cookie cutter | Supplied screenshot, used | projects/bakebuild-cookie-cutter-cad-screenshot.png / bake |
| Jame Gam | Supplied screenshot, used; 347 × 195 source | projects/jame-gam-game-screenshot.png / jame |
| Orphmoji Yippee | Supplied, used | stickers/orphmoji yippee.webp / orpheus |
| Boba Drops sticker | Supplied, used | stickers/Boba Drops.webp / bobaSticker |
| Godot Juice | Supplied, used | stickers/Godot Juice.webp / godot |
| Soldering | Supplied, used | stickers/Soldering.webp / solder |
| Ship | Supplied, used | stickers/ship.webp / ship |
| Member workshop photograph | Not supplied; optional, omitted | projects/ / members |
| Instagram post references | Not supplied | branding/ |
| Approved voiceover | Not supplied; optional, default silent | audio/ |
| Licensed music | Not supplied; optional, default silent | audio/ |
| Final bio destination | Confirm before publication | CTA reads LINK IN BIO |

Additional supplied assets remain available: Journpheus, Nest Hatched Smolpheus, Orpheus and Heidi Laptops, Pathfinder Orpheus, Single Neuron Activated, cursor, two Orpheus flag variants, and the Hack Club app-style logo. Use them selectively after visual approval.

No required logo or project placeholder remains in the rendered pages. The reusable AssetSlot component still shows a labeled placeholder when its manifest entry is null. Existing media references in `video/src/config.ts` are relative to `public/`; replacing an image requires no scene logic change.

Jame Gam is low resolution and is displayed with its original framing. A larger original would improve final-video clarity. Small text within project screenshots is documentary detail, not essential reel copy. No AI enlargement or fake detail was added.

Mountain silhouettes, notebook sketches, stationery and grain are original deterministic decorations. The Quetta-to-community dotted line is conceptual, not a geographic map.
