import React from 'react';
import {AbsoluteFill,Easing,interpolate,spring,useCurrentFrame,useVideoConfig} from 'remotion';
import {Box,Tape,ink} from './components';
const clamp={extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;
export const progress=(frame:number,start:number,duration:number)=>interpolate(frame,[start,start+duration],[0,1],clamp);
// Seconds-based controls allow these materials to be reused at another frame rate.
export const Place=({at,x,y,w,rotate=0,dx=0,dy=-150,tilt=4,children}:{at:number;x:number;y:number;w:number;rotate?:number;dx?:number;dy?:number;tilt?:number;children:React.ReactNode})=>{
 const frame=useCurrentFrame();const {fps}=useVideoConfig();const local=frame-at*fps;
 const p=spring({frame:local,fps,config:{mass:1.15,damping:19,stiffness:125}});
 if(local<0)return null;
 return <Box x={x} y={y} w={w} rotate={rotate} style={{opacity:Math.min(1,local/3),translate:`${dx*(1-p)}px ${dy*(1-p)}px`,rotate:`${rotate+tilt*(1-p)}deg`,scale:1+.035*(1-p),filter:`drop-shadow(${3*(1-p)}px ${18*(1-p)}px ${9*(1-p)}px #453d2820)`}}>{children}</Box>;
};
export const TapeApply=({at,x=80,y=-24}:{at:number;x?:number;y?:number})=>{
 const f=useCurrentFrame();const {fps}=useVideoConfig();const p=progress(f,at*fps,.45*fps);
 if(p===0)return null;
 return <div style={{position:'absolute',left:x,top:y,width:176,height:60,clipPath:`inset(0 ${(1-p)*100}% 0 0)`,translate:`0 ${-8*(1-p)}px`,rotate:`${2*(1-p)}deg`,transformOrigin:'left center'}}><Tape x={0} y={0}/></div>;
};
export const Reveal=({at,duration=.55,children}:{at:number;duration?:number;children:React.ReactNode})=>{
 const frame=useCurrentFrame();const {fps}=useVideoConfig();const p=progress(frame,at*fps,duration*fps);
 return <div style={{clipPath:`inset(0 ${(1-p)*100}% 0 0)`}}>{children}</div>;
};
export const DrawRoute=({at}:{at:number})=>{
 const frame=useCurrentFrame();const {fps}=useVideoConfig();const p=progress(frame,at*fps,.8*fps);
 return <svg width="275" height="130" viewBox="0 0 275 130"><defs><mask id="route-reveal"><path d="M10 30Q110 120 260 45m-22-6 22 6-13 20" fill="none" stroke="white" strokeWidth="9" pathLength="1" strokeDasharray="1" strokeDashoffset={1-p}/></mask></defs><path d="M10 30Q110 120 260 45m-22-6 22 6-13 20" fill="none" stroke={ink} strokeWidth="2.6" strokeDasharray="7 8" strokeLinecap="round" opacity=".65" mask="url(#route-reveal)"/></svg>;
};
export const NotebookCamera=({children}:{children:React.ReactNode})=>{
 const frame=useCurrentFrame();const {fps}=useVideoConfig();
 return <AbsoluteFill style={{background:'#eee9dc',overflow:'hidden'}}><AbsoluteFill style={{translate:`0 ${interpolate(frame,[0,1.2*fps],[38,0],{...clamp,easing:Easing.out(Easing.cubic)})}px`,scale:interpolate(frame,[0,10*fps],[1.025,1],{...clamp,easing:Easing.inOut(Easing.cubic)}),transformOrigin:'50% 45%'}}>{children}</AbsoluteFill></AbsoluteFill>;
};
