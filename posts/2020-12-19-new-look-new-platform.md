---
title: New Look, New Platform
summary: One of the reasons I decided to migrate to Eleventy was because I never really understood what exactly was happening behind the scenes with Jekyll.
tags:
    - posts
    - eleventy
    - jekyll
    - static site generators
---

I've been meaning to update my [old weblog](https://yarocruz.github.io/) for a while. It's gonna be living on that Github page for a bit until I figure out how to exactly deploy it there with [Eleventy](https://www.11ty.dev/). I built it with [Jekyll](https://jekyllrb.com/) a couple of years ago and the setup is a little different. I'm actually surprised that it's still up since I pull/merged to the master branch and there's no Jekyll stuff on that branch. This site is on [Netlify](https://www.netlify.com/) and it's setup with the [second branch](https://github.com/yarocruz/yarocruz.github.io/tree/v2) of the repo. Hopefully I'll get it sorted out without breaking things.

One of the reasons I decided to migrate to Eleventy was because I never really understood what exactly was happening behind the scenes with Jekyll, Gemfiles, and all the Ruby stuff. With Eleventy I feel a bit more comfortable since it's all JavaScript. Since it's built with [Node.js](https://nodejs.org/en/) configuration stuff it's easier to wrap my head around. By watching this [crash course](https://www.youtube.com/watch?v=j8mJrhhdHWc&t=4449s) and reading the docs, I managed to port it out in just a couple days. I used this [Netlify Boilerplate](https://github.com/danurbanowicz/eleventy-netlify-boilerplate) as a guide, but I wrote everything up from scratch.

There's still some quirks to fix and stuff to add later on, but I'm super happy with how it turned out.