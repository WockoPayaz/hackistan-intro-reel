// Cache caption artwork so correcting a word never rerenders the notebook.
import {bundle} from '@remotion/bundler';
import {selectComposition,renderStill} from '@remotion/renderer';
import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';
const out=path.resolve('../output/voiceover');const dir=path.join(out,'caption-cards');fs.mkdirSync(dir,{recursive:true});
const captions=JSON.parse(fs.readFileSync('src/narration-captions.json','utf8'));
const edits=JSON.parse(fs.readFileSync(path.join(out,'transcript-corrections.json'),'utf8'));
if(edits.some(e=>!e.confirmed))throw Error('Resolve speaker wording before final caption export.');
const serveUrl=await bundle({entryPoint:path.resolve('src/index.ts'),publicDir:path.resolve('../public')});const browserExecutable='/usr/bin/chromium';
const composition=await selectComposition({serveUrl,id:'NarrationCaption',browserExecutable});
const cardFile=(text)=>path.join(dir,crypto.createHash('sha256').update('caption-v2-top1555|'+text).digest('hex').slice(0,16)+'.png');
for(const text of [...new Set(['',...captions.map(c=>c.text)])]){
 const output=cardFile(text);if(!fs.existsSync(output))await renderStill({serveUrl,composition:{...composition,props:{text}},inputProps:{text},frame:0,output,imageFormat:'png',browserExecutable});
}
const frames=JSON.parse(fs.readFileSync('src/narration-timing.json','utf8')).durationFrames;
const spans=[];let cursor=0;
for(const c of captions){const from=Math.ceil(c.startMs*30/1000),to=Math.ceil(c.endMs*30/1000);if(from>cursor)spans.push({fromFrame:cursor,toFrame:from,file:path.relative(out,cardFile(''))});spans.push({fromFrame:from,toFrame:to,file:path.relative(out,cardFile(c.text)),text:c.text});cursor=to;}
if(cursor<frames)spans.push({fromFrame:cursor,toFrame:frames,file:path.relative(out,cardFile(''))});
fs.writeFileSync(path.join(out,'caption-spans.json'),JSON.stringify(spans,null,2)+'\n');
console.log(`Rendered/cached ${captions.length} caption cards with exact 30 FPS spans.`);
