import React from 'react';
import {AbsoluteFill,Sequence,interpolate,spring,useCurrentFrame,useVideoConfig} from 'remotion';
import {Hook,Meet,Create,Opportunities,Join} from './scenes';
import {ProjectsPrototype} from './ProjectsPrototype';
import {scenes} from './config';
import {captions,layerCues,sceneStarts,Cue} from './reel-timing';
import {ReelAudio} from './reel-audio';
import {AttachmentTime} from './attachment-time';
const clamp={extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;
const smooth=(p:number)=>p*p*(3-2*p);
const Layer=({element,cue}:{element:React.ReactElement<any>;cue:Cue})=>{
 const frame=useCurrentFrame();const {fps}=useVideoConfig();const t=frame/fps-cue.at;if(t<0)return null;
 const p=smooth(Math.min(1,t/.7));const settle=spring({frame:Math.max(0,(t-.7)*fps),fps,config:{damping:19,stiffness:160}});
 const isInk=cue.kind==='ink'||cue.kind==='title';const sticker=cue.kind==='sticker';
 const x=Number(element.props.x??0),y=Number(element.props.y??0),w=Number(element.props.w??900);
 const dx=cue.kind==='paper'&&cue.dx?(cue.dx<0?-(x+w+80):1160-x):(cue.dx??0);
 const dy=cue.kind==='paper'&&!cue.dx&&cue.dy?(cue.dy<0?-(y+700):2020-y):(cue.dy??0);
 return <AttachmentTime.Provider value={cue.at+.85}>{React.cloneElement(element,{style:{...element.props.style,translate:isInk?'0 0':`${dx*(1-p)}px ${dy*(1-p)+2*(1-settle)}px`,scale:sticker?interpolate(t,[0,.25,.38,.6],[1.035,1,.989,1],clamp):1,clipPath:isInk?`inset(0 ${cue.kind==='ink'?100*(1-p):0}% ${cue.kind==='title'?100*(1-p):0}% 0)`:sticker?`inset(0 0 ${100*(1-Math.min(1,t/.16))}% 0)`:undefined,filter:isInk?undefined:`drop-shadow(2px ${14*(1-p)}px ${7*(1-p)}px #453d2830)`}})}</AttachmentTime.Provider>;
};
const AnimatedPage=({index}:{index:number})=>{
 const component=({0:Hook,1:Meet,3:Create,4:Opportunities,5:Join} as const)[index as 0|1|3|4|5];
 const tree=component();const nodes=React.Children.toArray(tree.props.children).filter(React.isValidElement) as React.ReactElement<any>[];
 if(nodes.length!==layerCues[index].length)throw Error(`Layer timing mismatch in scene ${index+1}: ${nodes.length}`);
 return React.cloneElement(tree,{},nodes.map((element,i)=><Layer key={i} element={element} cue={layerCues[index][i]}/>));
};
const PageMove=({index,children}:{index:number;children:React.ReactNode})=>{
 const f=useCurrentFrame();const p=smooth(Math.min(1,f/15));const directions=[0,1,-1,1,-1,1];
 return <AbsoluteFill style={{translate:`${index?directions[index]*1080*(1-p):0}px 0`,rotate:`${index?directions[index]*1.3*(1-p):0}deg`,transformOrigin:'50% 50%',boxShadow:'-12px 0 24px #40372335',background:'#f1ecdf'}}>{children}</AbsoluteFill>;
};
const Subtitles=()=>{const f=useCurrentFrame();const c=captions.find(c=>f>=c.from&&f<c.to);return c?<div style={{position:'absolute',left:110,right:150,top:1665,minHeight:108,padding:'14px 22px',background:'#fff8e7',boxShadow:'2px 5px 8px #453d2825',color:'#282b27',fontFamily:'DM Sans',fontSize:36,lineHeight:1.28,textAlign:'center',borderLeft:'5px solid #b94c36'}}>{c.text}</div>:null;};
export const FullReel=()=> <AbsoluteFill style={{background:'#f1ecdf'}}>{scenes.map((s,i)=><Sequence key={s.id} name={s.title} from={sceneStarts[i]*30} durationInFrames={s.seconds*30+(i<5?15:0)}><PageMove index={i}><AbsoluteFill style={{scale:.88,transformOrigin:'50% 0%',top:25}}>{i===2?<ProjectsPrototype/>:<AnimatedPage index={i}/>}</AbsoluteFill></PageMove></Sequence>)}<Subtitles/><ReelAudio/></AbsoluteFill>;
