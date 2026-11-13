import {Box,Hand,Tape,TornPaper,Mountains,Star,DrawnArrow,AssetSlot,PolaroidCard,Sketch,NotebookPage,Sticker,CheckItem,red,sage} from './components';
import {Scrap,Washi,Clip,Stamp,Underline,Tag,PencilRoute,colors} from './collage';

export const Hook=()=> <NotebookPage n={1}>
<Box x={108} y={260} rotate={-3}><Hand size={44}>A notebook. A few ideas. A whole city.</Hand></Box>
<Box x={85} y={365} w={710} rotate={-2}><Scrap color="#f9f3e5" height={470}/></Box><Washi x={88} y={352} w={180} rotate={-11} color={colors.blue}/>
<Box x={104} y={395} w={810}><div className="display" style={{fontSize:112}}>WHAT IF YOU<br/>COULD BUILD<br/><span style={{color:red}}>SOMETHING<br/>REAL?</span></div></Box>
<Box x={755} y={727} rotate={12}><Star size={110}/></Box><Box x={710} y={860} rotate={5}><Hand size={30}>start here</Hand></Box>
<Box x={85} y={959} w={850}><Mountains/></Box>
<Box x={141} y={1355} w={640} rotate={2}><Scrap color={colors.pink} height={123}/></Box>
<Box x={165} y={1330} w={610} rotate={-3}><TornPaper color={sage}><Hand size={54}>Right here in Quetta.</Hand></TornPaper><Tape x={330}/></Box>
<Box x={144} y={1530} w={460}><div className="label">QUETTA, PAKISTAN</div><Hand size={30}>The beginning of something good.</Hand><Underline width={350}/></Box>
<Box x={670} y={1530} w={240}><AssetSlot asset="hackistan" label="Hackistan logo" height={120}/></Box><Washi x={80} y={1680} w={150} rotate={7} color={colors.yellow} pattern="dots"/>
</NotebookPage>;

export const Meet=()=> <NotebookPage n={2}>
<Box x={110} y={260}><Hand size={46}>Meet the people behind the pages.</Hand></Box>
<Box x={103} y={394} w={805} rotate={4}><Scrap color={colors.blue} pattern="ruled" height={565}/></Box>
<Box x={163} y={370} w={730} rotate={-5}><Scrap color={colors.pink} height={570}/></Box>
<Box x={113} y={376} w={790} rotate={-2}><Scrap><AssetSlot asset="hackistan" label="Authentic Hackistan logo" height={235}/><div className="display" style={{fontSize:134,marginTop:24}}>HACKISTAN</div><div style={{fontSize:39,marginTop:18}}>A HACK CLUB IN QUETTA</div></Scrap><Tape x={90} rotate={-13}/><Washi x={580} y={-10} rotate={12} color={colors.yellow}/></Box>
<Box x={805} y={420} rotate={14}><Clip/></Box>
<Box x={145} y={974} w={550} rotate={-4}><Scrap color={colors.yellow} pattern="ruled"><Hand size={51}>Student-led.<br/>Built around making.</Hand></Scrap></Box>
<Box x={688} y={895} w={215} rotate={9}><Sticker asset="orpheus" label="Orphmoji Yippee" height={230}/></Box>
<Box x={110} y={1240} w={785} rotate={2}><Scrap pattern="ruled" style={{padding:'25px 30px',height:336}}><div className="label" style={{fontSize:22}}>FROM QUETTA, WITH IDEAS</div><svg width="710" height="100" viewBox="0 0 710 100"><path d="M25 65C180-50 360 150 655 35" fill="none" stroke="#737b66" strokeWidth="3" strokeDasharray="9 10"/><circle cx="25" cy="65" r="9" fill={red}/><circle cx="655" cy="35" r="9" fill={red}/></svg><div style={{display:'flex',justifyContent:'space-between',fontSize:25}}><span>QUETTA</span><span>GLOBAL MAKER COMMUNITY</span></div></Scrap><Tape x={530} rotate={10}/></Box>
<Box x={145} y={1455} w={390} rotate={-8}><AssetSlot asset="hackclub" label="Official Hack Club flag" height={155}/></Box>
<Box x={570} y={1495} w={320} rotate={5}><Tag>Find your people.</Tag></Box>
<Box x={140} y={1640} w={760} rotate={-2}><Hand size={35}>A club for curious minds & busy hands.</Hand></Box>
</NotebookPage>;

