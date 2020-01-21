---
layout: post
title: 'Bootcamp Week 4'
date: 2020-01-20
categories: bootcamp web-development learning
permalink: /bootcamp-week-4/
---

```
- When clicking on a start button a timer starts
- The timer displays to the user and starts counting down
- The first set of questions is presented
- To chose a question you would use checkboxes
- If you click the wrong answer time is subtracted from the timer 
- It should also trigger some style for right or wrong answers
- When timer reaches 0 or all questions are answered the game is stopped
- In the end it asks for your initials
- This will save to local storage with initials with your score
```

Day 10 was a bit rough. Our main instructor was absent that night so we had a sub. The sub introduced us to Web API's as it relates to the browser's window object, the DOM, and old-school DOM traversal. In my opinion the sub went through the explanations a bit too quickly, assuming that everyone was keeping up. A lot of the students were thrown off. Many were probably hearing the term [Document Object Model](https://javascript.info/browser-environment#dom-document-object-model) for the first time, so when we got through the DOM traversal exercises using  things like **document.body.children[0]** to capture elements on a page, people's brains were exploding. In his defense however, if at this point in the Bootcamp you're still confused about what the DOM is you need to study more. At the end of the class we were introduced to the **setInterval()** functions and how they can be used to create timers.

On Day 11 we covered events and event handling with the .addEventListener method. Mostly the 'click' event, but we were also introduced to the 'change', 'keyup', and 'keydown' events. We also covered event delegation and event bubbling and how they both can be either useful or an issue.

On Day 12 things started to get a little challenging. We started with localStorage. That wasn't the challenging part. Local storage is pretty straightforward. You set an item, or you get an item. What's getting challenging are the class exercises. Most of the class exercises are timed, and we're usually given 10 to 20 minutes. I was doing pretty decent for most of them, but I got to a point were I just stared at the screen not knowing where to start. 

When we started Week 3 we went through that group exercise of pseudo coding the game [Rock Paper Scissors](https://github.com/yarocruz/rps). This week we were reminded again of pseudo coding. Of going through that exercise of breaking down the problem into tiny detailed steps. Moving forward, this is what's going to make us or break us for bigger projects. This ability to stop yourself and think. To have a game plan.

At the end of the week we had due our third assignment, a [Password Generator](https://github.com/yarocruz/password-generator) app. While making this web app I gained a deeper understanding on array methods, specially .flat() and .join(). I have a better handle on for loops. Math.floor and Math.random don't seem as complex as it used to. 

The 4th assignment that's due at the end of week 5 is a [code quiz application](https://github.com/yarocruz/code-quiz). This project has consumed my brain for the past couple of days. It has taken me a couple of days and hours now to get to it's current working state. Of course now I know that if I had taken a step back, stopped to think for a bit, actually pseudo coded like we did in the class exercises, it would've gone a bit smoother and the code wouldn't be as messy. But instead I just kept pecking at the code like a nervous chicken.

So don't peck at code like a nervous chicken. 