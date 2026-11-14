import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
const out=path.resolve('../output/prototype');const movie=path.join(out,'scene-3-prototype.mp4');
const meta=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','stream=codec_name,width,height,pix_fmt,r_frame_rate,nb_frames,duration','-show_entries','format=duration,size','-of','json',movie]));
const video=meta.streams.find(s=>s.codec_name==='h264');
if(!video||video.width!==1080||video.height!==1920||video.r_frame_rate!=='30/1'||video.nb_frames!=='390'||Number(meta.format.duration)!==13)throw Error('Unexpected video metadata');
fs.writeFileSync(path.join(out,'verification.json'),JSON.stringify(meta,null,2)+'\n');
const ff=(args)=>execFileSync('ffmpeg',['-v','error','-y',...args],{stdio:'pipe'});
ff(['-i',movie,'-vf','fps=2,scale=216:384,tile=6x5','-frames:v','1','-update','1',path.join(out,'motion-review.jpg')]);
for(const [name,time] of [['entrance',.7],['tape',1.6],['sticker',2.4],['handwriting',4.85],['return',9.5]]){
 ff(['-ss',String(time),'-i',movie,'-vf','fps=8,scale=270:480,tile=4x2','-frames:v','1','-update','1',path.join(out,`${name}-review.jpg`)]);
}
for(const [name,time] of [['boba-focus',2.9],['bake-focus',5.9],['jame-focus',8.7],['completed-page',11]]){
 ff(['-ss',String(time),'-i',movie,'-frames:v','1','-update','1',path.join(out,`${name}.png`)]);
}
ff(['-i',movie,'-f','null','-']);console.log('390 frames / 13 s / 1080x1920 / H.264 verified; full decode passed; review sheets extracted.');
