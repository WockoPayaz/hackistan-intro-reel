import {bundle} from '@remotion/bundler';
import {getCompositions,renderStill} from '@remotion/renderer';
import sharp from 'sharp';
import {mkdir,writeFile} from 'node:fs/promises';
import path from 'node:path';
const out=path.resolve('../output/storyboards');
await mkdir(out,{recursive:true});
const serveUrl=await bundle({entryPoint:path.resolve('src/index.ts'),publicDir:path.resolve('../public')});
const browserExecutable=process.env.REMOTION_BROWSER_EXECUTABLE || '/usr/bin/chromium';
const compositions=await getCompositions(serveUrl,{browserExecutable});
const selected=compositions.filter(c=>/^0[1-6]-/.test(c.id));
if(selected.length!==6) throw Error('Expected six storyboard pages');
const manifest=[];
for(const c of selected){
 const output=path.join(out,`${c.id}.png`);
 await renderStill({serveUrl,composition:c,output,imageFormat:'png',frame:0,browserExecutable});
 const m=await sharp(output).metadata();
 if(m.width!==1080||m.height!==1920) throw Error('Invalid dimensions');
 manifest.push({id:c.id,width:m.width,height:m.height,file:`${c.id}.png`});
 console.log(`Rendered ${c.id}: ${m.width} × ${m.height}`);
}
const tiles=await Promise.all(selected.map(async(c,i)=>({input:await sharp(path.join(out,`${c.id}.png`)).resize(360,640).toBuffer(),left:30+(i%3)*390,top:110+Math.floor(i/3)*700})));
const title=Buffer.from('<svg width="1200" height="90"><text x="30" y="52" fill="#f3eddf" font-family="sans-serif" font-size="29">HACKISTAN / STORYBOARD A · VISUAL APPROVAL</text><text x="30" y="80" fill="#cfc7b6" font-family="sans-serif" font-size="16">01—06 · 1080 × 1920 originals · Supplied logos, stickers and project media</text></svg>');
await sharp({create:{width:1200,height:1510,channels:4,background:'#30362e'}}).composite([{input:title,top:0,left:0},...tiles]).png().toFile(path.join(out,'contact-sheet.png'));
await writeFile(path.join(out,'render-manifest.json'),JSON.stringify({phase:'A',status:'awaiting approval',renderer:'Remotion 4.0.543',browserExecutable,frames:manifest},null,2)+'\n');
