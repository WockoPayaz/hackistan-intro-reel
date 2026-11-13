# Scene 3 prototype

Scope: 390 frames / 13 seconds at 30 FPS; 1080 × 1920. The Revision 3 Scene 3 composition is unchanged in Revision 4, so the prototype uses those same coordinates, imagery, typography and materials. No new stickers or audio were downloaded.

| Time | Action |
|---|---|
| 0–1.2s | Notebook settles by 38 px; headline reveals in two passes |
| 1.15–2.7s | Boba photo slides in from outside the left edge, settles, then tape rolls on |
| 2.9s | Boba sticker placed against the photo border |
| 3.5–5.6s | Blue backing and BakeBuild arrive from right; masking tape then washi applied |
| 5.45–6.9s | CAD note reveals line by line; dashed pencil route draws |
| 6.7–8.3s | Jame Gam slides from outside the lower-left edge, settles, then tape applied |
| 8.4–9.85s | Godot sticker placed, final handwritten line reveals |
| 10–13s | Fully assembled page held still for recognition |

`Place`, `TapeApply`, `Reveal`, `DrawRoute`, and `NotebookCamera` are reusable deterministic components. All animation derives from the current frame and composition FPS. No CSS animation, random values or wall-clock timing. Photo springs use mass 1.15, damping 19 and stiffness 125, limiting overshoot and avoiding repeated bounce. Camera scale moves only from 1.025 to 1.0. Original media use contain sizing, preserve proportions and remain unedited. Text reveals are masked handwritten type, not a claim of individual pen-stroke simulation.

The photos and their tape share the same placement parent, so tape stays attached after contact. Static storyboard components retain their default tape. The silent prototype introduces no music or synthetic narration. Jame Gam retains its original low-resolution source.

## Validation

Results are recorded after inspecting the rendered MP4 in `output/prototype/verification.json` and the review frame sheet. Approval of this prototype is required before extending the animation to the full reel.

- `npm run typecheck`: passed. Final `npm run prototype`: completed with installed Chromium.
- ffprobe confirms H.264, 1080 × 1920, 30 FPS, 390 frames, exactly 13 seconds, no audio stream. Decoder reports full-range 4:2:0 (`yuvj420p`).
- FFmpeg decoded the complete final MP4 without errors.
- Inspected decoded frames every 0.5 seconds, an 8 FPS entrance detail sheet, and the completed-page frame. Fixed abrupt initial photo appearances by starting them beyond the page edges, then re-rendered and inspected. No important text or settled project media is clipped or obscured. The final three seconds hold the full collage.
- Original asset files and approved storyboard PNGs remain unchanged.
- Remotion Studio loaded the prototype composition at localhost:3000/Scene3Prototype.
- Chromium playback reports are saved alongside the MP4; the first run overlapped FFmpeg validation and reported six dropped display frames. The encoded file contains all 390 frames.
- Cloud rendering succeeded, so a fallback Actions workflow was unnecessary.
- A second isolated Chromium playback reached the end without media errors: 390 total frames, four dropped display frames in the cloud browser. This is playback performance, not missing encoded frames; no claim of zero-drop browser playback is made.
- Optional browser validation helper `video/scripts/check-prototype.cjs` uses the cloud environment's installed Playwright and expects the preview folder served at port 3010. Playwright is not required to render or edit the project.
