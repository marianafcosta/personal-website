---
layout: post
title: "An introduction to Garry's Mod modding"
date: 2023-06-17
---

For some time now, the idea of getting into game modding has crossed my mind ocasionally. A bit odd, considering I was never someone who actively used mods back in the days I played games a lot more regularly. I think what fascinates me about mods is how transformative they can be, how drastic they can differ from the original game. It ties in with what drew me into programming: the endless opportunities to build things, to make something out of nothing. Even if that endless freedom is, for me, extremely overwhelming at times.

As I was looking into games with strong support for modding, I came across Garry's Mod. I have very fond memories of playing TTT and Prop Hunt, so it seemed like a good choice! Somewhat inspired by that Garry's Mod game mode where you'd be in a theater and could watch YouTube videos with other players (which I hope I'm not making up and is actually a real thing), I thought I could do something that would let you hold retrospective meetings. While it's admittedly not the most exciting side-project idea, it is pretty straightforward, and it seemed simple enough to get my feet wet.

I had never worked with Lua, and was not familiar with the internals of Garry's Mod, so more important than getting a finished product was familiarising myself with the development environment and with the documentation available. Besides this goal, the set of requirements I set for myself varied throughout the days. Ultimately, I landed on the following:

- To have a `Desk` prop that would allow you to write notes, which could be of different types (e.g. either ideas for improvement, or things that went well);
- To have a `Note` prop that would be spawned by the `Desk` and which could be read by the player.

Keeping things simple helped me to not lose steam too quickly, and setting the bar for "completion" low gave me closure and helped me avoid that sinking feeling of "never getting anything done". It also left the door open for me to continue to explore topics which I didn't have the chance to, and I've preserved enough interest to actually want to walk through that door.

Despite the simplicity, this taught me the basics of quite a few concepts:

- Garry's Mod file structure;
- Interacting with entities;
- Networking;
- UI;
- Data structures in Lua.

I skimmed a lot of the topics and I definetly only scratched the surface, but I still feel like this was a good learning experince. There are some things I would like to revisit or add, for example:

- The data flow when spawning a note. I feel like some of the information transmited using the network module (e.g. the position of the desk, which is necessary to know where to spawn the note) could be handled in a simpler way, without networking;
- Displaying a "Read note" instruction when we look at a note, but only if that note is within a certain distance of the player;
- Setting up a timer.

But, for now, I think I'll try to pick a theme that's a bit more fun. This video by Code Blue about a cooking add-on for Garry's Mod gave me some ideas. Here's a link to the [source code](https://github.com/marianafcosta/garrys-retro).

## Resources

- [https://wiki.facepunch.com/gmod/]()
- [https://www.youtube.com/@CodeBlue]()
- [https://www.lua.org/pil/]()
