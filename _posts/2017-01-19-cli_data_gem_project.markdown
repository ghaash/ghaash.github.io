---
layout: post
title:  "CLI Data Gem Project"
date:   2017-01-19 03:10:48 +0000
---


I chose to make a CLI Data Gem from bringfido.com, a website that looks at dog-friendly and oriented hotels, restaurants, activites, events, and services.

I ran my nokogiri on the dog park portion that scraped the top ten dog parks from their dog park page.

I built a command line interface and scraper off the lecture that Avi gave on how to build a CLI gem with nokogiri. I modified the command line interface to look nicer and to respond to more inputs (parks, locations, descriptions) from the user, added some puns and interesting dialogue.

For example if the user types in anything that isn't "parks," "locations," "description," or exit, it'll expect that the user is a dog and to go get their human so they can help find a park. 

After a lot of research and help from Corinna, I was able to find the xpath selectors to scrape the dog park names, locations and descriptions. I used xpath helper to find the exact selectors. It's extraordinarily helpful!

Sadly, I was unable to get the output to have parks, followed by location, followed by its description. The description collection is also messed up and I've been unable to  I've worked about 20 hours on trying to get it to work in that manner with no avail. So, I set the CLI to nicely print the park names, locations and descriptions. I was able to use .gsub to format the descriptions of the park line by line, so it looks nice, even though it is jumbled.
