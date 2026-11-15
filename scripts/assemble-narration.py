"""Composite exact Remotion caption cards over the cached animation and mux audio.
This avoids rerendering every notebook frame when correcting a transcript word.
"""
import json,pathlib,subprocess
r=pathlib.Path(__file__).resolve().parents[1];out=r/'output/voiceover'
t=json.loads((r/'video/src/narration-timing.json').read_text());spans=json.loads((out/'caption-spans.json').read_text())
assert all(c['confirmed'] for c in json.loads((out/'transcript-corrections.json').read_text()))
assert spans[0]['fromFrame']==0 and spans[-1]['toFrame']==t['durationFrames']
for a,b in zip(spans,spans[1:]):assert a['toFrame']==b['fromFrame']
lines=['ffconcat version 1.0']
for s in spans:
 lines.extend([f"file '{(out/s['file']).resolve()}'",'option framerate 30',f"duration {(s['toFrame']-s['fromFrame'])/30:.9f}"])
lines.extend([f"file '{(out/spans[-1]['file']).resolve()}'",'option framerate 30'])
concat=out/'caption-concat.txt';concat.write_text('\n'.join(lines)+'\n')
subprocess.run(['ffmpeg','-hide_banner','-y','-i',str(out/'narrated-visuals.mp4'),'-f','concat','-safe','0','-i',str(concat),'-i',str(out/'voiceover-and-sfx.wav'),'-filter_complex','[1:v]format=rgba,fps=30[subs];[0:v][subs]overlay=shortest=1:format=auto,format=yuv420p[video]','-map','[video]','-map','2:a:0','-c:v','libx264','-preset','medium','-crf','18','-threads','4','-c:a','aac','-b:a','192k','-t',str(t['durationFrames']/30),'-r','30','-movflags','+faststart',str(out/'hackistan-reel-voiceover.mp4')],check=True)
print('Final review MP4 assembled with caption frame boundaries and recorded voice + Foley.')
