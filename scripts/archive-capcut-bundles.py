"""Ordinary standalone ZIP bundles below GitHub's per-file repository limit."""
from pathlib import Path
import zipfile,hashlib,json
r=Path(__file__).resolve().parents[1];folder=r/'output/capcut/Hackistan-CapCut-Editing-Package';dest=r/'output/capcut/bundles';dest.mkdir(exist_ok=True)
sets=[('01_Captioned_Master','Captioned master',lambda p:p.parts[0]=='01_full_reel' and p.name.startswith('01_')),
 ('02_Caption_Free_Master','Caption-free master with VO + SFX',lambda p:p.parts[0]=='01_full_reel' and p.name.startswith('02_')),
 ('03_Animated_Scene_Clips','Six silent scene clips',lambda p:p.parts[0]=='04_scene_clips'),
 ('04_Audio_Artwork_Captions_Source','WAV stems, artwork, captions, fonts and source',lambda p:p.parts[0] not in ['01_full_reel','04_scene_clips'] and len(p.parts)>1)]
common=['00_START_HERE.md','SOURCE_VERSION.txt','VALIDATION.json']
rows=[]
for name,label,select in sets:
 paths=[p for p in sorted(folder.rglob('*')) if p.is_file() and select(p.relative_to(folder))]
 paths += [folder/p for p in common]
 sha=''.join(f'{hashlib.sha256(p.read_bytes()).hexdigest()}  {p.relative_to(folder).as_posix()}\n' for p in paths)
 archive=dest/(name+'.zip');root='Hackistan-'+name
 with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED,compresslevel=6) as z:
  for p in paths:z.write(p,Path(root)/p.relative_to(folder))
  z.writestr(root+'/FILES_SHA256.txt',sha)
 with zipfile.ZipFile(archive) as z:assert z.testzip() is None
 assert archive.stat().st_size<100*1024*1024
 rows.append({'file':archive.name,'label':label,'bytes':archive.stat().st_size,'sha256':hashlib.sha256(archive.read_bytes()).hexdigest()})
 print(archive.name,archive.stat().st_size,flush=True)
(r/'output/capcut/downloads.json').write_text(json.dumps(rows,indent=2)+'\n')
lines=['# CapCut editing package','','Download **all four ZIPs** for the complete handoff. Each is a normal, independent ZIP: extract them and keep the folders separate if convenient. No command line or archive joining is needed. Each bundle includes `00_START_HERE.md`.','', '| Download | Size |','|---|---:|']
for row in rows:
 url='https://github.com/WockoPayaz/hackistan-intro-reel/raw/refs/heads/feature/hackistan-intro-reel/output/capcut/bundles/'+row['file']
 lines.append(f"| [{row['label']}]({url}) | {row['bytes']/1e6:.1f} MB |")
lines += ['','[CapCut import guide](../../docs/CAPCUT_HANDOFF.md) · [Artwork preview](ASSET_PREVIEW.png) · [Asset manifest](asset-manifest.json) · [Checksums](downloads.json)','','Includes both 1080×1920 / 30 FPS masters, two aligned 99.8-second WAV stems, six exact-frame clips, 112 visual assets (102 transparent overlays), full and scene-local SRTs, transcript, timing/cue sheets, fonts/licenses and the editable source snapshot.','','The captioned master is byte-identical to the approved file. The caption-free master copies the existing animation video and mixed audio packets. Scene clips total 2,994 frames and reconstruct the existing animation with SSIM 0.997779 after exact-cut encoding. Both stems start at zero; their sum matches the existing lossless mix within one 24-bit quantization step. [Validation](validation.json).','','GitHub release-asset uploads returned an authentication error, so these verified bundles are hosted directly on the feature branch. Original sources and full renders remain intact. No merge to main. This is an importable media handoff, not a native CapCut project.']
(r/'output/capcut/README.md').write_text('\n'.join(lines)+'\n')
