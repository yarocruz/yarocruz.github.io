---
title: 'Bootcamp Week 17'
tags: 
    - bootcamp
    - mongodb
    - moongoose
    - sql
    - database
    - posts 
---

First day of week 17 we got introduced to MongoDB and how NoSQL databases compare to traditional databases like SQL. We looked at the differences between a NoSQL database like MongoDB and SQL. SQL deals with tables, columns, and rows. Mongo is basically a compressed JSON file(BSON) that deals with collections, fields, documents. 

We first went through the process of installing Mongo and the Robo 3T GUI on our systems, which was pretty straightforward. After everyone was done we started with the in-class exercises. The basic CRUD operations with Mongo have a very similar naming convention when compared to SQL. Finding, inserting, updating, and deleting was pretty easy. 

The second day of the week we started working with Moongose, the 'ORM' for MongoDB. We created different data Schemas with it. This was also familiar territory since this is also similar to Sequelize. Setting up a schema is pretty much like setting up a table, with it's columns, and data. Joining things from other collections is way more flexible and easier than joining tables in SQL that's for sure.

The final thing we covered for the week was IndexedDB, the in-browser database API. Like localStorage, you can have data persistence by grabbing this from the window object. Setting this up is still a bit fuzzy in my brain at the moment, but I got the gist of it. You create a database by running a .open() on indexedDB. Once you capture this in a variable you run the provided methods that create a table, in this case an 'Object Store' and then later on you can add items to the table. The code is a little more verbose, probably because you have to write the code that something like Mongoose does for you in the background. The important thing about learning indexedDB is that it can be used as a backup, if you need the application to work and store data even if it's offline. 

Overall chill week. Next week we cover performance, progressive web apps, and Webpack. 
