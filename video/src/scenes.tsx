import {Box,Hand,Tape,TornPaper,Mountains,AssetSlot,PolaroidCard,Sketch,NotebookPage,Sticker,CheckItem,red,sage} from './components';
import {Scrap,Washi,Clip,Underline,PencilRoute,colors} from './collage';

export const Hook=()=> <NotebookPage n={1}>
<Box x={108} y={260} rotate={-3}><Hand size={44}>A notebook. A few ideas. A whole city.</Hand></Box>
<Box x={85} y={365} w={710} rotate={-2}><Scrap color="#f9f3e5" height={470}/></Box><Washi x={88} y={352} w={180} rotate={-11} color={colors.blue}/>
<Box x={104} y={395} w={810}><div className="display" style={{fontSize:112}}>WHAT IF YOU<br/>COULD BUILD<br/><span style={{color:red}}>SOMETHING<br/>REAL?</span></div></Box>

<Box x={85} y={959} w={850}><Mountains/></Box>

<Box x={165} y={1330} w={610} rotate={-3}><TornPaper color={sage}><Hand size={54}>Right here in Quetta.</Hand></TornPaper><Tape x={330}/></Box>
<Box x={144} y={1530} w={460}><div className="label">QUETTA, PAKISTAN</div><Hand size={30}>Balochistan</Hand></Box>
<Box x={670} y={1530} w={240}><AssetSlot asset="hackistan" label="Hackistan logo" height={120}/></Box>
</NotebookPage>;

export const Meet=()=> <NotebookPage n={2}>
<Box x={110} y={260}><Hand size={46}>Meet the people behind the pages.</Hand></Box>
<Box x={103} y={394} w={805} rotate={4}><Scrap color={colors.blue} pattern="ruled" height={565}/></Box>

<Box x={113} y={376} w={790} rotate={-2}><Scrap><AssetSlot asset="hackistan" label="Authentic Hackistan logo" height={235}/><div className="display" style={{fontSize:134,marginTop:24}}>HACKISTAN</div><div style={{fontSize:39,marginTop:18}}>A HACK CLUB IN QUETTA</div></Scrap><Tape x={90} rotate={-13}/></Box>
<Box x={805} y={346} rotate={-3}><Clip/></Box>
<Box x={145} y={974} w={550} rotate={-4}><Scrap color={colors.yellow} pattern="ruled"><Hand size={51}>Student-led.<br/>Built around making.</Hand></Scrap></Box>

<Box x={110} y={1240} w={785} rotate={2}><Scrap pattern="ruled" style={{padding:'25px 30px',height:336}}><div className="label" style={{fontSize:22}}>FROM QUETTA, WITH IDEAS</div><svg width="710" height="100" viewBox="0 0 710 100"><path d="M25 65C180-50 360 150 655 35" fill="none" stroke="#737b66" strokeWidth="3" strokeDasharray="9 10"/><circle cx="25" cy="65" r="9" fill={red}/><circle cx="655" cy="35" r="9" fill={red}/></svg><div style={{display:'flex',justifyContent:'space-between',fontSize:25}}><span>QUETTA</span><span>GLOBAL MAKER COMMUNITY</span></div></Scrap><Tape x={530} rotate={10}/></Box>
<Box x={145} y={1455} w={390} rotate={-2}><AssetSlot asset="hackclub" label="Official Hack Club flag" height={130}/></Box>
<Box x={578} y={1470} w={310} rotate={2}><Hand size={34}>Our club.<br/>A wider community.</Hand></Box>

</NotebookPage>;

export const Projects=()=> <NotebookPage n={3}>
<Box x={96} y={267} w={810}><div className="display" style={{fontSize:109}}>LESS TALK.<br/><span style={{color:red}}>MORE MAKING.</span></div></Box>

<Box x={110} y={497} w={630} rotate={-4}><PolaroidCard asset="boba" title="01 / Boba Drops" caption="A member-made website" height={250}/></Box>

