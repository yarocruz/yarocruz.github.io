---
title: 'Bootcamp Week 18'
tags: 
    - bootcamp
    - pwa
    - webpack
    - posts 
---

Week 18 was progressive web app week. We started the week learning to use tools like [Google Lighthouse](https://web.dev/measure/?gclid=Cj0KCQjwtLT1BRD9ARIsAMH3BtU7dySQzzHOZIUaeyEdCRdNkGi77-UqDIbB_4_ZTZQp8TgOAco3R0gaAlhHEALw_wcB) to checkout how our websites measure up in terms of performance and accessibility. We looked at minifying and compressing files. We also worked with online tools to compress image files. I finally have a better understanding of what lazy loading is. I tested one of my apps and I got a 42 in performance, but by the end of the class I managed to bump that up to the 90's after adding a compression middleware.

On day 2 of Week 18 we started with actual progressive web apps and what that means. First off, it has nothing to do with politics. It's about making your app more flexible by making it able to work outside a browser and / or still work if there's no network. I had seen a web manifest before, but I always thought that had something to do with SEO. By giving an app a manifest, which is JSON file, the app can be downloaded to your mobile device for example. 

We also learned about service workers, a utility-like script that can assist a web app in making data persistent by using browser api's like indexedDB and caching to make the app keep working even if it's offline. This was a thing I was sort of familiar with by seeing them when using create-react-app, but now I know what they're actually for. 

Finally we covered [Webpack](https://webpack.js.org/), one of my absolute favorite things ever since going through [Colt Steele's Webpack Course](https://www.youtube.com/watch?v=3On5Z0gjf4U&list=PLblA84xge2_zwxh3XJqy6UVxS60YdusY8). We went from basic configuration to using Babel plugins to be able to use modern ES6 import/export syntax. 

One of the reasons they showed us Webpack was for us to get a better idea at what a tool like create-react-app is using and already doing for you behind the scenes.

I'm super stoked to start working with React. I think we're going to be in React land for the remaining of the Bootcamp, which is only 5 more weeks. 