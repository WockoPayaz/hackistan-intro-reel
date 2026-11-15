"""Build phrase captions from source word timestamps and explicit corrections.
Preserve ASR evidence; unresolved phrases stay visibly marked pending confirmation.
"""
import json,pathlib,importlib.util,re
r=pathlib.Path(__file__).resolve().parents[1];out=r/'output/voiceover'
spec=importlib.util.spec_from_file_location('edit',r/'scripts/prepare-voiceover.py');edit=importlib.util.module_from_spec(spec);spec.loader.exec_module(edit)
segments=json.loads((out/'transcript-asr-source.json').read_text());corrections=json.loads((out/'transcript-corrections.json').read_text())
small=json.loads((out/'transcript-alignment-reference.json').read_text());smallwords=[w for s in small for w in s['words']]
words=[]
for segment in segments:
 for w in segment['words']:
  w=dict(w);w['word']=w['word'].strip()
  # Refine long ASR onset spans with the independent model's nearby matching word.
  candidates=[v for v in smallwords if re.sub(r'\W','',v['word']).lower()==re.sub(r'\W','',w['word']).lower() and abs(v['end']-w['end'])<.18 and v['start']>w['start']+.22]
  if candidates:w['start']=min(candidates,key=lambda v:abs(v['end']-w['end']))['start']
  words.append(w)
for correction in corrections:
 affected=[w for w in words if w['start']>=correction['start']-.03 and w['end']<=correction['end']+.03]
 if not affected:raise ValueError(correction)
 index=words.index(affected[0]);words[index:index+len(affected)]=[{'word':correction['text'],'start':affected[0]['start'],'end':affected[-1]['end'],'probability':None,'correctionNote':correction['reason'],'confirmed':correction['confirmed']}]
words=[w for w in words if w['word']]
(out/'transcript-reviewed-source.json').write_text(json.dumps(words,indent=2)+'\n')
# Editorial phrase boundaries preserve every reviewed word, including fillers.
# Join number tokens before grouping, so 140 + ,000 can never split on screen.
merged=[]
for w in words:
 if w['word'].startswith(',') and merged and merged[-1]['word'][-1:].isdigit():
  merged[-1]['word']+=w['word'];merged[-1]['end']=w['end']
 else:merged.append(dict(w))
words=merged
ends=json.loads((out/'caption-phrase-ends.json').read_text())
groups=[];current=[];index=0
for w in words:
 current.append(w)
 if abs(w['end']-ends[index])<.031:
  groups.append(current);current=[];index+=1
if current or index!=len(ends):raise ValueError('Phrase boundaries must cover all reviewed words.')
captions=[]
for i,g in enumerate(groups):
 text=' '.join(w['word'] for w in g).replace('140 ,000','140,000')
 start=edit.edit_time(g[0]['start']);end=edit.edit_time(g[-1]['end'])
 nextstart=edit.edit_time(groups[i+1][0]['start']) if i+1<len(groups) else 99.8
 # A small reading tail, never overlapping the next phrase.
 end=min(nextstart,end+.12)
 if text.endswith('$2 million'):
  # Whisper's currency formatting absorbs spoken 'dollars'; retain its reading tail.
  end=min(nextstart,edit.edit_time(84.2)+.12)
 captions.append({'text':text,'startMs':round(start*1000),'endMs':round(end*1000),'timestampMs':None,'confidence':None})
(r/'video/src/narration-captions.json').write_text(json.dumps(captions,indent=2)+'\n')
(out/'captions.json').write_text(json.dumps(captions,indent=2)+'\n')
def timestamp(seconds,sep='.'):
 ms=round(seconds*1000);h,ms=divmod(ms,3600000);m,ms=divmod(ms,60000);s,ms=divmod(ms,1000);return f'{h:02}:{m:02}:{s:02}{sep}{ms:03}'
(out/'captions.srt').write_text('\n'.join(f"{i+1}\n{timestamp(c['startMs']/1000,',')} --> {timestamp(c['endMs']/1000,',')}\n{c['text']}\n" for i,c in enumerate(captions)))
lines=['# Recorded narration — phrase transcript','', 'Times below follow the edited review video. The original word timestamps are preserved in `transcript-reviewed-source.json`.','']
lines += [f"- {timestamp(c['startMs']/1000)}–{timestamp(c['endMs']/1000)} — {c['text']}" for c in captions]
(out/'transcript.md').write_text('\n'.join(lines)+'\n')
print(f'Built {len(captions)} timestamped phrase captions; unresolved corrections:',sum(not c['confirmed'] for c in corrections))
