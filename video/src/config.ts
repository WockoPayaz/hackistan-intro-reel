// Approved narration and scene durations. Audio remains optional and disabled by default.
export const scenes = [
 {id:'01-hook',title:'An idea starts here',seconds:7,script:'What if you could build something real, right here in Quetta?'},
 {id:'02-meet',title:'Meet Hackistan',seconds:8,script:'Meet Hackistan: a student-led Hack Club in Quetta, connecting teenagers through making things, not just learning about them.'},
 {id:'03-projects',title:'Made here',seconds:13,script:'A real website. Cookie cutters designed in CAD. And a video game our team actually made. Real projects, built right here.'},
 {id:'04-create',title:'Room to experiment',seconds:12,script:"From coding and websites to game development, 3D printing, PCB design, and CAD — there's room to experiment, make mistakes, and create something of your own."},
 {id:'05-opportunities',title:'Make your next move',seconds:12,script:'Join hands-on workshops or build independently through Hack Club programs. Along the way, learn useful skills, grow your portfolio, and explore eligible rewards and grants.'},
 {id:'06-join',title:'Your idea goes here',seconds:8,script:"You don't need to be an expert. Just bring an idea. The next thing we build could be yours. Join Hackistan."},
] as const;
export const assets: Record<string,string|null> = {
 hackistan:'assets/branding/hackistan-h.svg',
 hackclub:'assets/branding/flag-standalone.png',
 boba:'assets/projects/boba-drops-website-screenshot.png',
 bake:'assets/projects/bakebuild-cookie-cutter-cad-screenshot.png',
 jame:'assets/projects/jame-gam-game-screenshot.png',
 orpheus:'assets/stickers/orphmoji yippee.webp',
 ship:'assets/stickers/ship.webp',
 godot:'assets/stickers/Godot Juice.webp',
 solder:'assets/stickers/Soldering.webp',
 bobaSticker:'assets/stickers/Boba Drops.webp',
 journal:'assets/stickers/Journpheus.webp',
 laptops:'assets/stickers/Orpheus and Heidi Laptops.webp',
 nest:'assets/stickers/Nest Hatched Smolpheus.webp',
 codingBalloon:'assets/stickers/Coding with Balloon.webp',
 gameLab:'assets/stickers/Game Lab.webp',
 pcbSkate:'assets/stickers/Orpheus Skateboarding PCB.webp',
 construct:'assets/stickers/Construct Orpheus.webp',
 members:null,
};
