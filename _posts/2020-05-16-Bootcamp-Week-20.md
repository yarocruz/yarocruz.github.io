---
layout: post
title: 'Bootcamp Week 20'
date: 2020-05-16
categories: bootcamp react hooks
permalink: /bootcamp-week-20/
---

Week 20 was React Hooks week. We started with the **useState** hook and 
how it compares to using state with class based components. I like 
functional based components with Hooks so much better. It is way cleaner, 
you don't have to use the 'this' keyword, and they are simply easier to understand. 
I do wonder however how other students absorbed the different ways of doing things in 
React, since we only spent 3 days using class based components. 

We also did some exercises with the **useEffect** hook, which is the hook
that gives you access to component lifecycle methods like **componentDidMount** 
For example, we used useEffect to make API calls after a component renders.
The useEffect function can be tricky because it takes a second optional argument, 
or sometimes **not optional** if you don't want infinite re-renders. 
The last thing we looked on day one was how to create custom hooks and a brief intro to **createContext** with 
the **useContext** hook.

Day 2 of Week 20 was all about Context. We used the **createContext** API 
paired with the **useContext** hook. We first worked with an example
exercise were we "prop-drilled" through components until we got to the final child
component that needed to use state. The **createContext** api is really cool
once you understand how it works. Prop drilling is a pain, so it's really
nice to skip all the components that don't really need to use a piece of
state. We ended day 2 with examples of using context dynamically and using
multiple contexts. 

On day 3 we looked at state management using useReducer and putting all 
these Hooks together to basically do [Redux](https://redux.js.org/) 
with Hooks. We also worked with **useRef**. I'm not entirely sure if a library 
like Redux would be something that you would still use if you're doing React with 
just functional components, but it looks like it's becoming the way to do it with hooks.
We ended the day with a Mini Project, that wasn't really that "mini", where
we had to add state management to a CMS blogging tool.

There was a lot this week. There's still stuff I'm processing. The createContext 
stuff, mixed with the state management stuff with useReducer is tricky, but I feel 
that I'm finally beginning to really know React. Like, I think I rocked
this [Employee Directory](https://yarocruz.github.io/react-employee-directory/) 
project. I started it out as class based, but was surprised how easy
it was to convert into a Hook based component with **useState**.

I can't believe I'm almost done with this Bootcamp. In the coming weeks we're
gonna look at the MERN stack and start working on our final projects.



