import {Audio,Sequence,staticFile,useCurrentFrame,interpolate} from 'remotion';
import config from './sfx-cues.json';
type Cue=typeof config.cues[number];
const Clip=({cue}:{cue:Cue})=>{const f=useCurrentFrame();const envelope=interpolate(f,[0,cue.fadeInFrames,cue.durationFrames-cue.fadeOutFrames,cue.durationFrames],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});return <Audio src={staticFile(cue.file)} trimBefore={cue.trimBeforeFrames} useWebAudioApi volume={cue.gain*config.masterGain*envelope}/>;};
export const SfxLayer=()=> <>{config.cues.map(cue=><Sequence key={cue.id} name={cue.id} from={cue.fromFrame} durationInFrames={cue.durationFrames}><Clip cue={cue}/></Sequence>)}</>;
