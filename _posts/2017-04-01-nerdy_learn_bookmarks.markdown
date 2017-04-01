---
layout: post
title:  "Nerdy Learn Bookmarks"
date:   2017-04-01 01:35:59 -0400
---


So there's this awesome channel on Flatiron's slack called nerdy_learn_neighbors and people are posting extremely useful links all the time there! Since I was invited to the channel, I have been adding them to my bookmarks. Then I had an idea... why do not I create an app that a source for all these bookmarks so everyone can read them! I also made the app searchable through the Ransack gem so the user does not have toil through pages and pages of bookmarks to find something.

So I did... but it was not without its problems.

Creating a CRUD app that had a collection of bookmarks was fairly easy... a few `rails g` here and there and it was working. Setting up devise to create users and add facebook login only took one try and that is something I'm very happy with.

However, adding the feature of allowing users to create their own lists of bookmarks that they could save as favorites was a small nightmare. After much reading and searching I had thought that I set up code correctly but I couldn't get it to work. I had set up a button through `submit_tag` to go through the favorites controller to create a favorited bookmark. No matter what I did, I could not get it to pass all of the bookmark information, the name, description and url of the bookmark were missing every time. After reaching out to reddit I saw what I did wrong:

1) My join table was incorrect. I did not add the correct foreign key values to favorites. I had added favorites_id to bookmarks when it need to be the opposite. I also forgot to add user_id to favorites so that users could keep that favorite associated to themselves.

2) My model associations were off, but not by that much. I had setup my Bookmark model to `has_and_belongs_to_many :favorites` which was correct and I set up Favorites as the same. That was incorrect - that did not allow Favorites to pass bookmark_ids. In reality Favorite `belongs_to` a user and a bookmark. That is the proper association, a favorite tags along to a user and bookmark like a little sibling. It doesn't have many bookmarks or users, it just belongs to one.

3) `Submit_tag` was the wrong thing to do. I saw through `binding.pry` that was able to pass some of the bookmark_id through the favorite but not all of it and `submit_tag` did not have enough arguments for me to pass everything that I needed. Using `button_to` was. It allowed me direct to the favorites controller and a GET request with the user_id AND the bookmark_id. 

So what did all these mistakes cause me to do? Go back and read all the rails guides on join tables, associations and url helpers! I now have a much better understand of what I can do within rails

I knew I could do it but I did not think it would be this much! I'm really happy with the way it turned out and it'll be a great boon to Flatiron School students. There is so much good information out there it should be collected and viewable in one place.
