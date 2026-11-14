# Scene 3 motion prototype — revision 2

[Watch / download the 13-second MP4](scene-3-prototype.mp4?raw=true)

1080 × 1920, 30 FPS, H.264, silent. This is **only Scene 3**, based on the approved Revision 3 project collage. The full Reel has not been animated.

Paper approaches, lands and settles before tape is applied. Stickers press onto the page. The camera pauses over each project, with closer views limited to the higher-resolution website and CAD sources; Jame Gam receives a framing shift without extra magnification. Handwritten notes reveal through a pen mask and the arrow draws along its actual path. The full collage rests for the final 2.5 seconds.

In Remotion Studio, select `Scene3Prototype`. From `video/`, `npm run prototype` renders the MP4 with installed Chromium. Reusable motion components live in `video/src/motion.tsx`; scene entrance times in seconds live in `projectTiming` inside `video/src/ProjectsPrototype.tsx`.

Approve this motion prototype before work proceeds to the remaining scenes.

## Timeline inspection

The [timeline sheet](motion-review.jpg) samples the decoded MP4 every half second, left-to-right, top-to-bottom. Detail sheets show eight samples over one second: [photo approach (0.7s)](entrance-review.jpg), [tape contact (1.6s)](tape-review.jpg), [sticker placement (2.4s)](sticker-review.jpg), [handwriting (4.85s)](handwriting-review.jpg), and [camera return (9.5s)](return-review.jpg). Still frames support inspection; the MP4 above is the moving deliverable.
