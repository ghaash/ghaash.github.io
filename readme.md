## Readme ##

## Instruction

1. Open index.html in your browser
2. Search at your leisure!

## Comments

The old twitch API named kraken had support for total results, viewer count, and a strange use of pagination. The new twitch API named kraken does not have support for results. The results are defaulted at 20 at a time, unless the first=number is used. It will go up from 1 to 100. Anything less or greater than 1 to 100 will result in bad request error. It has support for viewer count if you look up the user directly by username, not through channels. The pagination is supported through an object within the twitch API which needs to be added to a new API call to see the next set of paginations, this also applies to go backwards in paginations. It is not simple use as per it uses multiple API calls to get the pagination object that is used in the URL. I believe the reason behind this is reduce load on twitch's exposed API.

## Northstar Wishes

1. styles.css
I would upgrade to use styled components or Material UI for my CSS needs.

2. index.html
I would upgrade to using a framework like react to remove the the need for adding scripts, stylesheets, and the extraneous html.

3. script.js
There are several things I would like to do with this, as per it is vanilla javscript I kept it as simple as possible. Firstly, I would extract the api call into its own API service file and have it handle all the necessary API calls. This would deal with the total results, the viewer_count, pagination issues it has with the new Kraken API. The displayData and pagination functions would be created as a react components.

4. Error Handling
The new kraken Twitch API has issues from time to time, I've noticed that sometimes it does not load thumbails. Error handling within the displayData function in would prevent images from appearing broken and not loading. It would also handle failures from time to time in the twitch API when it is down and replace the page with an error popup.

5. Tests
In my react version of this application it would be hosted on Heroku.