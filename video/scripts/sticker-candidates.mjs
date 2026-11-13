import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';
const base=path.resolve('../public/assets');
const candidates=[
 ['Orpheus and Heidi Laptops','stickers/Orpheus and Heidi Laptops.webp','04 · coding / web'],
 ['Godot Juice','stickers/Godot Juice.webp','03 / 04 · games'],
 ['Boba Drops','stickers/Boba Drops.webp','03 · website'],
 ['Soldering','stickers/Soldering.webp','04 · electronics'],
 ['Orpheus Skateboarding PCB',null,'04 · PCB alternative'],
 ['Construct Orpheus',null,'04 · physical making'],
 ['Journpheus','stickers/Journpheus.webp','05 · project notebook'],
 ['Ship','stickers/ship.webp','05 · share checklist'],
 ['Orphmoji Yippee','stickers/orphmoji yippee.webp','06 · familiar character'],
 ['Orpheus Flag','stickers/flag-orpheus-left.png','02 · flag alternative'],
 ['Game Lab',null,'04 · game alternative'],
 ['Coding with Balloon',null,'04 · coding alternative'],
 ['Nest Hatched Smolpheus','stickers/Nest Hatched Smolpheus.webp','06 · optional beginner motif'],
 ['Pathfinder Orpheus','stickers/Pathfinder Orpheus.png','05 · optional exploration motif'],
];
const out=path.resolve('../output/stickers');await fs.mkdir(out,{recursive:true});
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;');
const parts=[];const rows=[];
for(let i=0;i<candidates.length;i++){
 const [name,file,scene]=candidates[i];const left=25+(i%4)*360,top=130+Math.floor(i/4)*350;
 const heading=Buffer.from(`<svg width="345" height="70"><text x="12" y="24" font-family="sans-serif" font-size="16" font-weight="bold">${esc(name)}</text><text x="12" y="49" font-family="sans-serif" font-size="15" fill="#716657">${esc(scene)}</text></svg>`);
 parts.push({input:heading,left,top:top+250});
 let row={name,scene,file:file?`public/assets/${file}`:null,catalogUrl:'https://stickers.hackclub.com/catalog',downloadUrl:null,status:file?'user-supplied; catalog verification pending':'awaiting catalog access or manual download',permission:'Artwork reuse terms not yet verified; confirm before public release.'};
 if(file){const bytes=await fs.readFile(path.join(base,file));const m=await sharp(bytes).metadata();parts.push({input:await sharp(bytes).resize({width:300,height:220,fit:'inside'}).extend({top:0,bottom:0,left:0,right:0}).png().toBuffer(),left:left+20,top:top+10});row={...row,width:m.width,height:m.height,hasAlpha:m.hasAlpha,sha256:crypto.createHash('sha256').update(bytes).digest('hex')};}
 else parts.push({input:Buffer.from('<svg width="320" height="230"><rect x="10" y="10" width="295" height="205" fill="none" stroke="#a59b89" stroke-dasharray="7 5"/><text x="30" y="100" font-family="sans-serif" font-size="20" fill="#706957">ARTWORK NOT FETCHED</text><text x="30" y="135" font-family="sans-serif" font-size="16" fill="#706957">Catalog access pending</text></svg>'),left,top});
 rows.push(row);
}
const title=Buffer.from('<svg width="1480" height="120"><text x="30" y="45" font-family="sans-serif" font-size="31" fill="#292d26">HACKISTAN · STICKER CURATION / 14 OPTIONS</text><text x="30" y="80" font-family="sans-serif" font-size="20" fill="#7b4937">10 existing supplied originals · 4 awaiting catalog access · 0 new downloads</text><text x="30" y="108" font-family="sans-serif" font-size="16" fill="#706957">Review sheet, not an instruction to place all candidates. Original artwork preserved.</text></svg>');
await sharp({create:{width:1480,height:1560,channels:4,background:'#f1ecdf'}}).composite([{input:title,left:0,top:0},...parts]).png().toFile(path.join(out,'candidate-sheet.png'));
await fs.writeFile(path.join(out,'candidates.json'),JSON.stringify({newDownloads:0,candidates:rows},null,2)+'\n');
console.log('14 candidates: 10 supplied images, 4 clearly labeled unavailable slots; no new downloads.');
