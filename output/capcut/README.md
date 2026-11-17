# CapCut editing package

Download **all four ZIPs** for the complete handoff. Each is a normal, independent ZIP: extract them and keep the folders separate if convenient. No command line or archive joining is needed. Each bundle includes `00_START_HERE.md`.

| Download | Size |
|---|---:|
| [Captioned master](https://github.com/WockoPayaz/hackistan-intro-reel/raw/refs/heads/feature/hackistan-intro-reel/output/capcut/bundles/01_Captioned_Master.zip) | 60.3 MB |
| [Caption-free master with VO + SFX](https://github.com/WockoPayaz/hackistan-intro-reel/raw/refs/heads/feature/hackistan-intro-reel/output/capcut/bundles/02_Caption_Free_Master.zip) | 70.5 MB |
| [Six silent scene clips](https://github.com/WockoPayaz/hackistan-intro-reel/raw/refs/heads/feature/hackistan-intro-reel/output/capcut/bundles/03_Animated_Scene_Clips.zip) | 75.1 MB |
| [WAV stems, artwork, captions, fonts and source](https://github.com/WockoPayaz/hackistan-intro-reel/raw/refs/heads/feature/hackistan-intro-reel/output/capcut/bundles/04_Audio_Artwork_Captions_Source.zip) | 63.8 MB |

[CapCut import guide](../../docs/CAPCUT_HANDOFF.md) · [Artwork preview](ASSET_PREVIEW.png) · [Asset manifest](asset-manifest.json) · [Checksums](downloads.json)

Includes both 1080×1920 / 30 FPS masters, two aligned 99.8-second WAV stems, six exact-frame clips, 112 visual assets (102 transparent overlays), full and scene-local SRTs, transcript, timing/cue sheets, fonts/licenses and the editable source snapshot.

The captioned master is byte-identical to the approved file. The caption-free master copies the existing animation video and mixed audio packets. Scene clips total 2,994 frames and reconstruct the existing animation with SSIM 0.997779 after exact-cut encoding. Both stems start at zero; their sum matches the existing lossless mix within one 24-bit quantization step. [Validation](validation.json).

GitHub release-asset uploads returned an authentication error, so these verified bundles are hosted directly on the feature branch. Original sources and full renders remain intact. No merge to main. This is an importable media handoff, not a native CapCut project.