export const Projects=()=> <NotebookPage n={3}>
<Box x={96} y={267} w={810}><div className="display" style={{fontSize:109}}>LESS TALK.<br/><span style={{color:red}}>MORE MAKING.</span></div></Box><Washi x={714} y={300} w={180} rotate={14} color={colors.pink}/>
<Box x={98} y={513} w={650} rotate={2}><Scrap color={colors.blue} height={370}/></Box>
<Box x={110} y={497} w={630} rotate={-4}><PolaroidCard asset="boba" title="01 / Boba Drops" caption="A member-made website" height={250}/></Box>
<Box x={725} y={565} w={180} rotate={8}><Scrap color={colors.yellow}><Hand size={31}>idea →<br/>website!</Hand></Scrap></Box>
<Box x={758} y={735} w={145} rotate={12}><Sticker asset="bobaSticker" label="Boba Drops sticker" height={190}/></Box>
<Box x={360} y={882} w={570} rotate={-4}><Scrap color={colors.pink} pattern="ruled" height={414}/></Box>
<Box x={385} y={896} w={540} rotate={4}><PolaroidCard asset="bake" title="02 / BakeBuild" caption="" height={265}/></Box><Washi x={760} y={895} w={150} rotate={14} color={colors.blue} pattern="check"/>
<Box x={103} y={953} w={235} rotate={-8}><Tag>Made here.</Tag><Hand size={34}>CAD →<br/>cookie cutters</Hand><DrawnArrow/></Box>
<Box x={126} y={1285} w={665} rotate={3}><Scrap color={sage} height={362}/></Box>
<Box x={105} y={1270} w={660} rotate={-3}><PolaroidCard asset="jame" title="03 / Jame Gam" caption="A game made by our team" height={250}/></Box>
<Box x={790} y={1370} w={130} rotate={8}><Sticker asset="godot" label="Godot Juice" height={175}/></Box>
<Box x={625} y={1645} w={315} rotate={-4}><Stamp>BUILT IN QUETTA</Stamp></Box><Box x={135} y={1680}><Hand size={30}>Built by teenagers.</Hand></Box>
</NotebookPage>;

const Idea=({kind,title,note,color=colors.ivory,height=250}:{kind:number;title:string;note?:string;color?:string;height?:number})=><Scrap color={color} pattern="ruled" height={height} style={{padding:23}}><Sketch kind={kind}/><Hand size={40}>{title}</Hand>{note?<Hand size={25} color="#5e665b">{note}</Hand>:null}</Scrap>;
export const Create=()=> <NotebookPage n={4}>
<Box x={105} y={265}><div className="display" style={{fontSize:105}}>WHAT WILL<br/><span style={{color:red}}>YOU MAKE?</span></div></Box>
<Box x={610} y={309} w={295} rotate={7}><Scrap color={colors.yellow}><Hand size={35}>ideas for<br/>a rainy day...</Hand><Star size={45}/></Scrap></Box>
<Box x={110} y={515}><Hand size={37}>Start anywhere. Follow your curiosity.</Hand></Box>
<Box x={125} y={628} w={390} rotate={-9}><Idea kind={0} title="Coding" note="one line at a time" color={colors.blue} height={252}/><Tape x={80}/></Box>
<Box x={468} y={700} w={448} rotate={5}><Idea kind={1} title="Web development" note="put your idea online" height={260}/><Washi x={240} y={-15} color={colors.pink}/></Box>
<Box x={92} y={945} w={490} rotate={-3}><Idea kind={2} title="Game development" note="make a world of your own" color={colors.pink} height={265}/></Box>
<Box x={476} y={955} w={110} rotate={12}><Sticker asset="godot" label="Godot Juice" height={150}/></Box>
<Box x={655} y={1075} w={245} rotate={10}><Idea kind={3} title="CAD" color={colors.yellow} height={220}/><Box x={175} y={-25} rotate={-8}><Clip/></Box></Box>
<Box x={140} y={1270} w={370} rotate={-7}><Idea kind={4} title="PCB design" color={sage} height={260}/><Washi x={70} y={-15} color={colors.blue}/></Box>
<Box x={475} y={1372} w={420} rotate={5}><Idea kind={5} title="3D printing" note="from screen to something real" height={270}/></Box>
<Box x={346} y={1220} w={190} rotate={-13}><Sticker asset="solder" label="Soldering" height={180}/></Box>
<Box x={538} y={610} rotate={-15}><Hand size={30}>what if...?</Hand><Underline width={140}/></Box>
<Box x={555} y={1160}><PencilRoute w={150} h={195} d="M5 5Q110 55 55 173m-16-15 16 15 18-19"/></Box>
<Box x={105} y={1585} w={340} rotate={-4}><Tag>Try. Tinker. Repeat.</Tag></Box>
<Box x={180} y={1690}><Hand size={31}>Good ideas leave pencil marks.</Hand></Box>
</NotebookPage>;

