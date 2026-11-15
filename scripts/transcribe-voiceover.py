"""Optional local CPU transcription (no audio upload).
Install faster-whisper==1.2.1 in an isolated Python environment, then run:
python scripts/transcribe-voiceover.py --model large-v3-turbo
Model downloads are cached outside the repository. Review ASR before captions.
"""
import argparse,json,pathlib,subprocess,numpy as np
from faster_whisper import WhisperModel
parser=argparse.ArgumentParser();parser.add_argument('--model',default='large-v3-turbo');args=parser.parse_args()
r=pathlib.Path(__file__).resolve().parents[1]
source=r/'public/assets/audio/voiceover/hackistan-voiceover.wav'
audio=np.frombuffer(subprocess.check_output(['ffmpeg','-v','error','-i',str(source),'-ar','16000','-ac','1','-f','f32le','-']),dtype=np.float32)
model=WhisperModel(args.model,device='cpu',compute_type='int8',download_root='/tmp/hackistan-models',cpu_threads=5)
segments,info=model.transcribe(audio,beam_size=5,word_timestamps=True,language='en',vad_filter=True,initial_prompt='Hackistan, Quetta, Balochistan, Hack Club, Boba Drops, BakeBuild, Jame Gam, CAD, PCB.')
rows=[]
for s in segments:
 rows.append({'start':s.start,'end':s.end,'text':s.text,'words':[{'word':w.word,'start':w.start,'end':w.end,'probability':w.probability} for w in s.words]})
 print(f'{s.start:.2f}–{s.end:.2f} {s.text}',flush=True)
(r/'output/voiceover/transcript-asr-source.json').write_text(json.dumps(rows,indent=2)+'\n')
