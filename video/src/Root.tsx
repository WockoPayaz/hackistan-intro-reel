import {Composition,Still} from 'remotion';
import {Hook,Meet,Projects,Create,Opportunities,Join} from './scenes';
import './style.css';
import {ProjectsPrototype} from './ProjectsPrototype';
// Approved storyboards plus Scene 3 motion prototype; full timeline awaits prototype approval.
export const Root=()=> <>
 <Composition id="Scene3Prototype" component={ProjectsPrototype} width={1080} height={1920} fps={30} durationInFrames={390}/>
 <Composition id="StoryboardPreview" component={Hook} width={1080} height={1920} fps={30} durationInFrames={30}/>
 <Still id="01-hook" component={Hook} width={1080} height={1920}/>
 <Still id="02-meet" component={Meet} width={1080} height={1920}/>
 <Still id="03-projects" component={Projects} width={1080} height={1920}/>
 <Still id="04-create" component={Create} width={1080} height={1920}/>
 <Still id="05-opportunities" component={Opportunities} width={1080} height={1920}/>
 <Still id="06-join" component={Join} width={1080} height={1920}/>
</>;
