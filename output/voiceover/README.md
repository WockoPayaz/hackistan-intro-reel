# Hackistan — recorded voiceover review

[Watch / download the narrated MP4](hackistan-reel-voiceover.mp4?raw=true) · [Timeline contact sheet](timeline-review.png) · [Timestamped transcript](transcript.md) · [Captions (SRT)](captions.srt)

The new edit runs **99.8 seconds**, at 1080 × 1920 and 30 FPS. It uses your recorded voice and the existing licensed Foley collection. No music, synthetic voice, pitch change or speech speed-up.

## What changed

Each physical entrance retains its original movement duration. Scene starts, individual layer placements, project spotlights, handwriting and camera paths were authored around the recording; the old timeline was not stretched. Boba Drops, BakeBuild and the game have individual showcases. Tape follows photo contact. Existing scene pages and authentic artwork are preserved.

| Scene | Start | End |
| --- | ---: | ---: |
| Hook | 0.000 | 7.700 |
| Meet Hackistan | 7.700 | 26.767 |
| Our Projects | 26.767 | 45.000 |
| What We Do | 45.000 | 59.100 |
| Opportunities | 59.100 | 86.000 |
| Join Hackistan | 86.000 | 99.800 |

The uploaded recording is 99.529917 seconds, 48 kHz / 16-bit stereo. Its two channels are identical. Analysis found no clipped samples, a −3.1 dBFS peak and consistent ten-second RMS levels. Transcript review found no obvious repeated takes; no spoken content was cut.

## Audio edits

Only two central silence portions were removed, in original-file time:

- 7.760–8.160: 0.400 seconds.
- 52.350–52.700: 0.350 seconds.

The edited recording is 98.779917 seconds. Five-millisecond edge ramps prevent edit clicks; natural pauses and breaths remain. There is roughly one second of final visual hold after the edited file ends. The original WAV is untouched. [Exact edit list](audio-edits.json).

Voice level is raised by only 1 dB. No EQ, compression, noise reduction or normalization was applied. Foley is lowered beneath narration with independently adjustable cue gains. The 32 selected effects and 102 named event markers were retimed to the actual paper/photo/tape/sticker/pencil events. No constant rustling or new effects were added. The lossless review mix measures **−20.9 LUFS integrated, 3.6 LU loudness range, −2.1 dBFS true peak**. This leaves headroom for the later music pass; it is not a final music-mix loudness target.

[Updated cue sheet](cue-sheet.csv) · [All Foley markers](foley-markers.json) · [Original SFX licenses](../../docs/SFX_CATALOG.md)

## Captions and transcription

The caption paper strip sits at y=1555, leaving over 250 pixels below its panel for bottom interface controls while avoiding the final CTA and project images.

48 phrase captions use the actual recording, not `config.ts`. Local Whisper small.en and large-v3-turbo passes supplied word timing evidence. Short phrase boundaries were reviewed and proper-name spellings corrected. The speaker confirmed the opening wording, “140,000 teens,” and “free stuff.” A low-confidence ASR insertion after the greeting was removed from captions following that confirmation; no corresponding audio was cut. The numeric transcription `$2 million` represents the spoken amount including “dollars.” Original ASR output, timing reference and explicit corrections are retained for audit.

New statistics and reward/supporter claims in the recording are retained as spoken, **not independently verified**. These include network counts; specific travel/device opportunities; MIT, NASA, AMD and Dell support; the $2 million figure; and the closing free-stuff wording. The approved program-eligibility note remains visible. No new sponsor logos, guaranteed-reward graphics or supporting evidence were fabricated. Review these claims separately before publishing.

## Render and quality checks

- Actual MP4: H.264 / yuv420p, 1080 × 1920, 30 FPS, 2,994 video frames, 99.800 seconds; AAC stereo audio. Approximately 58 MB.
- Full MP4 decode completed without errors. Encoded AAC measured −20.9 LUFS integrated and −2.1 dBFS true peak.
- Complete unmuted Chromium playback reached 99.8 seconds: 2,994 decoded video frames, **zero dropped frames**, positive decoded audio bytes, no playback error. [Playback report](playback-check.json).
- Inspected 20 representative frames across all six scenes, 15 frames around page boundaries, and 12 frames around photo landing/tape attachment. Caption panels remain within their safe area; project art, CTA and logos remain readable. Cropping of notebook margins during a spotlight is deliberate; no extra zoom was applied to the low-resolution game screenshot.
- [Transition sequence sheet](transition-review.png) · [Photo/tape sequence sheet](photo-tape-review.png).
- TypeScript and timing validation passed: contiguous scenes, ordered non-overlapping captions, valid camera tracks, Foley inside composition bounds, and no reviewed speech inside either silence trim.
- [Preservation hashes](preservation-check.json) confirm that the original uploaded recording, silent master and prior SFX export are unchanged.

## Editable sources

- `video/src/narration-timing.json`: scene durations, per-layer timing, project timing and camera tracks.
- `video/src/narration-captions.json`: captions in milliseconds.
- `video/src/narration-audio.json`: voice gain and Foley master level; music off.
- `video/src/narration-sfx.json`: source trims, playback variation, exact cue frames and narration balance.
- `video/src/NarratedReel.tsx`: complete previewable `HackistanReelVoiceover` composition.
- `public/assets/audio/voiceover/hackistan-voiceover.wav`: untouched upload.
- `public/assets/audio/voiceover/hackistan-voiceover-edited.wav`: reversible silence-only edit.

The original [silent 60-second Reel](../reel/hackistan-reel.mp4?raw=true), [SFX-only version](../sfx/hackistan-reel-sfx.mp4?raw=true), and their compositions remain available for comparison.

## Rebuild in the cloud

The agent manages these commands; no local terminal is required. From the repository root: `python scripts/prepare-voiceover.py`, `python scripts/build-narration-captions.py`, `python scripts/retime-narration-sfx.py`, `python scripts/mix-narration.py` and `python scripts/validate-narration.py`.

From `video/`, `npm run voiceover` directly renders the full Remotion composition. For efficient caption revisions, `npm run voiceover:visuals` caches the notebook animation, and `npm run voiceover:captions` renders transparent caption cards using the exact same React caption component. Then run `python scripts/assemble-narration.py` from the repository root. Caption spans are quantized to the same 30 FPS boundaries as Remotion. Rebuildable intermediate caches/stems are ignored by Git.

Remain on `feature/hackistan-intro-reel`; no merge to main.
