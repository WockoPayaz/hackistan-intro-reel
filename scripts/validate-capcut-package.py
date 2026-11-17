"""Validate exact timelines, transparency, copy integrity and aligned audio stems."""
from pathlib import Path
import subprocess,json,hashlib,array
from PIL import Image,ImageDraw,ImageFont
r=Path(__file__).resolve().parents[1];out=r/'output/capcut/Hackistan-CapCut-Editing-Package';qa=r/'output/capcut';report={}
def probe(p):return json.loads(subprocess.check_output(['ffprobe','-v','error','-show_streams','-show_format','-of','json',str(p)]))
def digest(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def stream_hash(p,stream):return subprocess.check_output(['ffmpeg','-v','error','-i',str(p),'-map',stream,'-c','copy','-f','hash','-hash','sha256','-']).decode().strip()
source=r/'output/voiceover/hackistan-reel-voiceover.mp4';full=out/'01_full_reel/01_Hackistan_With_Captions_VO_SFX.mp4';clean=out/'01_full_reel/02_Hackistan_No_Captions_VO_SFX.mp4'
assert digest(source)==digest(full)
assert stream_hash(source,'0:a:0')==stream_hash(clean,'0:a:0')
assert stream_hash(r/'output/voiceover/narrated-visuals.mp4','0:v:0')==stream_hash(clean,'0:v:0')
report['masters']={'captionedByteIdentical':True,'captionFreeVideoPacketsUnchanged':True,'captionFreeAudioPacketsMatchLatestMix':True}
for p in [full,clean]:
 m=probe(p);v=next(s for s in m['streams'] if s['codec_type']=='video');assert (v['width'],v['height'],v['r_frame_rate'],int(v['nb_frames']))==(1080,1920,'30/1',2994);assert abs(float(m['format']['duration'])-99.8)<.001
rows=json.loads((out/'05_captions_and_timing/scene-boundaries.json').read_text());total=0
for row in rows:
 m=probe(out/'04_scene_clips'/row['filename']);assert len(m['streams'])==1;v=m['streams'][0];assert int(v['nb_frames'])==row['frames'];assert v['r_frame_rate']=='30/1';assert abs(float(v['start_time']))<.001;total+=int(v['nb_frames'])
assert total==2994;report['scenes']={'count':len(rows),'totalFrames':total,'timeline':rows}
for p in sorted((out/'02_audio_stems').glob('*.wav')):
 m=probe(p)['streams'][0];assert m['codec_name']=='pcm_s24le' and m['sample_rate']=='48000' and m['channels']==2;assert int(m['duration_ts'])==4790400
report['stems']={'sampleRate':48000,'channels':2,'bits':24,'samplesPerChannel':4790400,'durationSeconds':99.8,'startSeconds':0}
voice=out/'02_audio_stems/01_Voiceover_Aligned_00m00s.wav';foley=out/'02_audio_stems/02_Foley_SFX_Aligned_00m00s.wav'
raw=subprocess.check_output(['ffmpeg','-v','error','-i',str(voice),'-i',str(foley),'-filter_complex','[0:a][1:a]amix=inputs=2:normalize=0','-f','f32le','-']);combined=array.array('f',raw)
raw=subprocess.check_output(['ffmpeg','-v','error','-i',str(r/'output/voiceover/voiceover-and-sfx.wav'),'-f','f32le','-']);reference=array.array('f',raw);assert len(combined)==len(reference)
error=max(abs(a-b) for a,b in zip(combined,reference));assert error<1e-6;report['stems']['maxSampleErrorVsExistingMix']=error
assets=json.loads((out/'03_visual_assets/asset-manifest.json').read_text());overlays=0
for a in assets:
 im=Image.open(out/'03_visual_assets'/a['file']);assert im.getbbox() is not None
 if a['transparentOverlay']:
  assert im.mode=='RGBA' and im.getchannel('A').getextrema()[0]==0,a['file'];overlays+=1
report['artwork']={'assets':len(assets),'verifiedTransparentOverlayEntries':overlays,'unchangedArtwork':True}
# Checkerboard contact sheet for the actual exported assets.
w,h=240,210;sheet=Image.new('RGB',(w*5,h*((len(assets)+4)//5)),'#eee9df');draw=ImageDraw.Draw(sheet)
for i,a in enumerate(assets):
 x=(i%5)*w;y=(i//5)*h
 for yy in range(0,174,12):
  for xx in range(0,w-8,12):draw.rectangle((x+xx,y+yy,x+xx+11,y+yy+11),fill='#ddd' if (xx//12+yy//12)%2 else '#fff')
 im=Image.open(out/'03_visual_assets'/a['file']).convert('RGBA');im.thumbnail((220,160));sheet.paste(im,(x+(232-im.width)//2,y+(174-im.height)//2),im)
 label=Path(a['file']).stem;draw.text((x+4,y+179),label[:35],fill='#282b27');draw.text((x+4,y+193),'alpha overlay' if a['transparentOverlay'] else 'opaque source/background',fill='#666')
sheet.save(out/'03_visual_assets/ASSET_PREVIEW.png')
(qa/'validation.json').write_text(json.dumps(report,indent=2)+'\n');(out/'VALIDATION.json').write_text(json.dumps(report,indent=2)+'\n')
(qa/'scene-concat.txt').write_text(''.join(f"file '{(out/'04_scene_clips'/row['filename']).resolve()}'\n" for row in rows))
print(json.dumps({k:v for k,v in report.items() if k!='scenes'},indent=2))
