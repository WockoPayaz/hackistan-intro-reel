# Scene 3 motion refinement — revision 2

Scope: Scene 3 only, 390 frames / 13 seconds at 30 FPS, 1080 × 1920. The approved Revision 3 layout, colors, typography, photographs and stickers remain the foundation. No additional artwork or audio downloaded. The first motion prototype remains in Git history at `c77597a`.

## Changes

- Paper now has a carried approach with eased acceleration/deceleration, a small angular landing correction, and a contact shadow that tightens as it settles. The long slide is no longer driven by the same spring as the final landing.
- Tape is applied only after each photo lands. It unfurls from an anchored end and presses down, with its shadow collapsing onto the photo border.
- Stickers have a short placement reveal, angled approach, tightening contact shadow and a 1.1% press/release. No generic opacity fade is used.
- The camera visits Boba, BakeBuild and Jame Gam, then returns to the full collage. Quintic interpolation gives zero velocity and acceleration at each focus hold. Paper layers receive at most about 1.3 px of relative camera drift for restrained parallax.
- Handwritten notes use a continuous, narrow, alternating pen mask through the existing Kalam glyphs. This approximates writing rather than replacing the font with invented letterforms. Pencil arrows reveal along their actual path. The bold headline uses a separate vertical reveal.

## Rhythm

| Time | Beat |
|---|---|
| 0–0.8s | Notebook settles; headline reveals |
| 0.7–1.65s | Boba photo approaches and lands |
| 1.65–3.15s | Tape and Boba sticker placed; website spotlight |
| 3.1–4.3s | Blue backing and BakeBuild enter and land |
| 4.3–5.9s | Tape, washi, CAD handwriting and arrow; CAD spotlight |
| 6.2–7.15s | Jame Gam arrives and lands |
| 7.15–8.8s | Tape and Godot sticker placed; game spotlight |
| 8.8–10.5s | Camera returns; final handwritten line completes |
| 10.5–13s | Complete collage held still |

## Screenshot limits

Boba camera scale peaks at 1.22 and BakeBuild at 1.16; both source images have enough pixels for their displayed sizes. Jame Gam's supplied image is only 347 × 195 and already appears enlarged in the approved storyboard. Its spotlight uses a framing shift at 1.0 scale, adding no further magnification. The original limitation remains visible; no screenshot is sharpened, fabricated or AI-upscaled.

## Source and reproduction

`video/src/motion.tsx` contains reusable placement, adhesive, handwriting, path drawing and camera components. `projectTiming` in `ProjectsPrototype.tsx` owns the scene's object timing; camera stops and values are explicit in `motion.tsx`. All motion is frame-based and deterministic. No animation is added to the other five scenes.

From `video/`: `npm run typecheck`, then `npm run prototype`. Select `Scene3Prototype` in Remotion Studio. The optional browser validation helper uses the cloud environment's installed Playwright and a server serving `output/prototype/` at port 3010.

## Review evidence

The render manifest, ffprobe metadata, browser playback report, decoded timeline sheet and detail sheets are saved alongside the MP4. Browser display drops, if any, are recorded separately from the 390 encoded frames. Final results are recorded in `docs/VALIDATION.md` after inspection.

[Watch/download the updated MP4](../output/prototype/scene-3-prototype.mp4?raw=true). Approval is required before animating the remaining scenes.

Final checks passed: TypeScript, cloud render, exact metadata assertions and complete-file decoding. Timeline and contact-detail inspection completed after fixing the BakeBuild header framing and arrowhead draw order. Browser playback completed without media errors, reporting three dropped display frames; see `playback-check.json`.
