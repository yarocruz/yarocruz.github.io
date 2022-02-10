---
title: Web Page vs Website vs Webapp 
summary: When people get into the debate of website vs web app, in the context of how overkill it is to use a big JS framework for "just making static sites", I think they are confusing a web Page with a web Site.
featuredImage: '/images/twitter_thread.png'
tags:
- posts
- website
- webapp
- webpage
---

When people get into the debate of website vs web app, in the context of how overkill it is to use a big JS framework for "just making static sites", I think they are confusing a web Page with a web Site. The confusion probably stems from the misunderstanding that a website that is simply "informational" doesn't need to be **dynamic**, or "appy", and that they should always be **static**.

I've found however that the distinctions between a website and web app are either not there at all, or if there is a fundamental difference, the differences are not as simple as **static** vs **dynamic**. I got a lot of the ideas I'm about to go over from this [JS Party Podcast episode](https://changelog.com/jsparty/162)

**Web Page**

The simplest web PAGE is a single HTML file with maybe a link to a CSS file and maybe a JavaScript file. While a single web page can be DYNAMIC, they are *usually* STATIC. All you need is one file on a web server. You can't get more static than that.

**Web Site**

A website is a collection of web pages with maybe a link to a  CSS file and a JS file. A website can be totally STATIC, specially if its small (3 - 5 pages), but most websites are DYNAMIC.

Think of a blog on a platform like WordPress. There are Databases for comments. There's dynamic routing. There's logins for users. All sorts things need to happen depending on user context.

**Webapp**

A web APP is obviously through and through DYNAMIC, but the technical differences between a web app and a website become a little fuzzy. Both, website and web app, rely on user interaction.

There are differences in scale and complexity that are more obvious when trying to make distinctions. When most people think of an application on the web, they think about something like Google Docs. But something like The New York Times they think of as a website. Because that's just "information". But trust me, there's very little that's static about The New York Times.

Thing is, a web app **cannot escape from being a website** because not matter what, in the end it needs a url, html, css, and JavaScript files in order to run inside a browser window.

So there you have it. Don't get me wrong, I still think it's useful sometimes to make a distinction between a website and web app. In terms of complexity, I wouldn't equate something like [Google Sheets](https://docs.google.com/spreadsheets), with like, someone's blog as being in the same category. But sometimes the distinction is useless because a web app can't help itself from also being a website, unless we're talking about an [Electron](https://www.electronjs.org/) app or something.

 