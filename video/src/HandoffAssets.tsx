// Export-only stills. Never used by or substituted into the approved Reel.
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Hook,Meet,Projects,Create,Opportunities,Join} from './scenes';
import {NotebookPage,Box,Tape,TornPaper,Mountains,Star,DrawnArrow,Sketch} from './components';
import {Scrap,Washi,Clip,Underline,PencilRoute,colors} from './collage';
const pages=[Hook,Meet,Projects,Create,Opportunities,Join];
import catalog from './handoff-assets.json';
export const handoffLayerNames=catalog.layers;
export const materialNames=catalog.materials;
export const HandoffAsset=({kind,scene=0,layer=0,name='masking-tape'}:{kind:string;scene?:number;layer?:number;name?:string})=>{
 if(kind==='page')return <NotebookPage n={scene+1}>{null}</NotebookPage>;
 let element:React.ReactNode;
 if(kind==='layer'){
  const tree=pages[scene]();const nodes=React.Children.toArray(tree.props.children).filter(React.isValidElement);
  if(nodes.length!==handoffLayerNames[scene].length)throw Error('Handoff layer names do not match existing scene');
  element=nodes[layer];
 }else{
  const items:Record<string,React.ReactNode>={
   'masking-tape':<Tape x={0} y={0}/>,
   'washi-blue-stripe':<Washi color={colors.blue}/>,
   'washi-pink-stripe':<Washi color={colors.pink}/>,
   'washi-blue-check':<Washi color={colors.blue} pattern="check"/>,
   'paperclip':<Clip/>, 'pencil-mountains':<Mountains/>, 'marker-star':<Star/>,
   'drawn-arrow':<DrawnArrow/>, 'scribbled-underline':<Underline width={470}/>,
   'pencil-route':<PencilRoute w={275} h={130} d="M10 30Q110 120 260 45m-22-6 22 6-13 20"/>,
   'torn-ivory':<TornPaper style={{height:220}}>{null}</TornPaper>,'torn-rust':<TornPaper color="#b94c36" style={{height:220}}>{null}</TornPaper>,
   ...Object.fromEntries(Object.entries(colors).map(([key,color])=>['scrap-'+key,<Scrap key={key} color={color} pattern={key==='blue'?'grid':'ruled'} height={350}/>])),
   ...Object.fromEntries(Array.from({length:6},(_,i)=>['sketch-'+i,<Sketch key={i} kind={i}/>]))
  };
  element=<Box x={140} y={180} w={name==='pencil-mountains'?850:600}>{items[name]}</Box>;
 }
 return <AbsoluteFill style={{fontFamily:'DM Sans',color:'#282b27',background:'transparent'}}>{element}</AbsoluteFill>;
};
