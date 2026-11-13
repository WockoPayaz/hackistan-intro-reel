// Phase A only: timing is planned; full animation and audio await approval.
export const scenes = [
 {id:'01-hook',title:'An idea starts here',seconds:7,script:'What if you could build something real, right here in Quetta?'},
 {id:'02-meet',title:'Meet Hackistan',seconds:8,script:'Meet Hackistan: a student-led Hack Club in Quetta, connecting teenagers through making things, not just learning about them.'},
 {id:'03-projects',title:'Made here',seconds:13,script:'A real website. Cookie cutters designed in CAD. And a video game our team actually made. Real projects, built right here.'},
 {id:'04-create',title:'Room to experiment',seconds:12,script:"From coding and websites to game development, 3D printing, PCB design, and CAD — there's room to experiment, make mistakes, and create something of your own."},
 {id:'05-opportunities',title:'Make your next move',seconds:12,script:'Join hands-on workshops or build independently through Hack Club programs. Along the way, learn useful skills, grow your portfolio, and explore eligible rewards and grants.'},
 {id:'06-join',title:'Your idea goes here',seconds:8,script:"You don't need to be an expert. Just bring an idea. The next thing we build could be yours. Join Hackistan."},
] as const;
export const assets: Record<string,string|null> = {
 hackistan:null,hackclub:null,boba:null,bake:null,jame:null,orpheus:null,ship:null,members:null,
};
