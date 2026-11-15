# Hackistan — scrapbook reel

**Phase C: Foley review version.** [Watch/download the Reel with SFX](output/sfx/hackistan-reel-sfx.mp4?raw=true) · [Preserved silent version](output/reel/hackistan-reel.mp4?raw=true) · [Source/license catalog](docs/SFX_CATALOG.md). No voiceover or music has been added.

## Review in Chrome

**Rendered and inspected:** the revised six PNGs and contact sheet are available below. This pass integrates all four newly supplied stickers into scenes 4 and 5 while preserving the other four layouts.

Open [the contact sheet](output/storyboards/contact-sheet.png), then tap a full-size page:

1. [Opening / 0–7 seconds](output/storyboards/01-hook.png)
2. [Meet Hackistan / 7–15 seconds](output/storyboards/02-meet.png)
3. [Real projects / 15–28 seconds](output/storyboards/03-projects.png)
4. [What you can create / 28–40 seconds](output/storyboards/04-create.png)
5. [Opportunities / 40–52 seconds](output/storyboards/05-opportunities.png)
6. [Join / 52–60 seconds](output/storyboards/06-join.png)

Each PNG is 1080 × 1920. The contact sheet is 1200 × 1510. All previews are silent. The supplied logos, stickers and all three project screenshots are now included.

**Current checkpoint:** review the full animation. Voiceover, licensed music and Foley are reserved for subsequent approved passes.

## Project

The video project lives in `video/`, separate from any future website. Assets live in the repository-level `public/assets/`. Node 24 and npm 11 were used. Dependencies are pinned in `video/package-lock.json`.

Cloud-agent commands, run from `video/`:

```sh
npm ci
npm run studio
npm run typecheck
npm run storyboards
```

The render script uses the user-approved installed `/usr/bin/chromium`; `REMOTION_BROWSER_EXECUTABLE` can select another installed path. It bundles once and produces six full-resolution PNGs plus a contact sheet.

The cloud agent manages these commands; you do not need a local terminal. Studio provides six individually selectable stills and a one-second static `StoryboardPreview` composition. Select `HackistanReel` for the full 60-second timeline or `Scene3Prototype` for the retained 13-second prototype. Generated PNGs and the contact sheet are committed so Chrome review does not depend on a running Studio server.

## Replace assets

See [the asset checklist](docs/ASSETS.md). Place authentic files in the indicated folders, then set their relative paths in `video/src/config.ts` (e.g. `assets/projects/boba-drops.png`). Image slots preserve proportions with `object-fit: contain`. No scene logic changes are required. Re-render the storyboard after replacement.

The fonts are self-hosted through npm: Barlow Condensed (display), Kalam (annotations), DM Sans (labels). Package license files remain installed with each font dependency. Paper grain and sketches are original deterministic SVG/CSS. There are no invented screenshots, unofficial logos, synthetic voices or downloaded music.

## Full Reel and audio preparation

The 1800-frame silent Reel includes the original narration as timed subtitles. Source, render commands, optional audio paths and named Foley markers are documented in [FULL_REEL.md](docs/FULL_REEL.md). No audio clips have been added.

[Art direction and motion plan](docs/STORYBOARD.md) · [Validation](docs/VALIDATION.md)

[Sticker curation and access status](docs/STICKER_CURATION.md) · [Sticker candidate sheet](output/stickers/candidate-sheet.png) · [Decoration audit](docs/DECORATION_AUDIT.md)
