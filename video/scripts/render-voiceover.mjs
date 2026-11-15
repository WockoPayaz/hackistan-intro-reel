import {bundle} from '@remotion/bundler';
import {selectComposition,renderMedia,renderStill} from '@remotion/renderer';
import fs from 'node:fs';import path from 'node:path';import sharp from 'sharp';
const out=path.resolve('../output/voiceover');fs.mkdirSync(out,{recursive:true});
const timing=JSON.parse(fs.readFileSync('src/narration-timing.json','utf8'));
const serveUrl=await bundle({entryPoint:path.resolve('src/index.ts'),publicDir:path.resolve('../public')});
const browserExecutable='/usr/bin/chromium';
const composition=await selectComposition({serveUrl,id:process.argv.includes('--visuals')?'HackistanNarratedVisuals':'HackistanReelVoiceover',browserExecutable});
const seconds=timing.reviewSeconds;
const frames=seconds.map(t=>Math.round(t*30));
if(!process.argv.includes('--video-only')){
 for(let i=0;i<frames.length;i++)await renderStill({serveUrl,composition,frame:frames[i],output:path.join(out,`review-${String(i+1).padStart(2,'0')}.png`),browserExecutable});
 const tiles=await Promise.all(frames.map(async(f,i)=>{
  const label=Buffer.from(`<svg width="270" height="32"><rect width="270" height="32" fill="#f1ecdf"/><text x="12" y="23" fill="#282b27" font-size="18">${(f/30).toFixed(2)} s</text></svg>`);
  return {input:await sharp({create:{width:270,height:512,channels:4,background:'#f1ecdf'}}).composite([{input:await sharp(path.join(out,`review-${String(i+1).padStart(2,'0')}.png`)).resize(270,480).toBuffer(),left:0,top:0},{input:label,left:0,top:480}]).png().toBuffer(),left:(i%4)*270,top:Math.floor(i/4)*512};
 }));
 await sharp({create:{width:1080,height:Math.ceil(frames.length/4)*512,channels:4,background:'#f1ecdf'}}).composite(tiles).png().toFile(path.join(out,'timeline-review.png'));
}
if(process.argv.includes('--stills'))process.exit(0);
let last=-1;
await renderMedia({serveUrl,composition,codec:'h264',audioCodec:'aac',audioBitrate:'192k',crf:18,pixelFormat:'yuv420p',browserExecutable,concurrency:3,outputLocation:path.join(out,process.argv.includes('--visuals')?'narrated-visuals.mp4':'hackistan-reel-voiceover.mp4'),onProgress:({progress})=>{const p=Math.floor(progress*100);if(p!==last){last=p;console.log(`Voiceover Reel ${p}%`);}}});
console.log('Narrated Reel rendered. Previous exports preserved.');
