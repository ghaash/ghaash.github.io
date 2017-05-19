---
layout: post
title:  jQuery, Ajax and the DOM
date:   2017-05-19 17:37:45 +0000
---


jQuery, Ajax, and the DOM + My book collection

I know that sounds like a TV sitcom title but what they can do is incredible and they changed the interwebz forever.

Say hello to the DOM, the Document Object Model. The DOM is a way of viewing your webpage outside of the HTML file. You can right click on page in your browser, click "inspect" and that's the DOM!

The amazing about the DOM is that you can make edits without changing the HTML file itself. I can easily delete the "publish to blog" button. It's cool. You can get rid of annoying ads or GUIs this way. It makes using the internet a whole lot easier.

Now in your inspector there is a tab called the "console." You can type in javascript there. Javascript is a programming language that's mostly geared toward web applications and allows webpages to do those awesome animations, fast loading times, and have thing appear without page reloads.

In the console, if you type "alert("Hello World")" - a pop up with "Hello World" will appear! That's cool.

So how does jQuery come into this? jQuery is a javascript library (a library is a certain group of functions and code) that was designed to simplify client-side scripting of HTML. So what does that mean? It means you can do that awesome stuff we just talked about in your web applications. jQuery in particular is great with selectors. It allows you to select classes or ids of HTML and manipulate them to do nearly whatever you want! For example with AJAX (that's asynchronous javascript) I render HTML without the page reloading. Which is amazing because it means speedy, fast use of websites.

jQuery also allows the parsing of JSON (that's Javascript Object Notation) which data setup in attribute-values (think arrays and hashes.) 

Here's an example of JSON:

{
    "id": 1,
    "title": "Leviathon Wakes",
    "author": "James S.A. Corey",
    "genre": "Science Fiction"
}

AJAX can pass JSON through itself which allows you to edit the DOM like we spoke about above.  

For my jQuery Front End project, I essentially javascript-ified my previous rails project for my Book app. I did this because every link you click on renders the information in the DOM and there's page reloads. That means my app is super fast.

My books.js file contains click events that prevent the default link from occuring and inserting javascript that manipulates the DOM instead. I like that a lot!
