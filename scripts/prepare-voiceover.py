"""Create a reversible silence-only edit; never modify the uploaded recording.
Run after checking source transcription. Cuts are in SOURCE seconds.
"""
import json, pathlib, subprocess, wave, array
ROOT=pathlib.Path(__file__).resolve().parents[1]
OUT=ROOT/'output/voiceover';OUT.mkdir(exist_ok=True)
SOURCE=ROOT/'public/assets/audio/voiceover/hackistan-voiceover.wav'
# Only central portions of two >1-second gaps. Preserve breath/phrase edges.
CUTS=[(7.76,8.16),(52.35,52.70)]
def edit_time(t):
 return t-sum(max(0,min(t,b)-a) for a,b in CUTS if t>a)
def main():
 with wave.open(str(SOURCE)) as w:
  rate=w.getframerate();channels=w.getnchannels();frames=w.getnframes();raw=array.array('h',w.readframes(frames))
 intervals=[];last=0
 for a,b in CUTS:intervals.append((last,a));last=b
 intervals.append((last,frames/rate))
 edited=array.array('h')
 for i,(a,b) in enumerate(intervals):
  part=raw[round(a*rate)*channels:round(b*rate)*channels]
  # Five millisecond edge ramps entirely inside near-silent cut boundaries.
  ramp=round(.005*rate)
  if i:
   for n in range(ramp):
    for c in range(channels):part[n*channels+c]=round(part[n*channels+c]*n/ramp)
  if i<len(intervals)-1:
   for n in range(ramp):
    for c in range(channels):part[len(part)-(n+1)*channels+c]=round(part[len(part)-(n+1)*channels+c]*n/ramp)
  edited.extend(part)
 dest=SOURCE.with_name('hackistan-voiceover-edited.wav')
 with wave.open(str(dest),'wb') as w:w.setparams((channels,2,rate,0,'NONE','not compressed'));w.writeframes(edited.tobytes())
 report={'source':str(SOURCE.relative_to(ROOT)),'sourceDuration':frames/rate,'editedDuration':len(edited)/channels/rate,'cuts':[{'sourceStart':a,'sourceEnd':b,'removedSeconds':b-a,'reason':'central portion of >1-second near-silent gap; breath and speech edges retained'} for a,b in CUTS],'totalRemovedSeconds':sum(b-a for a,b in CUTS),'playbackRate':1,'processing':'5 ms ramps at silence edit edges only. No EQ, compression, denoising, pitch shift or voice replacement.'}
 (OUT/'audio-edits.json').write_text(json.dumps(report,indent=2)+'\n')
 print(json.dumps(report,indent=2))
if __name__=='__main__':main()
