import {Audio,Sequence,staticFile} from 'remotion';
import voiceover from './voiceover-config.json';
import {foleyMarkers} from './reel-timing';
// All paths are relative to public/. No audio is loaded unless explicitly supplied.
export const audioConfig:{voiceover:string|null;music:string|null;musicVolume:number;foley:Record<string,{file:string;volume:number;durationFrames:number;fromFrame?:number}>}={voiceover:null,music:null,musicVolume:.12,foley:{}};
export const ReelAudio=()=> <>{voiceover.file?<Sequence from={voiceover.fromFrame}><Audio src={staticFile(voiceover.file)} trimBefore={voiceover.trimBeforeFrames} volume={voiceover.volume}/></Sequence>:audioConfig.voiceover?<Audio src={staticFile(audioConfig.voiceover)}/>:null}{audioConfig.music?<Audio src={staticFile(audioConfig.music)} volume={audioConfig.musicVolume}/>:null}{foleyMarkers.map(m=>{const clip=audioConfig.foley[m.id];return clip?<Sequence key={m.id} from={clip.fromFrame??m.frame} durationInFrames={clip.durationFrames}><Audio src={staticFile(clip.file)} volume={clip.volume}/></Sequence>:null;})}</>;
