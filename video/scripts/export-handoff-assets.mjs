import {bundle} from '@remotion/bundler';
import {selectComposition,renderStill} from '@remotion/renderer';
import fs from 'node:fs';import path from 'node:path';import sharp from 'sharp';
const out=path.resolve('../output/capcut/Hackistan-CapCut-Editing-Package/03_visual_assets');fs.mkdirSync(out,{recursive:true});
const catalog=JSON.parse(fs.readFileSync('src/handoff-assets.json','utf8'));const manifest=[];
const serveUrl=await bundle({entryPoint:path.resolve('src/index.ts'),publicDir:path.resolve('../public')});const browserExecutable='/usr/bin/chromium';
const composition=await selectComposition({serveUrl,id:'HandoffAsset',browserExecutable});
const jobs=[];
catalog.layers.forEach((layers,scene)=>layers.forEach((name,layer)=>jobs.push({file:`04_scene_layers/scene-${scene+1}/${String(layer+1).padStart(2,'0')}-${name}.png`,props:{kind:'layer',scene,layer},scale:2,trim:true})));
catalog.materials.forEach(name=>jobs.push({file:`05_materials/${name}.png`,props:{kind:'material',name},scale:2,trim:true}));
for(let scene=0;scene<6;scene++)jobs.push({file:`06_notebook_pages/page-${scene+1}.png`,props:{kind:'page',scene},scale:1,trim:false});
let n=0;
for(const job of jobs){
 const file=path.join(out,job.file);fs.mkdirSync(path.dirname(file),{recursive:true});const props={kind:'material',scene:0,layer:0,name:'masking-tape',...job.props};
 const buffer=await renderStill({serveUrl,composition:{...composition,props},inputProps:props,frame:0,imageFormat:'png',scale:job.scale,browserExecutable});
 const image=sharp(buffer.buffer);const {data,info}=await (job.trim?image.trim({background:'#00000000',threshold:1}):image).png().toBuffer({resolveWithObject:true});
 fs.writeFileSync(file,data);manifest.push({file:job.file,width:info.width,height:info.height,exportScale:job.scale,transparentOverlay:job.trim,originalPageX:-(info.trimOffsetLeft??0)/job.scale,originalPageY:-(info.trimOffsetTop??0)/job.scale,source:'Existing Remotion components',...job.props});
 if(++n%10===0)console.log(`Rendered ${n}/${jobs.length} original artwork exports`);
}
for(const [dir,dest] of [['branding','01_branding'],['stickers','02_stickers'],['projects','03_projects']]){
 for(const name of fs.readdirSync(path.resolve('../public/assets',dir))){
  const src=path.resolve('../public/assets',dir,name);if(!fs.statSync(src).isFile()||!name.match(/\.(png|webp|svg|jpe?g)$/i))continue;
  const target=path.join(out,dest);fs.mkdirSync(target,{recursive:true});
  if(name.endsWith('.svg'))fs.copyFileSync(src,path.join(target,name));
  const file=path.join(target,name.replace(/\.[^.]+$/,'.png'));
  await sharp(src,name.endsWith('.svg')?{density:288}:{}).png().toFile(file);
  const meta=await sharp(file).metadata(),stats=await sharp(file).stats();
  manifest.push({file:path.relative(out,file),source:path.relative(path.resolve('..'),src),width:meta.width,height:meta.height,transparentOverlay:!!meta.hasAlpha&&!stats.isOpaque,note:stats.isOpaque?'Original supplied opaque image; no background was invented or removed.':'Original transparency preserved.'});
 }
}
for(const [name,w,h] of [['boba',630,250],['bake',540,265],['jame',660,250]]){
 const height=h+126;const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${w+40}" height="${height+40}" viewBox="-20 -20 ${w+40} ${height+40}"><defs><filter id="shadow" x="-20%" y="-20%" width="150%" height="150%"><feDropShadow dx="2" dy="8" stdDeviation="5.5" flood-color="#3b3322" flood-opacity=".10"/></filter></defs><path fill="#fffaf0" fill-rule="evenodd" filter="url(#shadow)" d="M0 0H${w}V${height}H0Z M20 20V${h+20}H${w-20}V20Z"/></svg>`;
 const file=`05_materials/polaroid-frame-${name}`;fs.writeFileSync(path.join(out,file+'.svg'),svg);await sharp(Buffer.from(svg),{density:144}).png().toFile(path.join(out,file+'.png'));manifest.push({file:file+'.png',svg:file+'.svg',transparentOverlay:true,note:'Empty Polaroid window, derived from the existing 20px margin and ivory paper treatment; no project image baked into the frame.'});
}
fs.writeFileSync(path.join(out,'asset-manifest.json'),JSON.stringify(manifest,null,2)+'\n');console.log(`Exported ${manifest.length} labeled assets.`);
