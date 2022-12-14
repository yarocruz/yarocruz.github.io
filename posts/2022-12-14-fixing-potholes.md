---
title: Fixing Potholes
summary: Non-trivial coding challenges for job interviews are still not the best way to hire if you're not Google
tags:
- posts
- technicalinterviews
---

> "You are given a task to fix potholes in a road. The road is described by a string S consisting of N characters. Each character represents a single fragment of the road. Character "." denotes a smooth surface and 'x' denotes a pothole. For example, S = "...xxx..x" means that the road starts with three smooth fragments, followed by three potholes, followed by two smooth fragments and ending with one pothole.

> You can choose any number of consecutive potholes and fix all of them. Fixing a segment consisting of K consecutive potholes costs K + 1. In the example above, fixing the first two consecutive potholes costs 2 + 1 = 3 and fixing the last pothole costs 1 + 1 = 2. After these fixes, the road would look like this: ".....x...". 

> You are given a budget B. You can fix multiple segments containing potholes as long as you fit in the budget. What is the maximum number of potholes you can fix?

> Write a function that, given the string S of length N and the integer B, returns the maximum number of potholes that can be fixed.
 
> Examples: 
> Give S = "...xxx..x....xxx." and B = 7, the function should return 5. 

> Write an efficient algorithm in JavaScript for the following assumptions:
 
> N is an integer within the range[1..100,000]
> B is an integer within the range [0..200,000]
> string S consists only of characters '.' and 'x'."

I've heard and read many takes on the pros and cons of technical coding tests interviews. I understand the [FAANG](https://www.fastcompany.com/90790394/what-is-a-faang-company), or [MAMAA](https://www.fastcompany.com/90790394/what-is-a-faang-company), point of view of how hard it is to find a programmer that actually knows how to program and how difficult it is to filter out the ones who don't. I get that. These companies want "top-tier" Software Engineers. They want the best. 

But I still don't understand why companies that are nowhere close to being a Google or a Microsoft give out coding tests that are non-trivial and quite complex. I'm not saying to just test candidates to write a function that will return the sum of two numbers, or [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz). (Smaller companies that attract "average level" candidates [probably should.](https://blog.codinghorror.com/why-cant-programmers-program/)) 

But if the kind of programing for the job is strictly Web Development, and particularly focused on the client-side, how is the ability to solve the example above in a hour relevant to the day to day coding for a Front-End Developer role?

## Digression

I'll admit it. I'm not great at solving coding puzzles. I started [Advent of Code](https://adventofcode.com/2022) with enthusiasm, but after Day 8 that enthusiasm has started to wane. It gets to a point where it stops being fun. I feel like a have [Dyscalculia](https://en.wikipedia.org/wiki/Dyscalculia), sometimes referred as "math dyslexia". I'm sure I don't have that, but sometimes I don't understand the problem fully, no matter how many times I read the problem statement.

Unfortunately, I still want to be a Software Engineer. I know I'll figure this out. I'm working with [Pathrise](https://www.pathrise.com/) and they set me on a plan to be applying to 15 software jobs a week. The rejection emails are starting to come in. That coding test was the closest I've been to passing to a "round 1". So the plan is definitely being effective. But things are gonna get bumpy. 

I just gotta fix the potholes. I probably won't fix all of them, but I'm sure I'll fix as much as I can.

