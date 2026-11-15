# Hackistan — Foley review version

[Watch / download MP4 with SFX](hackistan-reel-sfx.mp4?raw=true) · [Original silent MP4](../reel/hackistan-reel.mp4?raw=true)

60 seconds, 1080 × 1920, 30 FPS, H.264 video + AAC stereo audio. No voiceover or music.

[Exact cue sheet (CSV)](cue-sheet.csv) · [Cue sheet (JSON)](cue-sheet.json) · [Asset/license catalog](../../docs/SFX_CATALOG.md) · [Audio audit](../../docs/SFX_AUDIT.md)

32 selected placements leave most small movements silent. Source trimming, fades and individual gains are editable in `video/src/sfx-cues.json`; `masterGain` controls the separate SFX layer. Lower it when narration arrives. The `HackistanReelSfx` Remotion composition uses supported Remotion Audio and Sequence components. The original `HackistanReel` composition remains silent.

Rebuild with `python scripts/render-sfx.py` from the repository root. It applies the cue trims, short fades, gains and exact frame-based delays, mixes a 24-bit WAV stem, and muxes AAC with the original approved H.264 video packets. No visual re-encoding or redesign occurs. You can also render `HackistanReelSfx` through Remotion Studio.

Material limitation: numbered recorded stationery textures stand in for adhesive/sticker contact and the final stamp-like tap. Their exact objects are not individually named by the source author; see the catalog. This version is ready for listening review, not a claim that every source is a literal recording of the depicted material.

## Voiceover preparation and revised balance

The five page transitions now use individual speed/pitch variations (0.970–1.035×), trim offsets, frame timing and levels. Quieter paper, pencil and sticker cues gained approximately 2 dB; tape cues gained 3 dB. The 32 placements and quiet gaps are retained. No source audio or approved animation was changed, and no normalization was applied.

The revised AAC export has a measured sample peak of −13.1 dBFS. This is a headroom check, not a final loudness target. TypeScript checks and full MP4 decoding passed; encoded video packet hashes match the silent original. The archived `playback-check-before-variation.json` describes the earlier browser playback, not a fresh listening review of this revision.

Upload instructions: [voiceover folder](../../public/assets/audio/voiceover/README.md). Preferred repository path: `public/assets/audio/voiceover/hackistan-voiceover.wav` on `feature/hackistan-intro-reel`. A chat attachment is also suitable and avoids committing the raw recording publicly.

`video/src/voiceover-config.json` separates narration file, start frame, source trim, voice level and SFX gain beneath narration. Its file is currently null. Once activated, SFX default to 65% of their current gain as an adjustable starting balance; this is not automatic speech ducking. Captions and scene timing await the actual recording. Music remains off. Final loudness will be assessed with the complete mix.

`scripts/render-sfx.py` is specifically the SFX-only export tool. Use the `HackistanReelSfx` Remotion composition for the future combined narration/SFX export after timing is conformed. Preserve `output/reel/hackistan-reel.mp4` as the original silent master.
