"""Preserve the approved edit while preparing native CapCut media and aligned stems."""
import pathlib,subprocess,json,shutil
r=pathlib.Path(__file__).resolve().parents[1];out=r/'output/capcut/Hackistan-CapCut-Editing-Package';v=r/'output/voiceover';timing=json.loads((r/'video/src/narration-timing.json').read_text());mix=json.loads((r/'video/src/narration-audio.json').read_text());duration=timing['durationFrames']/30
for d in ['01_full_reel','02_audio_stems','04_scene_clips','05_captions_and_timing']: (out/d).mkdir(parents=True,exist_ok=True)
def run(args):subprocess.run(['ffmpeg','-v','error','-y']+args,check=True)
shutil.copy2(v/'hackistan-reel-voiceover.mp4',out/'01_full_reel/01_Hackistan_With_Captions_VO_SFX.mp4')
# Copy the original caption-free animation video packets and the latest review AAC mix.
run(['-i',str(v/'narrated-visuals.mp4'),'-i',str(v/'hackistan-reel-voiceover.mp4'),'-map','0:v:0','-map','1:a:0','-c','copy','-t',str(duration),'-movflags','+faststart',str(out/'01_full_reel/02_Hackistan_No_Captions_VO_SFX.mp4')])
run(['-i',str(r/'public'/mix['voiceoverFile']),'-af',f"volume={mix['voiceoverGain']},apad,atrim=duration={duration}",'-ar','48000','-ac','2','-c:a','pcm_s24le',str(out/'02_audio_stems/01_Voiceover_Aligned_00m00s.wav')])
shutil.copy2(v/'retimed-foley.wav',out/'02_audio_stems/02_Foley_SFX_Aligned_00m00s.wav')
rows=[]
for i,s in enumerate(timing['scenes']):
 name=f"{i+1:02}_{s['title'].replace(' ','_')}_SILENT_NO_CAPTIONS.mp4";start=s['fromFrame'];end=start+s['durationFrames']
 # Re-encode to cut at exact frames, rather than shifting a cut to a GOP/keyframe.
 run(['-i',str(v/'narrated-visuals.mp4'),'-vf',f'trim=start_frame={start}:end_frame={end},setpts=PTS-STARTPTS','-an','-c:v','libx264','-preset','medium','-crf','16','-pix_fmt','yuv420p','-r','30','-threads','3','-movflags','+faststart',str(out/'04_scene_clips'/name)])
 rows.append(dict(scene=i+1,title=s['title'],filename=name,startFrame=start,endFrameExclusive=end,frames=s['durationFrames'],startSeconds=start/30,endSeconds=end/30,durationSeconds=s['durationFrames']/30))
 print(f'Exported scene {i+1}: {s["durationFrames"]} frames',flush=True)
(out/'05_captions_and_timing/scene-boundaries.json').write_text(json.dumps(rows,indent=2)+'\n')
for name in ['captions.srt','transcript.md','captions.json','cue-sheet.csv','cue-sheet.json','audio-edits.json','foley-markers.json']:
 shutil.copy2(v/name,out/'05_captions_and_timing'/name)
print('Both full movies, aligned stems and six exact-frame scene clips prepared.')