<Box x={635} y={710} w={145} rotate={12}><Sticker asset="bobaSticker" label="Boba Drops sticker" height={190}/></Box>
<Box x={360} y={882} w={570} rotate={-4}><Scrap color={colors.blue} pattern="grid" height={414}/></Box>
<Box x={385} y={896} w={540} rotate={4}><PolaroidCard asset="bake" title="02 / BakeBuild" caption="" height={265}/></Box><Washi x={760} y={895} w={150} rotate={14} color={colors.blue} pattern="check"/>
<Box x={104} y={1010} w={250} rotate={-5}><Hand size={36}>CAD-designed<br/>cookie cutters</Hand><PencilRoute w={275} h={130} d="M10 30Q110 120 260 45m-22-6 22 6-13 20"/></Box>

<Box x={105} y={1270} w={660} rotate={-3}><PolaroidCard asset="jame" title="03 / Jame Gam" caption="A game made by our team" height={250}/></Box>
<Box x={700} y={1435} w={130} rotate={8}><Sticker asset="godot" label="Godot Juice" height={175}/></Box>
<Box x={155} y={1690}><Hand size={35} color={red}>Built by teenagers in Quetta.</Hand></Box>
</NotebookPage>;

const Idea=({kind,title,note,color=colors.ivory,height=250}:{kind:number;title:string;note?:string;color?:string;height?:number})=><Scrap color={color} pattern="ruled" height={height} style={{padding:23}}><Sketch kind={kind}/><Hand size={40}>{title}</Hand>{note?<Hand size={25} color="#5e665b">{note}</Hand>:null}</Scrap>;
export const Create=()=> <NotebookPage n={4}>
<Box x={105} y={265}><div className="display" style={{fontSize:105}}>WHAT WILL<br/><span style={{color:red}}>YOU MAKE?</span></div></Box>

<Box x={110} y={515}><Hand size={37}>Start anywhere. Follow your curiosity.</Hand></Box>

<Box x={125} y={628} w={390} rotate={-9}><Idea kind={0} title="Coding" note="one line at a time" color={colors.blue} height={252}/><Tape x={80}/></Box>
<Box x={307} y={600} w={230} rotate={-6}><Sticker asset="laptops" label="Orpheus and Heidi Laptops" height={90}/></Box>
<Box x={468} y={700} w={448} rotate={5}><Idea kind={1} title="Web development" note="put your idea online" height={260}/><Washi x={240} y={-15} color={colors.pink}/></Box>
<Box x={92} y={945} w={490} rotate={-3}><Idea kind={2} title="Game development" note="make a world of your own" color={colors.pink} height={265}/></Box>
<Box x={476} y={955} w={110} rotate={12}><Sticker asset="godot" label="Godot Juice" height={150}/></Box>
<Box x={655} y={1075} w={245} rotate={10}><Idea kind={3} title="CAD" color={colors.yellow} height={220}/><Box x={175} y={-25} rotate={-8}><Clip/></Box></Box>
<Box x={140} y={1270} w={370} rotate={-7}><Idea kind={4} title="PCB design" color={sage} height={260}/><Washi x={70} y={-15} color={colors.blue}/></Box>
<Box x={475} y={1372} w={420} rotate={5}><Idea kind={5} title="3D printing" note="from screen to something real" height={270}/></Box>
<Box x={346} y={1220} w={190} rotate={-13}><Sticker asset="solder" label="Soldering" height={180}/></Box>

<Box x={555} y={1160}><PencilRoute w={150} h={195} d="M5 5Q110 55 55 173m-16-15 16 15 18-19"/></Box>

<Box x={140} y={1670}><Hand size={37}>Start with one. See where it takes you.</Hand></Box>
</NotebookPage>;

export const Opportunities=()=> <NotebookPage n={5}>
<Box x={100} y={259} w={825}><div className="display" style={{fontSize:96}}>SMALL STARTS.<br/><span style={{color:red}}>REAL POSSIBILITIES.</span></div></Box><Box x={104} y={460}><Underline width={400}/></Box>

