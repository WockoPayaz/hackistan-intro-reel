"""Extract review sheets from the actual encoded MP4, including transition sequences."""
import json,pathlib,subprocess,io
from PIL import Image,ImageDraw
r=pathlib.Path(__file__).resolve().parents[1];out=r/'output/voiceover';t=json.loads((r/'video/src/narration-timing.json').read_text());video=out/'hackistan-reel-voiceover.mp4'
def frame(seconds):
 png=subprocess.check_output(['ffmpeg','-v','error','-ss',str(seconds),'-i',str(video),'-frames:v','1','-f','image2pipe','-vcodec','png','-'])
 return Image.open(io.BytesIO(png)).convert('RGB')
def sheet(times,name,columns=4,width=270):
 height=round(width*1920/1080);tileheight=height+28
 im=Image.new('RGB',(width*columns,tileheight*((len(times)+columns-1)//columns)),'#f1ecdf');d=ImageDraw.Draw(im)
 for i,time in enumerate(times):
  x=(i%columns)*width;y=(i//columns)*tileheight;im.paste(frame(time).resize((width,height),Image.Resampling.LANCZOS),(x,y));d.text((x+8,y+height+6),f'{time:.3f} s',fill='#282b27')
 im.save(out/name)
sheet(t['reviewSeconds'],'timeline-review.png')
bounds=[s['fromFrame']/30 for s in t['scenes'][1:]]
sheet([round(b+offset,5) for b in bounds for offset in [-1/30,7/30,16/30]],'transition-review.png',3)
projectstart=t['scenes'][2]['fromFrame']/30;p=t['projects']
sheet([projectstart+p[name]+offset for name in ['boba','bake','jame'] for offset in [.4,.72,.96,1.45]],'photo-tape-review.png',4)
print('Extracted 20 timeline frames, 15 transition frames and 12 photo/tape frames from final encoded MP4.')
