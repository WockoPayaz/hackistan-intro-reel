# Hackistan — Foley review version

[Watch / download MP4 with SFX](hackistan-reel-sfx.mp4?raw=true) · [Original silent MP4](../reel/hackistan-reel.mp4?raw=true)

60 seconds, 1080 × 1920, 30 FPS, H.264 video + AAC stereo audio. No voiceover or music.

[Exact cue sheet (CSV)](cue-sheet.csv) · [Cue sheet (JSON)](cue-sheet.json) · [Asset/license catalog](../../docs/SFX_CATALOG.md) · [Audio audit](../../docs/SFX_AUDIT.md)

32 selected placements leave most small movements silent. Source trimming, fades and individual gains are editable in `video/src/sfx-cues.json`; `masterGain` controls the separate SFX layer. Lower it when narration arrives. The `HackistanReelSfx` Remotion composition uses supported Remotion Audio and Sequence components. The original `HackistanReel` composition remains silent.

Rebuild with `python scripts/render-sfx.py` from the repository root. It applies the cue trims, short fades, gains and exact frame-based delays, mixes a 24-bit WAV stem, and muxes AAC with the original approved H.264 video packets. No visual re-encoding or redesign occurs. You can also render `HackistanReelSfx` through Remotion Studio.

Material limitation: numbered recorded stationery textures stand in for adhesive/sticker contact and the final stamp-like tap. Their exact objects are not individually named by the source author; see the catalog. This version is ready for listening review, not a claim that every source is a literal recording of the depicted material.
