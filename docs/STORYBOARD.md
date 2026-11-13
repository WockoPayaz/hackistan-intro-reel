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


## Revision 2 — tactile collage refinement

The six pages share ivory, charcoal, rust, sage, dusty pink, pale blue and muted yellow. Recurring ruled inserts, double pencil underlines, hand-cut tags, patterned washi, paper clips, printed ticket fragments and edge tabs establish one notebook world. Original branding and screenshots remain unaltered.

- **01:** retains the large question and mountains, adding a taped headline scrap, layered location label and a small pencil note.
- **02:** stacks pink/blue paper behind the logo, tucks Orpheus into the student-led note, and assembles a correspondence-style Quetta/community insert with a flag and tag.
- **03:** enlarges all three project image areas; overlaps Polaroids and colored backing sheets, with Boba peeking out and a CAD annotation beside BakeBuild. All project images and titles remain recognizable. The prior frame remains accessible in Git history.
- **04:** replaces equal grid tiles with staggered, varied scraps. Godot touches the game note, soldering overlaps the PCB page, and a pencil connection runs toward the 3D printing note.
- **05:** replaces long paragraphs with a workshop checklist, a notebook tag and a grouped Hack Club program collage: skills/portfolio insert, eligibility note, official flag and Ship sticker. Journpheus joins the local checklist. The program heading and eligibility qualifications remain visible.
- **06:** retains the logo, headline and red CTA; adds layered backing, a location tag, memo note and overlapping callbacks to the website/game projects.

Reference review: the three uploads arrived during the refinement pass and were preserved from commit `aa89cc3`. All were visually studied: `01-colorful-scrapbook.jpg` informed sticker interactions and patterned color accents; `02-vintage-layered-journal.jpg` informed irregular paper backing, printed fragments and shadows; `03-creative-collage.jpg` informed overlapping project photographs, tags and perforated ticket-like labels. Original ephemera were designed for Hackistan; no reference photography, text or sticker artwork was copied into the frames.

All deliverables remain static. Animation, transitions and timed captions are not implemented or approved.
