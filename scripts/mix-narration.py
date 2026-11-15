"""Mix the recorded voice and retimed Foley as separate adjustable layers.
No music, loudness normalization, pitch shift, time stretch or voice replacement.
"""
import json,pathlib,subprocess
r=pathlib.Path(__file__).resolve().parents[1];out=r/'output/voiceover'
cues=json.loads((r/'video/src/narration-sfx.json').read_text());mix=json.loads((r/'video/src/narration-audio.json').read_text());timing=json.loads((r/'video/src/narration-timing.json').read_text());duration=timing['durationFrames']/timing['fps']
args=['ffmpeg','-v','error','-y'];filters=[]
for i,c in enumerate(cues):
 args+=['-i',str(r/'public'/c['file'])];d=c['durationFrames']/30;rate=c['playbackRate'];gain=c['gain']*mix['sfxMasterGain']*c['narrationGain']
 filters.append(f"[{i}:a]atrim=start={c['trimBeforeFrames']/30}:duration={d*rate},asetpts=PTS-STARTPTS,aresample=48000,asetrate={round(48000*rate)},aresample=48000,aformat=sample_fmts=fltp:channel_layouts=stereo,volume={gain},afade=t=in:st=0:d={c['fadeInFrames']/30},afade=t=out:st={d-c['fadeOutFrames']/30}:d={c['fadeOutFrames']/30},adelay={round(c['fromFrame']/30*48000)}S:all=1[a{i}]")
filters.append(''.join(f'[a{i}]' for i in range(len(cues)))+f'amix=inputs={len(cues)}:normalize=0:dropout_transition=0,apad,atrim=duration={duration}[foley]')
subprocess.run(args+['-filter_complex',';'.join(filters),'-map','[foley]','-c:a','pcm_s24le',str(out/'retimed-foley.wav')],check=True)
subprocess.run(['ffmpeg','-v','error','-y','-i',str(r/'public'/mix['voiceoverFile']),'-i',str(out/'retimed-foley.wav'),'-filter_complex',f"[0:a]volume={mix['voiceoverGain']},aresample=48000,aformat=sample_fmts=fltp:channel_layouts=stereo,apad,atrim=duration={duration}[voice];[voice][1:a]amix=inputs=2:normalize=0:dropout_transition=0[mix]",'-map','[mix]','-c:a','pcm_s24le',str(out/'voiceover-and-sfx.wav')],check=True)
print(f'Mixed {duration:.3f}s: natural-speed recording + {len(cues)} retimed cues, no music.')
