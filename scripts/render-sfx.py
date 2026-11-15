"""Render JSON cue mix, then preserve the approved video stream without re-encoding."""
import json,pathlib,subprocess,csv
root=pathlib.Path(__file__).resolve().parents[1];config=json.loads((root/'video/src/sfx-cues.json').read_text());out=root/'output/sfx';out.mkdir(exist_ok=True)
args=['ffmpeg','-v','error','-y'];filters=[]
for i,c in enumerate(config['cues']):
 args+=['-i',str(root/'public'/c['file'])];duration=c['durationFrames']/30;trim=c['trimBeforeFrames']/30;fade=c['fadeOutFrames']/30;rate=c.get('playbackRate',1)
 filters.append(f"[{i}:a]atrim=start={trim}:duration={duration*rate},asetpts=PTS-STARTPTS,aresample=48000,asetrate={round(48000*rate)},aresample=48000,aformat=sample_fmts=fltp:channel_layouts=stereo,volume={c['gain']*config['masterGain']},afade=t=in:st=0:d={c['fadeInFrames']/30},afade=t=out:st={duration-fade}:d={fade},adelay={round(c['fromFrame']/30*48000)}S:all=1[a{i}]")
filters.append(''.join(f'[a{i}]' for i in range(len(config['cues'])))+f"amix=inputs={len(config['cues'])}:normalize=0:dropout_transition=0,apad,atrim=duration=60[mix]")
subprocess.run(args+['-filter_complex',';'.join(filters),'-map','[mix]','-c:a','pcm_s24le',str(out/'foley-mix.wav')],check=True)
subprocess.run(['ffmpeg','-v','error','-y','-i',str(root/'output/reel/hackistan-reel.mp4'),'-i',str(out/'foley-mix.wav'),'-map','0:v:0','-map','1:a:0','-c:v','copy','-c:a','aac','-b:a','192k','-t','60','-movflags','+faststart',str(out/'hackistan-reel-sfx.mp4')],check=True)
rows=[dict(id=c['id'],asset=c['assetId'],frame=c['fromFrame'],seconds=c['fromFrame']/30,trim_seconds=c['trimBeforeFrames']/30,duration_seconds=c['durationFrames']/30,gain=c['gain'],playback_rate=c.get('playbackRate',1),master=config['masterGain']) for c in config['cues']]
with (out/'cue-sheet.csv').open('w') as f:
 w=csv.DictWriter(f,fieldnames=list(rows[0]),lineterminator="\n");w.writeheader();w.writerows(rows)
print('Rendered 60-second SFX mix and MP4; original video stream copied unchanged.')

(out/'cue-sheet.json').write_text(json.dumps([dict(c,timeSeconds=c['fromFrame']/30,trimSeconds=c['trimBeforeFrames']/30,durationSeconds=c['durationFrames']/30,masterGain=config['masterGain']) for c in config['cues']],indent=2)+'\n')
