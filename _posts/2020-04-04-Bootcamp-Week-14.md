---
layout: post
title: 'Bootcamp Week 14'
date: 2020-04-04
categories: bootcamp servers node sql database sequelize
permalink: /bootcamp-week-14/
---

Week 14 was the last part in the SQL saga. Since Week 12 we've been learning how to work with a relational database and got an on overview on the approaches of building a full stack application around MySQL. The biggest take away for me was digging deeper into the [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) software design pattern.  

We learned [Sequelize](https://sequelize.org/v5/) an ORM package that makes using SQL with JS a breeze. From what I'm understanding, it's basically abstracting away the SQL queries you would need to write. Instead of having to write something like in the example below:

```
SELECT `Author`.`id`, `Author`.`name`, `Author`.`createdAt`, `Author`.`updatedAt`, `Posts`.`id` AS `Posts.id`, `Posts`.`title` AS `Posts.title`, `Posts`.`body` AS `Posts.body`, `Posts`.`createdAt` AS `Posts.createdAt`, `Posts`.`updatedAt` AS `Posts.updatedAt`, `Posts`.`AuthorId` AS `Posts.AuthorId` FROM `Authors` AS `Author` LEFT OUTER JOIN `Posts` AS `Posts` ON `Author`.`id` = `Posts`.`AuthorId`;
```

You write something like this:

```
module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  Author.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Author.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Author;
};
```

I'm loving it. It's way easier to reason about. Though you still need to have a good understanding of how SQL works, you don't have to write verbose SQL JOIN queries.

It's been a good week. I'm participating more in the Zoom chats. I'm unmuting the mic every once in a while, I'm sharing my screen and letting people see my 40 open tabs on Chrome. I'm enjoying it. Starting to get used to doing remote classes now. At this point it's uncertain if we will ever have in person classes since we're done by June. 

This week's due project was the [Eat Da Burger app](https://aqueous-beyond-86348.herokuapp.com/), a very basic and silly web app that's more about showcasing [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) functionality. Even though we were given a big blueprint on how to build this app and directions on how to deploy to Heroku, I'm super proud on how it turned out. Right now it's mostly a CRU app, so don't go crazy adding burgers. It's not healthy for you anyway. 

Coming up for the next 2 weeks is Project 2. The second group project. Let's see how this one goes.

 

