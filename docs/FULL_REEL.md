# Full Hackistan Reel — Phase B2

The 60-second composition `HackistanReel` preserves the six approved scrapbook layouts and original artwork. Scene 3 retains the approved camera and assembly motion. Other scenes have separate cue schedules, with paper approaches starting beyond the page edges: a notebook sketch opening, a layered club introduction, a scattered idea board, a workshop/program plan, and the final invitation. Five half-second paper slides connect pages in the same notebook.

The original narration is unchanged in `video/src/config.ts`. Phrase captions cover all 1800 frames and are timed for silent reading. After the supplied voiceover arrives, retime captions to that recording; current cues are not a forced alignment to nonexistent narration.

To keep captions clear of imagery, the approved notebook composition sits at 88% scale with a dedicated paper subtitle strip below it. No screenshot contents were fabricated or altered. Jame Gam remains the supplied low-resolution image, with no additional spotlight enlargement. The latest approved supplied sticker placements are retained.

## Edit, preview, render

From `video/`, the cloud agent runs:

- `npm run studio`: select `HackistanReel`.
- `npm run typecheck`
- `npm run reel`: produces the full MP4, six review stills, caption JSON and Foley marker JSON.
- `node scripts/review-reel.mjs`: checks encoded dimensions/duration/frame count, caption coverage, marker uniqueness and full decoding; extracts timeline and boundary review sheets.

`FullReel.tsx` owns page transitions, subtitle presentation and scene composition. `reel-timing.ts` owns each scene's named layer cues. Static storyboard files and the standalone Scene 3 prototype remain available.

## Later audio passes

No voiceover, music or sound effects are included in this render. `reel-audio.tsx` has null voiceover/music paths and an empty Foley map. Files are referenced relative to `public/`, for example `assets/audio/voiceover.wav`.

1. Add the supplied narration to `audioConfig.voiceover`. Review pace and retime caption cues to the actual recording before exporting again.
2. After licensing/approval, set `audioConfig.music` and its volume. No track is bundled or selected.
3. Add licensed/recorded physical Foley by exact marker ID in `audioConfig.foley`, with `file`, `volume`, and `durationFrames`. An optional `fromFrame` overrides the marker time without touching animation cues. Clips can be changed, trimmed by duration or retimed independently of the graphics.

The exported `output/reel/foley-markers.json` records global 30 FPS frame positions, names, interaction categories and suggested durations. Page turns/slides, paper movements, photo landings, tape peel/stick, stickers, drawing and CTA reveal have separate names. Marker durations are guides, not claims that sounds exist. Do not fill every marker automatically; keep the future mix subtle and prioritize actual contacts.

Example future configuration (not active):

```ts
foley: {
  'scene-3.boba.land': {file: 'assets/audio/photo-land.wav', volume: 0.25, durationFrames: 12},
}
```

The film is intentionally silent until those passes are authorized. No merge into main.

## Verification

The final silent MP4 contains exactly 1800 H.264 frames at 30 FPS, 1080 × 1920, duration 60 seconds, and no audio stream. Complete decoding passed. The 24 caption cues cover the full timeline without gaps and preserve the exact script text; the 102 named Foley markers are unique and within the timeline. Scene stills, timeline samples and samples before/during/after all five page boundaries were inspected. The first automatic caption grouping was replaced with complete phrases synchronized to the visual beats, then the full Reel was re-rendered.

`verification.json` and `playback-check.json` contain the encoder and browser results. The optional browser check uses the cloud-installed Playwright and a local server on port 3011. No Actions fallback was necessary because cloud rendering succeeded.

Final Chromium playback reached the end with no media errors and zero dropped display frames out of 1800. Paper-entry detail sheets were inspected after the final off-page approach correction. Voiceover/music/Foley remain disabled and will be tested with the actual supplied/licensed clips during their respective passes.