<Box x={102} y={552} w={720} rotate={-4}><Scrap pattern="ruled"><div className="label" style={{color:red,fontSize:23}}>AT HACKISTAN</div><Hand size={56}>Learn by doing.</Hand><div style={{fontSize:36,lineHeight:1.55}}><CheckItem checked>Hands-on workshops</CheckItem><CheckItem checked>Make things together</CheckItem><CheckItem>Your next project</CheckItem></div></Scrap><Tape x={50}/></Box>
<Box x={742} y={660} w={175} rotate={6}><Sticker asset="journal" label="Journpheus" height={225}/></Box>



<Box x={156} y={1040} w={742} rotate={2}><Scrap color={sage} height={570}><div className="label" style={{fontSize:22}}>THROUGH HACK CLUB PROGRAMS</div><Hand size={50}>Build independently.</Hand></Scrap><Washi x={460} y={-14} color={colors.blue} pattern="check"/></Box>
<Box x={115} y={1200} w={420} rotate={-7}><Scrap pattern="ruled" height={235}><Hand size={44}>Useful skills.<br/>A growing portfolio.</Hand><Underline width={280}/><Hand size={26}>Save what you make.</Hand></Scrap></Box>
<Box x={545} y={1240} w={340} rotate={6}><Scrap color={colors.pink} height={238} style={{padding:22}}><div className="label" style={{fontSize:20}}>EXPLORE</div><Hand size={40}>Eligible rewards<br/>& grants</Hand><div style={{fontSize:23,marginTop:9}}>Program criteria apply.<br/>Opportunities vary.</div></Scrap></Box>
<Box x={190} y={1490} w={435} rotate={2} style={{fontSize:34,lineHeight:1.6}}><CheckItem>Save your work</CheckItem><CheckItem>Share your project</CheckItem></Box>
<Box x={688} y={1465} w={170} rotate={8}><Sticker asset="ship" label="Ship" height={180}/></Box>
<Box x={150} y={1660} w={650} rotate={-2}><Hand size={45} color={red}>Make something. Then share it.</Hand></Box>
</NotebookPage>;

export const Join=()=> <NotebookPage n={6}>
<Box x={112} y={263} rotate={-3}><Hand size={47}>You don’t need to be an expert.</Hand></Box>
<Box x={112} y={419} w={760} rotate={-4}><Scrap color={colors.blue} pattern="ruled" height={270}/></Box>
<Box x={135} y={390} w={740} rotate={2}><Scrap><AssetSlot asset="hackistan" label="Authentic Hackistan logo" height={205}/></Scrap><Tape x={75}/><Washi x={540} y={-6} color={colors.pink} rotate={10}/></Box>

<Box x={113} y={740} w={810}><div className="display" style={{fontSize:101}}>THE NEXT THING<br/>WE BUILD COULD<br/>BE <span style={{color:red}}>YOURS.</span></div><Underline width={470}/></Box>
<Box x={150} y={1100} rotate={-3}><Hand size={48}>Just bring an idea.</Hand></Box>

<Box x={116} y={1250} w={788} rotate={-2}><TornPaper color={red} style={{padding:'38px 28px',textAlign:'center'}}><div className="display" style={{fontSize:98,color:'#fff8e7'}}>JOIN HACKISTAN</div></TornPaper></Box>
<Box x={288} y={1450} w={450}><div style={{fontSize:41,letterSpacing:8,textAlign:'center'}}>LINK IN BIO</div></Box>
<Box x={312} y={1558} w={285} rotate={-5} style={{padding:14,background:'#fffaf0',boxShadow:'2px 5px 8px #282b2720'}}><AssetSlot asset="jame" label="Jame Gam photo" height={142}/><Tape x={50} y={-19}/></Box>
<Box x={567} y={1540} w={155} rotate={8}><Sticker asset="orpheus" label="Orpheus" height={175}/></Box>
</NotebookPage>;