export const Opportunities=()=> <NotebookPage n={5}>
<Box x={100} y={259} w={825}><div className="display" style={{fontSize:96}}>SMALL STARTS.<br/><span style={{color:red}}>REAL POSSIBILITIES.</span></div></Box><Box x={104} y={460}><Underline width={400}/></Box>
<Box x={133} y={570} w={725} rotate={4}><Scrap color={colors.blue} pattern="grid" height={354}/></Box>
<Box x={102} y={552} w={720} rotate={-4}><Scrap pattern="ruled"><div className="label" style={{color:red,fontSize:23}}>AT HACKISTAN</div><Hand size={56}>Learn by doing.</Hand><div style={{fontSize:36,lineHeight:1.55}}><CheckItem checked>Hands-on workshops</CheckItem><CheckItem checked>Make things together</CheckItem><CheckItem>Your next project</CheckItem></div></Scrap><Tape x={50}/></Box>
<Box x={755} y={625} w={175} rotate={12}><Sticker asset="journal" label="Journpheus" height={240}/></Box>
<Box x={137} y={930} w={385} rotate={-7}><Tag color={colors.pink}>Keep a project notebook.</Tag></Box>
<Box x={123} y={1055} w={785} rotate={-2}><Scrap color={colors.yellow} height={570}/></Box>
<Box x={156} y={1040} w={742} rotate={2}><Scrap color={sage} height={570}><div className="label" style={{fontSize:22}}>THROUGH HACK CLUB PROGRAMS</div><Hand size={50}>Build independently.</Hand></Scrap><Washi x={460} y={-14} color={colors.blue} pattern="check"/></Box>
<Box x={115} y={1200} w={420} rotate={-7}><Scrap pattern="ruled" height={235}><Hand size={44}>Useful skills.<br/>A growing portfolio.</Hand><Underline width={280}/><Hand size={26}>Save what you make.</Hand></Scrap></Box>
<Box x={545} y={1240} w={340} rotate={6}><Scrap color={colors.pink} height={238} style={{padding:22}}><div className="label" style={{fontSize:20}}>EXPLORE</div><Hand size={40}>Eligible rewards<br/>& grants</Hand><div style={{fontSize:23,marginTop:9}}>Program criteria apply.<br/>Opportunities vary.</div></Scrap></Box>
<Box x={182} y={1475} w={395} rotate={-5}><AssetSlot asset="hackclub" label="Hack Club flag" height={110}/><Hand size={27}>A wider maker community.</Hand></Box>
<Box x={683} y={1465} w={170} rotate={8}><Sticker asset="ship" label="Ship" height={180}/></Box>
<Box x={150} y={1660} w={650} rotate={-2}><Hand size={45} color={red}>Make something. Then share it.</Hand></Box>
</NotebookPage>;

export const Join=()=> <NotebookPage n={6}>
<Box x={112} y={263} rotate={-3}><Hand size={47}>You don’t need to be an expert.</Hand></Box>
<Box x={112} y={419} w={760} rotate={-4}><Scrap color={colors.blue} pattern="ruled" height={270}/></Box>
<Box x={135} y={390} w={740} rotate={2}><Scrap><AssetSlot asset="hackistan" label="Authentic Hackistan logo" height={205}/></Scrap><Tape x={75}/><Washi x={540} y={-6} color={colors.pink} rotate={10}/></Box>
<Box x={748} y={575} w={180} rotate={8}><Tag>Made in Quetta</Tag></Box>
<Box x={113} y={740} w={810}><div className="display" style={{fontSize:101}}>THE NEXT THING<br/>WE BUILD COULD<br/>BE <span style={{color:red}}>YOURS.</span></div><Underline width={470}/></Box>
<Box x={134} y={1085} w={540} rotate={-4}><Scrap color={colors.yellow} style={{padding:'15px 25px'}}><Hand size={48}>Just bring an idea.</Hand></Scrap></Box><Box x={723} y={1085}><Star size={90}/></Box>
<Box x={94} y={1276} w={805} rotate={2}><Scrap color={colors.pink} height={150}/></Box>
<Box x={116} y={1250} w={788} rotate={-2}><TornPaper color={red} style={{padding:'38px 28px',textAlign:'center'}}><div className="display" style={{fontSize:98,color:'#fff8e7'}}>JOIN HACKISTAN</div></TornPaper></Box>
<Box x={288} y={1450} w={450}><div style={{fontSize:41,letterSpacing:8,textAlign:'center'}}>LINK IN BIO</div></Box>
<Box x={100} y={1570} w={230} rotate={-9} style={{padding:12,background:'#fffaf0',boxShadow:'2px 5px 8px #282b2720'}}><Tape x={25} y={-16} rotate={5}/><AssetSlot asset="boba" label="Project photo" height={118}/></Box>
<Box x={306} y={1558} w={235} rotate={7} style={{padding:12,background:'#fffaf0',boxShadow:'2px 5px 8px #282b2720'}}><AssetSlot asset="jame" label="Jame Gam photo" height={118}/><Washi x={50} y={-15} color={colors.blue} w={120}/></Box>
<Box x={750} y={1530} w={180} rotate={8}><Sticker asset="orpheus" label="Orpheus" height={190}/></Box>
<Box x={575} y={1585} w={150} rotate={-6}><Hand size={32}>Your page<br/>is next.</Hand><Underline width={140}/></Box>
</NotebookPage>;
