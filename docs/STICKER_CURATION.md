# Sticker curation — Revision 3

## Acquisition status

**14 selected options: 10 existing user-supplied originals, 4 pending acquisition, 0 newly downloaded files.** The review sheet is explicitly labeled with this status. No catalog screenshots, thumbnails, redrawn stickers or fabricated substitutes were used.

The requested official catalog is https://stickers.hackclub.com/catalog. Fresh sandbox and executor requests returned cloud-proxy HTTP 403 (`CONNECT tunnel failed`) after the custom domain was saved in the environment draft and the user authorized access. The running environment status still reported an enforced policy with no custom host entries. Authorization is recorded; runtime propagation remains the blocker. No access restriction was bypassed.

The publicly accessible [Hack Club StickersV1 README](https://github.com/hackclub/StickersV1/blob/main/README.md) identifies itself as a former official site implementation and documents the public `/api/stickers` endpoint. It points to `hackclub/stickers`, which returned repository-not-found during this inspection. No sticker image URL or artwork license could be verified through that source. No authentication credentials were requested or used.

**Usage/permission note:** the user supplied the current artwork for this storyboard. That does not establish an artwork license for public distribution. Explicit reuse terms for the sticker illustrations have not been verified. Confirm applicable permission with Hack Club/artists before final publication; do not treat an application's source-code license as an artwork license. This flag applies to every candidate below.

New official downloads belong in `public/assets/stickers/catalog/`. That folder currently contains only an explanatory README. Existing files remain in their original curated folders and have not been relabeled as downloads.

## Candidates

| Candidate | Current file / source | Recommended placement | Status |
|---|---|---|---|
| Orpheus and Heidi Laptops | [Orpheus and Heidi Laptops.webp](../public/assets/stickers/Orpheus%20and%20Heidi%20Laptops.webp) · [original user upload](https://github.com/WockoPayaz/hackistan-intro-reel/blob/07f7dec/public/assets/Orpheus%20and%20Heidi%20Laptops.webp) | 04 · coding / web | user-supplied; catalog verification pending |
| Godot Juice | [Godot Juice.webp](../public/assets/stickers/Godot%20Juice.webp) · [original user upload](https://github.com/WockoPayaz/hackistan-intro-reel/blob/07f7dec/public/assets/Godot%20Juice.webp) | 03 / 04 · games | user-supplied; catalog verification pending |
| Boba Drops | [Boba Drops.webp](../public/assets/stickers/Boba%20Drops.webp) · [original user upload](https://github.com/WockoPayaz/hackistan-intro-reel/blob/07f7dec/public/assets/Boba%20Drops.webp) | 03 · website | user-supplied; catalog verification pending |
| Soldering | [Soldering.webp](../public/assets/stickers/Soldering.webp) · [original user upload](https://github.com/WockoPayaz/hackistan-intro-reel/blob/07f7dec/public/assets/Soldering.webp) | 04 · electronics | user-supplied; catalog verification pending |
| Orpheus Skateboarding PCB | [Official catalog](https://stickers.hackclub.com/catalog); exact asset URL unverified | 04 · PCB alternative | awaiting catalog access or manual download |
| Construct Orpheus | [Official catalog](https://stickers.hackclub.com/catalog); exact asset URL unverified | 04 · physical making | awaiting catalog access or manual download |
| Journpheus | [Journpheus.webp](../public/assets/stickers/Journpheus.webp) · [original user upload](https://github.com/WockoPayaz/hackistan-intro-reel/blob/07f7dec/public/assets/Journpheus.webp) | 05 · project notebook | user-supplied; catalog verification pending |
| Ship | [ship.webp](../public/assets/stickers/ship.webp) · [original user upload](https://github.com/WockoPayaz/hackistan-intro-reel/blob/07f7dec/public/assets/ship.webp) | 05 · share checklist | user-supplied; catalog verification pending |
| Orphmoji Yippee | [orphmoji yippee.webp](../public/assets/stickers/orphmoji%20yippee.webp) · [original user upload](https://github.com/WockoPayaz/hackistan-intro-reel/blob/07f7dec/public/assets/orphmoji%20yippee.webp) | 06 · familiar character | user-supplied; catalog verification pending |
| Orpheus Flag | [flag-orpheus-left.png](../public/assets/stickers/flag-orpheus-left.png) · [original user upload](https://github.com/WockoPayaz/hackistan-intro-reel/blob/07f7dec/public/assets/flag-orpheus-left.png) | 02 · flag alternative | user-supplied; catalog verification pending |
| Game Lab | [Official catalog](https://stickers.hackclub.com/catalog); exact asset URL unverified | 04 · game alternative | awaiting catalog access or manual download |
| Coding with Balloon | [Official catalog](https://stickers.hackclub.com/catalog); exact asset URL unverified | 04 · coding alternative | awaiting catalog access or manual download |
| Nest Hatched Smolpheus | [Nest Hatched Smolpheus.webp](../public/assets/stickers/Nest%20Hatched%20Smolpheus.webp) · [original user upload](https://github.com/WockoPayaz/hackistan-intro-reel/blob/07f7dec/public/assets/Nest%20Hatched%20Smolpheus.webp) | 06 · optional beginner motif | user-supplied; catalog verification pending |
| Pathfinder Orpheus | [Pathfinder Orpheus.png](../public/assets/stickers/Pathfinder%20Orpheus.png) · [original user upload](https://github.com/WockoPayaz/hackistan-intro-reel/blob/07f7dec/public/assets/Pathfinder%20Orpheus.png) | 05 · optional exploration motif | user-supplied; catalog verification pending |

## Selection discipline

Only relevant supplied artwork is placed: Boba with its website, Godot at the game/photo border, the laptops on the coding note, soldering at the PCB note, Journpheus holding the workshop checklist edge, Ship next to save/share tasks, and Yippee touching the final project callback. The official Hack Club flag appears once, in scene 2. Alternatives on this sheet are not automatically added to the pages.

The selected images preserve original colors, proportions and transparency. Shadows and rotation are composition styles; no source images were modified. Jame Gam's low-resolution screenshot is a separate project-media limitation.

## Once catalog access applies

1. Load the catalog or its documented public API once; inspect the selected entries and their usage terms.
2. Resolve full original download URLs for the short list only. Request any necessary CDN domains through settings; never bypass restrictions.
3. Save usable original PNG/WebP/SVG files under `public/assets/stickers/catalog/`, retaining attribution and per-file source URLs, dimensions and hashes.
4. Mark unavailable originals for manual download; do not use catalog screenshots or thumbnail upscales.
5. Regenerate the candidate sheet and compare replacement artwork before changing scene placements.

[Candidate sheet](../output/stickers/candidate-sheet.png) · [Machine-readable provenance](../output/stickers/candidates.json)
