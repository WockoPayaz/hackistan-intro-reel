import React, {useId} from 'react';
import {AbsoluteFill,Easing,interpolate,spring,useCurrentFrame,useVideoConfig} from 'remotion';
import {Box,Tape,ink} from './components';
const clamp={extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;
export const progress=(frame:number,start:number,duration:number)=>interpolate(frame,[start,start+duration],[0,1],clamp);
const smooth=(p:number)=>p*p*p*(p*(p*6-15)+10);
// Separate the carried approach from the much smaller, damped contact correction.
export const Place=({at,x,y,w,rotate=0,dx=0,dy=-150,tilt=4,children,kind='paper'}:{at:number;x:number;y:number;w:number;rotate?:number;dx?:number;dy?:number;tilt?:number;children:React.ReactNode;kind?:'paper'|'sticker'})=>{
 const frame=useCurrentFrame();const {fps}=useVideoConfig();const t=frame/fps-at;
 if(t<0)return null;
 const sticker=kind==='sticker';const travel=sticker?.28:.72;
 const p=Easing.bezier(.25,.04,.22,1)(progress(t,0,travel));
 const settle=spring({frame:Math.max(0,(t-travel)*fps),fps,config:{mass:.8,damping:17,stiffness:180}});
 const contact=t<travel?1:1-settle;
 const lift=t<travel?1-p:0;
 const press=sticker?interpolate(t,[0,.28,.38,.58],[1.035,1,.989,1],clamp):1;
 return <Box x={x} y={y} w={w} rotate={rotate} style={{translate:`${dx*(1-p)+2*contact+cameraValue(frame/fps,cameraX)*.012}px ${dy*(1-p)+3*contact+cameraValue(frame/fps,cameraY)*.006}px`,rotate:`${rotate+tilt*(1-p)+.7*contact}deg`,scale:press,filter:`drop-shadow(${2+6*lift}px ${2+20*lift}px ${1+10*lift}px #453d2830)`,clipPath:sticker?`inset(0 0 ${100*(1-progress(t,0,.16))}% 0)`:undefined}}>{children}</Box>;
};
// Adhesive unfurls from an anchored left end, then the raised edge is pressed flat.
export const TapeApply=({at,x=80,y=-24}:{at:number;x?:number;y?:number})=>{
 const f=useCurrentFrame();const {fps}=useVideoConfig();const p=progress(f,at*fps,.48*fps);
 if(p===0)return null;
 return <div style={{position:'absolute',left:x,top:y,width:176,height:64,scale:`${.03+.97*smooth(p)} 1`,translate:`0 ${-7*(1-p)}px`,rotate:`${-5*(1-p)}deg`,transformOrigin:'left center',filter:`drop-shadow(0 ${8*(1-p)}px ${4*(1-p)}px #453d2840)`}}><Tape x={0} y={0}/></div>;
};
export const Reveal=({at,duration=.55,children}:{at:number;duration?:number;children:React.ReactNode})=>{
 const frame=useCurrentFrame();const {fps}=useVideoConfig();const p=smooth(progress(frame,at*fps,duration*fps));
 return <div style={{clipPath:`inset(0 0 ${(1-p)*100}% 0)`,translate:`0 ${10*(1-p)}px`}}>{children}</div>;
};
// A continuous pen-width mask sweeps vertically through each letter, without typewriter steps.
export const HandWrite=({at,duration=.65,text,w=275,size=36,color=ink}:{at:number;duration?:number;text:string;w?:number;size?:number;color?:string})=>{
 const f=useCurrentFrame();const {fps}=useVideoConfig();const id=useId().replaceAll(':','');const p=progress(f,at*fps,duration*fps);
 const d=Array.from({length:Math.ceil(w/5)+2},(_,i)=>`${i?'L':'M'}${i*5} ${i%2?size*1.3:0}`).join(' ');
 return <svg width={w} height={size*1.25} style={{display:'block',overflow:'visible'}}><defs><mask id={id} maskUnits="userSpaceOnUse" x="-4" y="-4" width={w+8} height={size*1.5}><path d={d} fill="none" stroke="white" strokeWidth="10" pathLength="1" strokeDasharray="1" strokeDashoffset={1-p}/></mask></defs><text x="0" y={size} fontFamily="Kalam" fontSize={size} fill={color} mask={`url(#${id})`}>{text}</text></svg>;
};
export const DrawRoute=({at}:{at:number})=>{
 const frame=useCurrentFrame();const {fps}=useVideoConfig();const p=progress(frame,at*fps,.55*fps);const head=progress(frame,(at+.55)*fps,.16*fps);
 return <svg width="275" height="130" viewBox="0 0 275 130"><defs><mask id="route-reveal"><path d="M10 30Q110 120 260 45" fill="none" stroke="white" strokeWidth="9" pathLength="1" strokeDasharray="1" strokeDashoffset={1-p}/></mask></defs><path d="M10 30Q110 120 260 45" fill="none" stroke={ink} strokeWidth="2.6" strokeDasharray="7 8" strokeLinecap="round" opacity=".65" mask="url(#route-reveal)"/><path d="M238 39 260 45 247 65" fill="none" stroke={ink} strokeWidth="2.6" strokeLinecap="round" opacity=".65" pathLength="1" strokeDasharray="1" strokeDashoffset={1-head}/></svg>;
};
export const cameraStops=[0,.8,1.9,3.15,4.5,5.9,7.3,8.8,10.5,13];
export const cameraScale=[1.015,1,1.22,1.22,1.16,1.16,1,1,1,1];
export const cameraX=[0,0,30,30,0,0,15,15,0,0];
export const cameraY=[24,0,135,135,45,45,-220,-220,0,0];
export const cameraValue=(t:number,values:number[])=>interpolate(t,cameraStops,values,{...clamp,easing:smooth});
export const NotebookCamera=({children}:{children:React.ReactNode})=>{
 const frame=useCurrentFrame();const {fps}=useVideoConfig();const t=frame/fps;
 return <AbsoluteFill style={{background:'#f1ecdf',overflow:'hidden'}}><AbsoluteFill style={{translate:`${cameraValue(t,cameraX)}px ${cameraValue(t,cameraY)}px`,scale:cameraValue(t,cameraScale),transformOrigin:'50% 50%'}}><div className="grid" style={{position:'absolute',inset:-1440,backgroundColor:'#f1ecdf'}}/>{children}</AbsoluteFill></AbsoluteFill>;
};
