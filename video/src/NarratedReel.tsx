import {AbsoluteFill,Audio,Sequence,interpolate,staticFile,useCurrentFrame} from 'remotion';
import {AnimatedPage,PageMove} from './FullReel';
import {ProjectsPrototype} from './ProjectsPrototype';
import {NotebookCamera} from './motion';
import {layerCues} from './reel-timing';
import timing from './narration-timing.json';
import captions from './narration-captions.json';
import mix from './narration-audio.json';
import cues from './narration-sfx.json';

// Timestamped narration captions, independently editable from the six visual scenes.
// Approved typography, raised into a safer mobile overlay area.
export const CaptionCard=({text}:{text:string})=>text?<div style={{position:'absolute',left:110,right:150,top:1555,minHeight:108,padding:'14px 22px',background:'#fff8e7',boxShadow:'2px 5px 8px #453d2825',color:'#282b27',fontFamily:'DM Sans',fontSize:36,lineHeight:1.28,textAlign:'center',borderLeft:'5px solid #b94c36'}}>{text}</div>:null;
const NarratedCaptions=()=>{
 const ms=useCurrentFrame()/30*1000;
 const caption=(captions as {text:string;startMs:number;endMs:number}[]).find(c=>ms>=c.startMs&&ms<c.endMs);
 return <CaptionCard text={caption?.text??''}/>;
};
const FoleyClip=({cue}:{cue:typeof cues[number]})=>{
 const f=useCurrentFrame();
 const envelope=interpolate(f,[0,cue.fadeInFrames,cue.durationFrames-cue.fadeOutFrames,cue.durationFrames],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 return <Audio src={staticFile(cue.file)} trimBefore={cue.trimBeforeFrames} playbackRate={cue.playbackRate} preservePitch={false} useWebAudioApi volume={cue.gain*mix.sfxMasterGain*cue.narrationGain*envelope}/>;
};
export const NarratedAudio=()=> <>
 <Sequence name="Recorded voiceover — original speed" from={0}><Audio src={staticFile(mix.voiceoverFile)} volume={mix.voiceoverGain}/></Sequence>
 {cues.map(cue=><Sequence key={cue.id} name={cue.id} from={cue.fromFrame} durationInFrames={cue.durationFrames}><FoleyClip cue={cue}/></Sequence>)}
</>;
export const NarratedVisuals=()=> <AbsoluteFill style={{background:'#f1ecdf'}}>
 {timing.scenes.map((scene,index)=><Sequence key={scene.id} name={scene.title} from={scene.fromFrame} durationInFrames={scene.durationFrames+(index<5?15:0)}>
  <PageMove index={index}><AbsoluteFill style={{scale:.88,transformOrigin:'50% 0%',top:25}}>
   {index===2?<ProjectsPrototype timing={timing.projects} camera={scene.camera}/>:<NotebookCamera track={scene.camera}><AnimatedPage index={index} cues={layerCues[index].map(cue=>({...cue,at:(scene.layers as Record<string,number>)[cue.name]}))}/></NotebookCamera>}
  </AbsoluteFill></PageMove>
 </Sequence>)}
</AbsoluteFill>;
export const NarratedReel=()=> <AbsoluteFill><NarratedVisuals/><NarratedCaptions/><NarratedAudio/></AbsoluteFill>;
