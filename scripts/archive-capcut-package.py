"""Create one checked, downloadable editing ZIP without adding large binaries to Git."""
from pathlib import Path
import hashlib,zipfile,subprocess,json
r=Path(__file__).resolve().parents[1];folder=r/'output/capcut/Hackistan-CapCut-Editing-Package'
commit=subprocess.check_output(['git','rev-parse','HEAD'],cwd=r,text=True).strip()
(folder/'SOURCE_VERSION.txt').write_text(f'Approved narration/render baseline: ac1453c\nHandoff source commit: {commit}\nBranch: feature/hackistan-intro-reel\nTimeline: 2994 frames at 30 FPS, 99.800 seconds\nNo merge to main.\n')
paths=sorted(p for p in folder.rglob('*') if p.is_file() and p.name!='FILES_SHA256.txt')
(folder/'FILES_SHA256.txt').write_text(''.join(f"{hashlib.sha256(p.read_bytes()).hexdigest()}  {p.relative_to(folder).as_posix()}\n" for p in paths))
archive=folder.parent/'Hackistan-CapCut-Editing-Package.zip'
with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED,compresslevel=6,allowZip64=True) as z:
 for p in sorted(folder.rglob('*')):
  if p.is_file():z.write(p,p.relative_to(folder.parent))
with zipfile.ZipFile(archive) as z:
 assert z.testzip() is None
 print('Verified ZIP entries:',len(z.infolist()))
sha=hashlib.sha256(archive.read_bytes()).hexdigest();archive.with_suffix('.zip.sha256').write_text(f'{sha}  {archive.name}\n')
print(json.dumps({'filename':archive.name,'bytes':archive.stat().st_size,'sha256':sha,'sourceCommit':commit},indent=2))
