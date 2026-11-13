# Phase A art direction

One field notebook, six pages: warm ivory graph paper, charcoal ink, terracotta marker, sage stationery, handwritten notes, translucent masking tape and restrained rotations. Repeated punched margin, folio and paper grain connect the entire sequence. Large condensed lettering establishes hierarchy; short handwritten notes provide warmth. Safe content area is approximately x=100–920, y=240–1660; outside it is expendable decoration. Recheck against current Instagram overlays during Phase B.

| Page | Focal point | Planned motion after approval |
|---|---|---|
| 01 / 0–7s | Bold question over pencil mountains | Mountain line draws, words settle, camera reveals identity label |
| 02 / 7–15s | Taped Hackistan identity sheet | Page slides, logo sheet lands, dotted community connection draws |
| 03 / 15–28s | Three staggered Polaroids | Website, CAD and game appear sequentially; each holds for recognition |
| 04 / 28–40s | Six sketched ideas on paper scraps | Camera crosses the notebook, notes settle in pairs |
| 05 / 40–52s | Local workshop checklist and wider program note | Pencil checks appear; sage program note slides beneath local activities |
| 06 / 52–60s | Logo, invitation and rust-red paper CTA | Familiar scraps frame the final page; final CTA holds at least 3 seconds |

These are representative finished layouts, not yet animation keyframes. No motion has been implemented. Full narration is preserved verbatim in `video/src/config.ts`; on-page copy is a concise visual companion. No new factual claims are added. Hackistan activities and wider Hack Club programs are explicitly separated. Rewards and grants remain eligibility-based.

Uploaded logos, project images and authentic stickers are now used throughout. Scene 03 preserves the real projects and their framing. Scene 04 combines original notebook sketches with supplied Godot and soldering stickers. Scene 05 uses drawn ink checkboxes and the supplied Ship sticker; it omits the optional workshop photograph because none was supplied. Jame Gam remains limited by the resolution of the supplied screenshot.

Reusable pieces: NotebookPage, PaperTexture, TornPaper, PolaroidCard, Tape, Sticker, Hand, DrawnArrow, Mountains, Sketch, AssetSlot. Frame-based SketchReveal, AnimatedCaption and SceneTransition belong to Phase B. Geometry and paper grain are deterministic; there is no Math.random, CSS animation or asynchronous remote font loading.
