import {Box,Hand,NotebookPage,PolaroidCard,Sticker,red} from './components';
import {Scrap,Washi,colors} from './collage';
import {Place,TapeApply,Reveal,DrawRoute,NotebookCamera} from './motion';
// Revision 3 geometry and artwork. Only this scene is authorized for animation.
export const projectTiming={boba:1.15,bobaTape:2.25,bobaSticker:2.9,backing:3.5,bake:3.8,bakeTape:4.9,annotation:5.45,arrow:6.1,jame:6.7,jameTape:7.8,godot:8.4,footer:9.05} as const;
export const ProjectsPrototype=()=> <NotebookCamera><NotebookPage n={3}>
<Box x={96} y={267} w={810}><div className="display" style={{fontSize:109}}><Reveal at={.3} duration={.5}>LESS TALK.</Reveal><Reveal at={.65} duration={.6}><span style={{color:red}}>MORE MAKING.</span></Reveal></div></Box>
<Place at={projectTiming.boba} x={110} y={497} w={630} rotate={-4} dx={-920} dy={20} tilt={6}><PolaroidCard asset="boba" title="01 / Boba Drops" caption="A member-made website" height={250} tape={false}/><TapeApply at={projectTiming.bobaTape}/></Place>
<Place at={projectTiming.bobaSticker} x={635} y={710} w={145} rotate={12} dx={32} dy={-65} tilt={-5}><Sticker asset="bobaSticker" label="Boba Drops sticker" height={190}/></Place>
<Place at={projectTiming.backing} x={360} y={882} w={570} rotate={-4} dx={850} dy={35} tilt={-3}><Scrap color={colors.blue} pattern="grid" height={414}/></Place>
<Place at={projectTiming.bake} x={385} y={896} w={540} rotate={4} dx={850} dy={-35} tilt={-7}><PolaroidCard asset="bake" title="02 / BakeBuild" caption="" height={265} tape={false}/><TapeApply at={projectTiming.bakeTape}/></Place>
<Box x={760} y={895} w={160} rotate={14}><Reveal at={5.2} duration={.4}><div style={{height:50}}><Washi w={150} color={colors.blue} pattern="check"/></div></Reveal></Box>
<Box x={104} y={1010} w={275} rotate={-5}><Reveal at={projectTiming.annotation} duration={.5}><Hand size={36}>CAD-designed</Hand></Reveal><Reveal at={5.8} duration={.45}><Hand size={36}>cookie cutters</Hand></Reveal><DrawRoute at={projectTiming.arrow}/></Box>
<Place at={projectTiming.jame} x={105} y={1270} w={660} rotate={-3} dx={-920} dy={80} tilt={5}><PolaroidCard asset="jame" title="03 / Jame Gam" caption="A game made by our team" height={250} tape={false}/><TapeApply at={projectTiming.jameTape}/></Place>
<Place at={projectTiming.godot} x={700} y={1435} w={130} rotate={8} dx={35} dy={-65} tilt={-4}><Sticker asset="godot" label="Godot Juice" height={175}/></Place>
<Box x={155} y={1690}><Reveal at={projectTiming.footer} duration={.8}><Hand size={35} color={red}>Built by teenagers in Quetta.</Hand></Reveal></Box>
</NotebookPage></NotebookCamera>;
