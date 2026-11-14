import {scenes} from './config';
export const fps=30;
export const sceneStarts=scenes.map((_,i)=>scenes.slice(0,i).reduce((n,s)=>n+s.seconds,0));
export type Cue={at:number;kind:'paper'|'ink'|'sticker'|'title';name:string;dx?:number;dy?:number};
const c=(at:number,kind:Cue['kind'],name:string,dx=0,dy=0):Cue=>({at,kind,name,dx,dy});
// One cue per authored scrapbook layer. Values are seconds relative to the scene.
export const layerCues:Record<number,Cue[]>={
0:[c(.3,'ink','opening-note'),c(.5,'paper','headline-paper',-300,0),c(1.4,'paper','headline-washi'),c(.9,'title','hook'),c(2.1,'ink','quetta-mountains'),c(3.7,'paper','quetta-label',120,35),c(4.8,'ink','location'),c(5.2,'paper','hackistan-mark',0,45)],
1:[c(.6,'ink','meet-note'),c(.7,'paper','logo-backing',220,0),c(1,'paper','logo-paper',0,-240),c(2,'paper','paperclip',0,-70),c(2.5,'paper','student-led-note',-180,20),c(3.9,'paper','community-letter',0,150),c(5.1,'paper','hack-club-flag',-100,0),c(5.7,'ink','community-note')],
3:[c(.5,'title','create-heading'),c(1,'ink','curiosity-note'),c(1.6,'paper','coding-note',-280,0),c(2.7,'paper','web-note',260,0),c(3.9,'paper','game-note',-220,40),c(4.9,'sticker','game-lab',10,-35),c(5.2,'paper','cad-note',200,-40),c(6.3,'paper','pcb-note',-180,45),c(7.4,'paper','printing-note',160,50),c(7.5,'sticker','pcb-orpheus',20,-45),c(8.4,'ink','idea-arrow'),c(9.5,'ink','start-with-one')],
4:[c(.5,'title','opportunities-heading'),c(1.1,'ink','heading-underline'),c(1.5,'paper','workshop-checklist',-240,0),c(2.6,'sticker','construct-orpheus',30,-50),c(3.7,'paper','programs-paper',0,140),c(5.1,'paper','portfolio-note',-150,-30),c(6.4,'paper','eligible-rewards',130,-40),c(7.7,'ink','save-share-checklist'),c(8.4,'sticker','ship',15,-45),c(9.4,'ink','make-and-share')],
5:[c(.5,'ink','expert-note'),c(.7,'paper','closing-backing',-150,30),c(1,'paper','closing-logo',100,-70),c(2.2,'title','next-build-message'),c(3.6,'ink','bring-an-idea'),c(4.4,'paper','cta-reveal',-340,0),c(5.3,'ink','link-in-bio'),c(5.7,'paper','project-callback',-90,60),c(6.6,'sticker','yippee',20,-40)]};
export const foleyMarkers=[
 ...sceneStarts.slice(1).map((t,i)=>({id:`scene-${i+2}.page-turn`,kind:'page-turn',frame:Math.round(t*fps),durationFrames:15})),
 ...Object.entries(layerCues).flatMap(([scene,cues])=>cues.flatMap(q=>{
 const start=sceneStarts[Number(scene)]+q.at;const id=`scene-${Number(scene)+1}.${q.name}`;
 return [{id,kind:q.kind==='ink'?'pencil-drawing':q.kind==='sticker'?'sticker-place':q.name==='cta-reveal'?'cta-reveal':'paper-movement',frame:Math.round(start*fps),durationFrames:q.kind==='ink'?24:18},...(['headline-washi','quetta-label','logo-paper','community-letter','coding-note','web-note','pcb-note','workshop-checklist','programs-paper','closing-logo','project-callback'].includes(q.name)?[{id:id+'.land',kind:q.name==='project-callback'?'photo-land':'paper-land',frame:Math.round((start+.7)*fps),durationFrames:6},{id:id+'.tape-peel',kind:'tape-peel',frame:Math.round((start+.85)*fps),durationFrames:8},{id:id+'.tape-stick',kind:'tape-stick',frame:Math.round((start+1.25)*fps),durationFrames:6}]:[])];
 })),
 ...[['boba',.7,1.65],['bake',3.35,4.3],['jame',6.2,7.15]].flatMap(([name,at,tape])=>[{id:`scene-3.${name}.move`,kind:'paper-movement',frame:Math.round((15+Number(at))*fps),durationFrames:22},{id:`scene-3.${name}.land`,kind:'photo-land',frame:Math.round((15+Number(at)+.72)*fps),durationFrames:7},{id:`scene-3.${name}.tape-peel`,kind:'tape-peel',frame:Math.round((15+Number(tape))*fps),durationFrames:10},{id:`scene-3.${name}.tape-stick`,kind:'tape-stick',frame:Math.round((15+Number(tape)+.48)*fps),durationFrames:5}]),
 ...[['boba-sticker',2.45,'sticker-place'],['godot',7.95,'sticker-place'],['cad-writing',4.85,'pencil-drawing'],['cad-arrow',5.65,'pencil-drawing'],['footer',9.5,'pencil-drawing']].map(([name,t,kind])=>({id:`scene-3.${name}`,kind:String(kind),frame:Math.round((15+Number(t))*fps),durationFrames:20}))
].sort((a,b)=>a.frame-b.frame);
// Phrase timings follow the visual beats; verify against supplied voiceover later.
const phrases=[
[[0,"What if you could build something real,"],[3.6,"right here in Quetta?"]],
[[0,"Meet Hackistan:"],[1.5,"a student-led Hack Club in Quetta,"],[3.5,"connecting teenagers through making things,"],[6,"not just learning about them."]],
[[0,"A real website."],[3.35,"Cookie cutters designed in CAD."],[6.2,"And a video game our team actually made."],[10.5,"Real projects, built right here."]],
[[0,"From coding and websites"],[3.4,"to game development,"],[5.8,"3D printing, PCB design, and CAD —"],[8,"there's room to experiment, make mistakes,"],[10.2,"and create something of your own."]],
[[0,"Join hands-on workshops"],[3.7,"or build independently through Hack Club programs."],[6,"Along the way, learn useful skills,"],[7.6,"grow your portfolio,"],[9.2,"and explore eligible rewards and grants."]],
[[0,"You don't need to be an expert."],[2,"Just bring an idea."],[3.7,"The next thing we build could be yours."],[6.4,"Join Hackistan."]],
] as const;
export const captions=phrases.flatMap((group,i)=>group.map(([at,text],j)=>({from:Math.round((sceneStarts[i]+at)*fps),to:Math.round((sceneStarts[i]+(group[j+1]?.[0]??scenes[i].seconds))*fps),text})));
