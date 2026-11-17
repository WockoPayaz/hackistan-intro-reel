# Hackistan — CapCut Desktop editing handoff

The current edit is **1080 × 1920, 30 FPS, 99.800 seconds (2,994 frames)**. Timing, narration, Foley and existing animation are unchanged. No music has been added.

## Start here

1. Extract the entire ZIP. Create a **9:16, 30 FPS** CapCut project.
2. Import `01_full_reel/02_Hackistan_No_Captions_VO_SFX.mp4` at **00:00:00:00**. It already contains the synchronized voiceover/SFX mix. Notebook headings, handwritten notes and project labels remain part of the artwork; only subtitle captions are absent.
3. To adjust voice and Foley separately, **mute the MP4's audio**, then add both WAVs from `02_audio_stems/` at **00:00:00:00**. Leave their track gains at **0 dB / 100%** initially: the existing mix levels are already applied. Do not play the mixed MP4 audio and the stems together. Both stems are 48 kHz, 24-bit stereo and exactly 99.800 seconds, including silence/padding.
4. Import `05_captions_and_timing/captions.srt` through CapCut's caption/subtitle import control (its label varies by version). Keep the import offset at zero. The original rendered caption look is visible in `01_full_reel/01_Hackistan_With_Captions_VO_SFX.mp4`.
5. Add PNGs from `03_visual_assets/` as overlay tracks. Their alpha backgrounds import directly; no chroma key is needed. For editable text, install the included TTF fonts: **Barlow Condensed ExtraBold**, **Kalam Regular**, **DM Sans Medium**. The caption style uses DM Sans Medium, warm ivory paper, charcoal text and a rust left border. The reference caption panel starts at x=110, y=1555, width=820, with a minimum height of 108 pixels.
6. Export at **1080 × 1920 / 30 FPS, H.264 with AAC audio**. Keep speed at 1× and turn off automatic retiming, optical flow and added transitions unless you deliberately choose to change them later.

This is an importable media package, **not a native CapCut project with editable Remotion animation layers**. The existing animation is baked into the MP4s. Independent transparent artwork and the original Remotion source are included for further work. The package itself makes no visual or timing changes.

## Files and alternatives

- `01_full_reel/`: the latest captioned master (byte-for-byte copy), plus a caption-free master with the same encoded audio. The caption-free video is copied directly from the existing animation render, without another video encode.
- `02_audio_stems/`: cleaned voiceover with its existing +1 dB mix gain, and the retimed Foley stem at its existing narration-underlay level. The original voice remains in the source snapshot. Only the previously approved 0.75 seconds of silence trims are present.
- `03_visual_assets/`: 112 labeled assets, including native branding/stickers/project images, 57 individual scene layers, reusable paper/tape/doodles, six notebook backgrounds and empty Polaroid frames. There are 102 transparent-overlay entries. `asset-manifest.json` records source provenance, dimensions and placement offsets. Native images retain their original resolution. Vector/CSS scene layers are rendered at 2× and tightly cropped with alpha; use **50% scale relative to their exported pixels** to restore their untransformed notebook size. PNGs are the easiest format for CapCut; original SVG branding and frame SVGs are also included.
- `04_scene_clips/`: six **silent, caption-free** clips. Place them end to end in numbered order, then add the two full-length audio stems and full SRT at timeline zero. Every original frame and page transition is retained; no transition handles are added. Clips use high-quality H.264 re-encoding for exact cuts rather than approximate keyframe cuts.
- `05_captions_and_timing/`: full SRT, timestamped transcript, global scene boundaries, original audio edit list, Foley cue sheet and six optional **scene-local SRTs**. Import scene-local SRTs only at the corresponding scene's start; do not import them together with the full SRT.
- `06_fonts_and_licenses/`: desktop TTF fonts and original licenses, plus Foley provenance.
- `07_remotion_source/`: editable source snapshot, configuration, original assets and render scripts. No node_modules are included. The source project and all earlier renders also remain on `feature/hackistan-intro-reel` in GitHub.

Project screenshots and notebook-page backgrounds are intentionally opaque. The supplied, unused “Orpheus and Heidi Laptops” source illustration is also opaque and explicitly marked in the manifest. Its background has not been fabricated or removed. All artwork intended as a transparent overlay retains alpha. The game screenshot is only **347 × 195** at source resolution; avoid extra close-up enlargement.

## Scene boundaries — 30 FPS, end times exclusive

| Scene | Start timecode | End timecode | Duration | Frames |
|---|---|---|---:|---:|
| 1 · Hook | 00:00:00:00 | 00:00:07:21 | 7.700 s | 231 |
| 2 · Meet Hackistan | 00:00:07:21 | 00:00:26:23 | 19.067 s | 572 |
| 3 · Our Projects | 00:00:26:23 | 00:00:45:00 | 18.233 s | 547 |
| 4 · What We Do | 00:00:45:00 | 00:00:59:03 | 14.100 s | 423 |
| 5 · Opportunities | 00:00:59:03 | 00:01:26:00 | 26.900 s | 807 |
| 6 · Join Hackistan | 00:01:26:00 | 00:01:39:24 | 13.800 s | 414 |

Scenes 2–6 already include a half-second incoming notebook-page transition. Do not add a second dissolve or slide at these joins when recreating the current edit.

## Optional locations for your additional polish

These are suggestions only; none have been applied in the handoff.

- **0–7.7 s:** keep the opening simple. A restrained pencil accent alongside the existing mountain reveal would fit the notebook style.
- **12.5–23.8 s:** the existing Hack Club/map note is a useful place for a subtle line trace or small camera emphasis. Keep the logo and supporting captions clear.
- **27.2–32.3 s (Boba), 32.7–37.8 s (BakeBuild), 39.9–44.6 s (game):** use the exported project cards and tape sparingly. Existing landings and tape attachment are already animated. Avoid doubling the placement effect or zooming further into the low-resolution game image.
- **47.7–55.4 s:** small pencil circles or underlines can emphasize coding, websites, game development, CAD, printing and PCB notes as they are spoken. The Foley marker/cue files identify the actual existing events.
- **59.2–68.1 s:** workshop/checklist accents can support the explanation. **68.5–85.7 s:** keep the program-eligibility wording readable; do not turn reward examples into guarantees. The spoken statistics/supporter/reward claims are retained from the recording and remain independently unverified, as noted in the existing review.
- **90.7–98.4 s:** a restrained emphasis on the existing JOIN HACKISTAN strip is the clearest final polish point. Preserve the final hold through 99.8 seconds and keep the CTA unobstructed.

Keep captions away from the right-side controls and lower Instagram interface. Preserve quiet audio moments. No background music is included.
