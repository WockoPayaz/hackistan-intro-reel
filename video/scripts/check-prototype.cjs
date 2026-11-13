const {chromium}=require('playwright');
const fs=require('node:fs');
(async()=>{
 const b=await chromium.launch({executablePath:process.env.REMOTION_BROWSER_EXECUTABLE||'/usr/bin/chromium',headless:true,args:['--no-sandbox','--autoplay-policy=no-user-gesture-required']});
 const p=await b.newPage();
 await p.goto('http://localhost:3010/');
 const result=await p.evaluate(async()=>{
  const v=document.querySelector('video');v.muted=true;await v.play();
  await new Promise((resolve,reject)=>{const t=setTimeout(()=>reject(Error('Playback timeout')),25000);v.onended=()=>{clearTimeout(t);resolve()};v.onerror=()=>{clearTimeout(t);reject(v.error)}});
  const q=v.getVideoPlaybackQuality();return {ended:v.ended,currentTime:v.currentTime,width:v.videoWidth,height:v.videoHeight,totalFrames:q.totalVideoFrames,droppedFrames:q.droppedVideoFrames,error:v.error};
 });
 fs.writeFileSync('../output/prototype/playback-check.json',JSON.stringify(result,null,2)+'\n');console.log(result);
 await b.close();if(!result.ended||result.error)process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1});
