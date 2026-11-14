import {execFileSync} from 'node:child_process';import fs from 'node:fs';import path from 'node:path';import sharp from 'sharp';
const out=path.resolve('../output/reel');const movie=path.join(out,'hackistan-reel.mp4');
const meta=JSON.parse(execFileSync('ffprobe',['-v','error','-show_streams','-show_format','-of','json',movie]));const v=meta.streams.find(s=>s.codec_type==='video');
if(v.codec_name!=='h264'||v.width!==1080||v.height!==1920||v.r_frame_rate!=='30/1'||Number(v.nb_frames)!==1800||Number(meta.format.duration)!==60||meta.streams.some(s=>s.codec_type==='audio'))throw Error('Unexpected silent Reel metadata');
fs.writeFileSync(path.join(out,'verification.json'),JSON.stringify(meta,null,2));
execFileSync('ffmpeg',['-v','error','-i',movie,'-f','null','-']);
execFileSync('ffmpeg',['-v','error','-y','-i',movie,'-vf','fps=1/2,scale=216:384,tile=6x5','-frames:v','1','-update','1',path.join(out,'timeline-review.jpg')]);
const tiles=[];for(const [i,t] of [7,15,28,40,52].flatMap(b=>[b-.25,b+.1,b+.3,b+.65]).entries()){
 const buffer=execFileSync('ffmpeg',['-v','error','-ss',String(t),'-i',movie,'-frames:v','1','-vf','scale=216:384','-f','image2pipe','-vcodec','png','-']);
 tiles.push({input:buffer,left:(i%4)*216,top:Math.floor(i/4)*410});
 const label=Buffer.from(`<svg width="216" height="26"><text x="8" y="19" fill="#fff8e7" font-size="16">${t.toFixed(2)} seconds</text></svg>`);tiles.push({input:label,left:(i%4)*216,top:Math.floor(i/4)*410+384});
}
await sharp({create:{width:864,height:2050,channels:4,background:'#30362e'}}).composite(tiles).jpeg().toFile(path.join(out,'boundary-review.jpg'));
for(const [name,time] of [['meet-entry',8],['ideas-entry',29.6],['workshop-entry',41.5],['closing-entry',53]])execFileSync('ffmpeg',['-v','error','-y','-ss',String(time),'-i',movie,'-vf','fps=8,scale=216:384,tile=4x2','-frames:v','1','-update','1',path.join(out,name+'.jpg')]);
const captions=JSON.parse(fs.readFileSync(path.join(out,'captions.json')));if(captions[0].from!==0||captions.at(-1).to!==1800||captions.some((c,i)=>c.to<=c.from||(i&&c.from!==captions[i-1].to)))throw Error('Caption coverage gap');
const {markers}=JSON.parse(fs.readFileSync(path.join(out,'foley-markers.json')));if(new Set(markers.map(m=>m.id)).size!==markers.length||markers.some(m=>m.frame<0||m.frame>=1800))throw Error('Invalid Foley markers');
console.log(`Verified 60 seconds, 1800 frames, silent H.264; ${captions.length} caption cues and ${markers.length} unique Foley markers. Full decode passed.`);
