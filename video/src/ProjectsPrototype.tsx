import {Box,NotebookPage,PolaroidCard,Sticker,red} from './components';
import {Scrap,Washi,colors} from './collage';
import {Place,TapeApply,Reveal,DrawRoute,NotebookCamera,HandWrite} from './motion';
// Approved Revision 3 geometry. Timing and camera can be authored per narration.
export const projectTiming={boba:.7,bobaTape:1.65,bobaSticker:2.45,backing:3.1,bake:3.35,bakeTape:4.3,annotation:4.85,arrow:5.65,jame:6.2,jameTape:7.15,godot:7.95,footer:9.5} as const;
export type ProjectTiming={ [K in keyof typeof projectTiming]:number };
export const ProjectsPrototype=({timing=projectTiming,camera}:{timing?:ProjectTiming;camera?:import("./motion").CameraTrack})=> <NotebookCamera track={camera}><NotebookPage n={3}>
<Box x={96} y={267} w={810}><div className="display" style={{fontSize:109}}><Reveal at={.3} duration={.5}>LESS TALK.</Reveal><Reveal at={.65} duration={.6}><span style={{color:red}}>MORE MAKING.</span></Reveal></div></Box>
<Place at={timing.boba} x={110} y={497} w={630} rotate={-4} dx={-920} dy={-70} tilt={6}><PolaroidCard asset="boba" title="01 / Boba Drops" caption="A member-made website" height={250} tape={false}/><TapeApply at={timing.bobaTape}/></Place>
<Place kind="sticker" at={timing.bobaSticker} x={635} y={710} w={145} rotate={12} dx={32} dy={-65} tilt={-5}><Sticker asset="bobaSticker" label="Boba Drops sticker" height={190}/></Place>
<Place at={timing.backing} x={360} y={882} w={570} rotate={-4} dx={850} dy={35} tilt={-3}><Scrap color={colors.blue} pattern="grid" height={414}/></Place>
<Place at={timing.bake} x={385} y={896} w={540} rotate={4} dx={800} dy={-110} tilt={-7}><PolaroidCard asset="bake" title="02 / BakeBuild" caption="" height={265} tape={false}/><TapeApply at={timing.bakeTape}/></Place>
<Box x={760} y={895} w={160} rotate={14}><Reveal at={timing.bakeTape+.35} duration={.4}><div style={{height:50}}><Washi w={150} color={colors.blue} pattern="check"/></div></Reveal></Box>
<Box x={104} y={1010} w={275} rotate={-5}><HandWrite at={timing.annotation} duration={.5} text="CAD-designed"/><HandWrite at={timing.annotation+.4} duration={.5} text="cookie cutters"/><DrawRoute at={timing.arrow}/></Box>
<Place at={timing.jame} x={105} y={1270} w={660} rotate={-3} dx={-920} dy={80} tilt={5}><PolaroidCard asset="jame" title="03 / Jame Gam" caption="A game made by our team" height={250} tape={false}/><TapeApply at={timing.jameTape}/></Place>
<Place kind="sticker" at={timing.godot} x={700} y={1435} w={130} rotate={8} dx={35} dy={-65} tilt={-4}><Sticker asset="godot" label="Godot Juice" height={175}/></Place>
<Box x={155} y={1690}><HandWrite at={timing.footer} duration={.85} text="Built by teenagers in Quetta." w={650} size={35} color={red}/></Box>
</NotebookPage></NotebookCamera>;
