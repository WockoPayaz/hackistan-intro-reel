"""Attach the existing Foley library to the narrated animation's named events."""
import json,pathlib,csv
r=pathlib.Path(__file__).resolve().parents[1]
t=json.loads((r/'video/src/narration-timing.json').read_text());old=json.loads((r/'video/src/sfx-cues.json').read_text());source=json.loads((r/'output/reel/foley-markers.json').read_text())['markers'];p=t['projects']
markers=[]
for m in source:
 scene,name=m['id'].split('.',1);index=int(scene.split('-')[1])-1;s=t['scenes'][index];offset=0
 if name=='page-turn':at=0
 elif index==2:
  if '.' in name:
   obj,action=name.split('.');at=p[obj]+(.72 if action=='land' else 0)
   if action.startswith('tape'):at=p[obj+'Tape']+(.48 if action=='tape-stick' else 0)
  else:at=p[{'boba-sticker':'bobaSticker','godot':'godot','cad-writing':'annotation','cad-arrow':'arrow','footer':'footer'}[name]]
 else:
  base=name.split('.')[0];at=s['layers'][base]
  if name.endswith('.land'):at+=.7
  elif name.endswith('.tape-peel'):at+=.85
  elif name.endswith('.tape-stick'):at+=1.25
 markers.append(dict(m,frame=s['fromFrame']+round(at*30)))
lookup={m['id']:m for m in markers};oldlookup={m['id']:m for m in source}
cues=[]
for c in old['cues']:
 delta=c['fromFrame']-oldlookup[c['id']]['frame']
 cues.append(dict(c,fromFrame=lookup[c['id']]['frame']+delta,narrationGain=.36))
cues.sort(key=lambda c:c['fromFrame'])
(r/'video/src/narration-sfx.json').write_text(json.dumps(cues,indent=2)+'\n')
(r/'output/voiceover/foley-markers.json').write_text(json.dumps({'fps':30,'markers':sorted(markers,key=lambda m:m['frame'])},indent=2)+'\n')
rows=[dict(id=c['id'],frame=c['fromFrame'],seconds=round(c['fromFrame']/30,6),durationSeconds=c['durationFrames']/30,source=c['file'],trimSeconds=c['trimBeforeFrames']/30,playbackRate=c['playbackRate'],cueGain=c['gain'],sfxMasterGain=old['masterGain'],narrationGain=c['narrationGain']) for c in cues]
with (r/'output/voiceover/cue-sheet.csv').open('w') as f:
 w=csv.DictWriter(f,fieldnames=list(rows[0]),lineterminator='\n');w.writeheader();w.writerows(rows)
(r/'output/voiceover/cue-sheet.json').write_text(json.dumps(rows,indent=2)+'\n')
print('Retimed',len(cues),'selected cues and',len(markers),'named markers.')
