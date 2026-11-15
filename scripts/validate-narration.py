"""Check narration-driven scene, caption, camera and Foley timing invariants."""
import json,pathlib
r=pathlib.Path(__file__).resolve().parents[1]
a=json.loads((r/'video/src/narration-timing.json').read_text())
c=json.loads((r/'video/src/narration-captions.json').read_text())
s=json.loads((r/'video/src/narration-sfx.json').read_text())
assert len(a['scenes'])==6
assert a['scenes'][0]['fromFrame']==0
for left,right in zip(a['scenes'],a['scenes'][1:]):assert left['fromFrame']+left['durationFrames']==right['fromFrame']
assert sum(x['durationFrames'] for x in a['scenes'])==a['durationFrames']
for i,x in enumerate(c):
 assert 0<=x['startMs']<x['endMs']<=a['durationFrames']/30*1000
 if i:assert c[i-1]['endMs']<=x['startMs']
 assert len(x['text'])<=90,x
for x in s:assert 0<=x['fromFrame']<x['fromFrame']+x['durationFrames']<=a['durationFrames']
for scene in a['scenes']:
 t=scene['camera'];assert len(set(t['stops']))==len(t['stops']) and t['stops']==sorted(t['stops'])
 for k in ['scale','x','y']:assert len(t[k])==len(t['stops'])
 assert all(0<=v<scene['durationFrames']/30 for v in scene['layers'].values())
print('PASS: six contiguous scenes; captions ordered/non-overlapping; Foley bounds; camera tracks strictly increasing.')

corrections=json.loads((r/'output/voiceover/transcript-corrections.json').read_text())
assert all(x['confirmed'] for x in corrections),'Speaker wording still unresolved'
words=json.loads((r/'output/voiceover/transcript-reviewed-source.json').read_text())
edits=json.loads((r/'output/voiceover/audio-edits.json').read_text())
for cut in edits['cuts']:
 for w in words:
  assert not (w['start']<cut['sourceEnd'] and w['end']>cut['sourceStart']),('Silence cut intersects reviewed word',cut,w)
assert edits['playbackRate']==1
for x in c:assert '[unclear' not in x['text']
print('PASS: speaker clarifications resolved; no reviewed speech intersects silence trims; natural playback rate retained.')
