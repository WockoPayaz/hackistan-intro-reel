import {Box,Hand,Tape,TornPaper,Mountains,Star,DrawnArrow,AssetSlot,PolaroidCard,Sketch,NotebookPage,Sticker,red,sage} from './components';
export const Hook=()=> <NotebookPage n={1}>
<Box x={108} y={260} rotate={-3}><Hand size={44}>A notebook. A few ideas. A whole city.</Hand></Box>
<Box x={104} y={375} w={810}><div className="display" style={{fontSize:116}}>WHAT IF YOU<br/>COULD BUILD<br/><span style={{color:red}}>SOMETHING<br/>REAL?</span></div></Box>
<Box x={739} y={690} rotate={12}><Star size={130}/></Box><Box x={90} y={945} w={850}><Mountains/></Box>
<Box x={165} y={1330} w={610} rotate={-3}><TornPaper color={sage}><Hand size={54}>Right here in Quetta.</Hand></TornPaper><Tape x={330}/></Box>
<Box x={144} y={1530} w={460}><div className="label">QUETTA, PAKISTAN</div><Hand size={30}>The beginning of something good.</Hand></Box>
<Box x={670} y={1530} w={240}><AssetSlot asset="hackistan" label="Hackistan logo" height={120}/></Box></NotebookPage>;
export const Meet=()=> <NotebookPage n={2}>
<Box x={110} y={266}><Hand size={48}>Meet the people behind the pages.</Hand></Box>
<Box x={113} y={376} w={790} rotate={-2}><TornPaper><AssetSlot asset="hackistan" label="Authentic Hackistan logo" height={240}/><div className="display" style={{fontSize:134,marginTop:24}}>HACKISTAN</div><div style={{fontSize:39,marginTop:18}}>A HACK CLUB IN QUETTA</div></TornPaper><Tape x={90} rotate={-13}/><Tape x={580} rotate={12}/></Box>
<Box x={133} y={970} w={710}><Hand size={58}>Student-led.<br/>Built around making.</Hand></Box><Box x={595} y={991} rotate={-8}><DrawnArrow/></Box>
<Box x={135} y={1190} w={760}><svg width="760" height="150" viewBox="0 0 760 150"><path d="M60 80C200-70 360 190 650 55" fill="none" stroke="#737b66" strokeWidth="4" strokeDasharray="10 13"/><circle cx="60" cy="80" r="14" fill={red}/><circle cx="650" cy="55" r="12" fill={red}/></svg><div style={{display:'flex',justifyContent:'space-between',fontSize:29}}><span>QUETTA</span><span>A GLOBAL MAKER COMMUNITY</span></div></Box>
<Box x={120} y={1460} w={420} rotate={2}><AssetSlot asset="hackclub" label="Official Hack Club flag" height={160}/></Box><Box x={653} y={1450} w={250} rotate={8}><Sticker asset="orpheus" label="Orpheus sticker"/></Box></NotebookPage>;
export const Projects=()=> <NotebookPage n={3}>
<Box x={108} y={261}><div className="display" style={{fontSize:115}}>LESS TALK.<br/><span style={{color:red}}>MORE MAKING.</span></div></Box>
<Box x={117} y={550} w={475} rotate={-5}><PolaroidCard asset="boba" title="01 / Boba Drops" caption="A member-made website" height={220}/></Box>
<Box x={485} y={883} w={435} rotate={5}><PolaroidCard asset="bake" title="02 / BakeBuild" caption="CAD-designed cookie cutters" height={220}/></Box>
<Box x={123} y={1215} w={475} rotate={-3}><PolaroidCard asset="jame" title="03 / Jame Gam" caption="A game made by our team" height={190}/></Box>
<Box x={647} y={605} rotate={9}><Hand size={38}>From an idea<br/>to a real thing.</Hand><DrawnArrow/></Box>
<Box x={135} y={1010} rotate={-8}><Star size={92}/><Hand size={33}>Made here.</Hand></Box><Box x={650} y={1375} w={240} rotate={3}><Hand size={43} color={red}>Built by<br/>teenagers<br/>in Quetta.</Hand></Box></NotebookPage>;
const Note=({kind,title,color='#faf6ea'}:{kind:number;title:string;color?:string})=><TornPaper color={color} style={{height:242,padding:26}}><Sketch kind={kind}/><Hand size={38}>{title}</Hand></TornPaper>;
export const Create=()=> <NotebookPage n={4}>
<Box x={108} y={270} w={810}><div className="display" style={{fontSize:112}}>WHAT WILL<br/><span style={{color:red}}>YOU MAKE?</span></div><Hand size={43}>Six starting points. Your own direction.</Hand></Box>
<Box x={122} y={639} w={355} rotate={-5}><Note kind={0} title="Coding"/></Box><Box x={548} y={684} w={348} rotate={4}><Note kind={1} title="Web development" color={sage}/></Box>
<Box x={144} y={955} w={355} rotate={3}><Note kind={2} title="Game development" color="#e9c5b2"/></Box><Box x={547} y={1004} w={348} rotate={-4}><Note kind={3} title="CAD"/></Box>
<Box x={127} y={1278} w={355} rotate={-3}><Note kind={4} title="PCB design"/></Box><Box x={553} y={1321} w={348} rotate={4}><Note kind={5} title="3D printing" color={sage}/></Box>
<Box x={160} y={1615} rotate={-2}><Hand size={43}>Experiment. Make mistakes. Try again.</Hand></Box></NotebookPage>;
export const Opportunities=()=> <NotebookPage n={5}>
<Box x={108} y={270}><div className="display" style={{fontSize:106}}>SMALL STARTS.<br/><span style={{color:red}}>REAL POSSIBILITIES.</span></div></Box>
<Box x={120} y={564} w={775} rotate={-3}><TornPaper><div className="label" style={{color:red}}>AT HACKISTAN</div><Hand size={58}>Learn by doing.</Hand><div style={{fontSize:41,lineHeight:1.5}}>☑ Hands-on workshops<br/>☑ Make things together<br/>☐ Your next project</div></TornPaper><Tape x={550}/></Box>
<Box x={148} y={990} w={730} rotate={3}><TornPaper color={sage}><div className="label">THROUGH HACK CLUB PROGRAMS</div><Hand size={54}>Build on your own, too.</Hand><div style={{fontSize:38,lineHeight:1.45,marginTop:14}}>Grow useful skills.<br/>Build your portfolio.<br/>Explore eligible rewards & grants.</div><div style={{fontSize:25,marginTop:25,borderTop:'1px solid #777d6c',paddingTop:14}}>Program criteria apply. Opportunities vary.</div></TornPaper><Tape x={70} rotate={10}/></Box>
<Box x={163} y={1510} rotate={-5}><Hand size={63} color={red}>Ship your project!</Hand></Box><Box x={715} y={1510}><Star size={98}/></Box></NotebookPage>;
export const Join=()=> <NotebookPage n={6}>
<Box x={112} y={270} rotate={-3}><Hand size={47}>You don’t need to be an expert.</Hand></Box>
<Box x={135} y={390} w={740} rotate={2}><TornPaper><AssetSlot asset="hackistan" label="Authentic Hackistan logo" height={205}/></TornPaper><Tape x={75}/></Box>
<Box x={113} y={740} w={810}><div className="display" style={{fontSize:101}}>THE NEXT THING<br/>WE BUILD COULD<br/>BE <span style={{color:red}}>YOURS.</span></div></Box>
<Box x={155} y={1090} rotate={-3}><Hand size={51}>Just bring an idea.</Hand></Box>
<Box x={116} y={1250} w={788} rotate={-2}><TornPaper color={red} style={{padding:'38px 28px',textAlign:'center'}}><div className="display" style={{fontSize:98,color:'#fff8e7'}}>JOIN HACKISTAN</div></TornPaper></Box>
<Box x={288} y={1445} w={450}><div style={{fontSize:41,letterSpacing:8,textAlign:'center'}}>LINK IN BIO</div></Box>
<Box x={90} y={1555} w={200} rotate={-9}><AssetSlot asset="boba" label="Project photo" height={118}/></Box><Box x={764} y={1560} w={180} rotate={8}><Sticker asset="orpheus" label="Sticker"/></Box><Box x={423} y={1570}><Star size={75}/></Box></NotebookPage>;
