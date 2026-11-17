"""Assemble the editing guide, fonts, source snapshot, checksums and download archive."""
from pathlib import Path
import json,shutil,csv,hashlib,subprocess,zipfile
from fontTools.ttLib import TTFont
r=Path(__file__).resolve().parents[1];out=r/'output/capcut/Hackistan-CapCut-Editing-Package'
fonts=out/'06_fonts_and_licenses';fonts.mkdir(exist_ok=True)
for family,weight in [('barlow-condensed',800),('kalam',400),('dm-sans',500)]:
 src=r/'video/node_modules/@fontsource'/family
 font=TTFont(src/'files'/f'{family}-latin-{weight}-normal.woff2');font.flavor=None;font.save(fonts/f'{family}-{weight}.ttf')
 shutil.copy2(src/'LICENSE',fonts/f'{family}-OFL.txt')
for name in ['SFX_CATALOG.md','SFX_INVENTORY.json','STICKER_CURATION.md']:shutil.copy2(r/'docs'/name,fonts/name)
# Keep relative source/license links useful within the source snapshot.
src=out/'07_remotion_source'
for dirname in ['video/src','video/scripts','public','scripts','docs']:
 shutil.copytree(r/dirname,src/dirname,dirs_exist_ok=True,ignore=shutil.ignore_patterns('__pycache__'))
for name in ['video/package.json','video/package-lock.json','video/tsconfig.json']:
 shutil.copy2(r/name,src/name)
(src/'README.md').write_text('''# Editable Remotion source snapshot

This contains the existing six scenes, original uploaded assets, recorded voiceover, Foley sources, timing configuration and export tools. No node_modules or render caches are bundled. The complete current renders are in ../01_full_reel/. Previous renders remain in the feature branch repository.

Preview/render composition: `HackistanReelVoiceover`. Runtime dependencies are pinned in video/package-lock.json. The original HackistanReel and HackistanReelSfx compositions retain the 60-second versions. The export-only HandoffAsset still does not change any video composition.

An agent or developer can install dependencies in video/ and run `npm run studio` or `npm run voiceover`. CapCut editing does not require running any of these commands.
''')
# Original timeline evidence for reproducibility of transcript and audio edits.
for p in (r/'output/voiceover').iterdir():
 if p.suffix in ['.json','.csv','.srt','.md','.txt'] and p.name!='caption-concat.txt':
  dest=src/'output/voiceover'/p.name;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,dest)
scenes=json.loads((out/'05_captions_and_timing/scene-boundaries.json').read_text());caps=json.loads((r/'video/src/narration-captions.json').read_text())
def tc(frame):
 sec,f=divmod(frame,30);m,s=divmod(sec,60);h,m=divmod(m,60);return f'{h:02}:{m:02}:{s:02}:{f:02}'
def srt(ms):
 h,ms=divmod(ms,3600000);m,ms=divmod(ms,60000);s,ms=divmod(ms,1000);return f'{h:02}:{m:02}:{s:02},{ms:03}'
rows=[]
for sc in scenes:
 rows.append(dict(sc,startTimecode=tc(sc['startFrame']),endTimecodeExclusive=tc(sc['endFrameExclusive'])))
 selected=[];start=round(sc['startSeconds']*1000);end=round(sc['endSeconds']*1000)
 for c in caps:
  a=max(start,c['startMs']);b=min(end,c['endMs'])
  if a<b:selected.append((a-start,b-start,c['text']))
 (out/'05_captions_and_timing'/f"scene-{sc['scene']:02}-local-captions.srt").write_text('\n'.join(f'{i+1}\n{srt(a)} --> {srt(b)}\n{text}\n' for i,(a,b,text) in enumerate(selected)))
with (out/'05_captions_and_timing/scene-boundaries.csv').open('w') as f:
 w=csv.DictWriter(f,fieldnames=list(rows[0]),lineterminator='\n');w.writeheader();w.writerows(rows)
# Build README separately to keep the main guide easy to update.
shutil.copy2(r/'docs/CAPCUT_HANDOFF.md',out/'00_START_HERE.md')
(out/'06_fonts_and_licenses/README.md').write_text('''Fonts are the exact Latin faces used in the Reel, decompressed from the installed WOFF2 files into desktop-installable TTF format. Glyphs and typography are unchanged. Their SIL Open Font Licenses are included. Install the TTFs with your operating system and restart CapCut if necessary.

Branding, stickers and screenshots are supplied project assets, not newly generated artwork. Original images remain in 07_remotion_source/public/assets/. PNG conversions preserve original pixels and transparency. The supplied Orpheus and Heidi Laptops illustration has an opaque background and is marked as such in the asset manifest; it is not used in the current Reel. All other sticker overlay exports retain supplied alpha. Full notebook backgrounds and project screenshots are intentionally opaque.

Foley source provenance and CC0 licenses are in SFX_CATALOG.md and SFX_INVENTORY.json. For working relative source links, open the copies in 07_remotion_source/docs/.
''')
print('Source snapshot, desktop fonts, licenses, scene SRTs and guide assembled.')
