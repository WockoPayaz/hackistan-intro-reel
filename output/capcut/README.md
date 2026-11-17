# CapCut editing handoff

[Download the complete editing package ZIP](https://github.com/WockoPayaz/hackistan-intro-reel/releases/download/capcut-handoff-v1/Hackistan-CapCut-Editing-Package.zip) · [Release page](https://github.com/WockoPayaz/hackistan-intro-reel/releases/tag/capcut-handoff-v1) · [Import guide](../../docs/CAPCUT_HANDOFF.md) · [Artwork preview](ASSET_PREVIEW.png)

The package contains both full-resolution masters (captioned and caption-free with voiceover/SFX), two 99.8-second aligned WAV stems, six exact-frame silent scene clips, 112 visual assets, full and scene-local SRT captions, timestamped transcript, scene/cue sheets, desktop fonts/licenses and an editable Remotion source snapshot.

The original captioned master is byte-identical. The subtitle-free master copies the existing animation video packets and current mix audio packets without re-encoding. Six scene clips total 2,994 frames; frame-by-frame reconstruction versus the original animation scores SSIM 0.997779 after high-quality exact-cut encoding. All 102 declared overlay exports have transparent pixels. The summed WAV stems reproduce the previous lossless mix within 0.00000012 sample amplitude (24-bit quantization).

[Machine-readable checks](validation.json) · [Asset manifest](asset-manifest.json)

The ZIP and generated folder are distributed as release assets instead of duplicating large media files in Git history. Original sources and renders remain intact on `feature/hackistan-intro-reel`. Nothing is merged to main. This is a media handoff, not a native CapCut project.
