# CORS-Anywhere Server

[CORS-Anywhere](https://www.npmjs.com/package/cors-anywhere) is a Node.js package that adds [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) headers to a proxied request. This is useful when the API provider does not natively support CORS. Without altering the headers, a request to such a provider would cause an error and prevent the request from being fulfilled.

**Tip:** You can test out the server in this repo locally by using port 3000 in your application and prepending `https://private-cors-server.herokuapp.com/` to your API request [like this](https://github.com/Isoaxe/ravenous/blob/master/src/util/searchYelp.js). However, if you want to use for a hosted website, then follow the implementation steps below.


## Implementation

Implementation of a basic CORS-Anywhere server is very straightforward. Simply do the following:

1. Clone or fork this repository.
2. Within [server.js](https://github.com/Isoaxe/cors-server/blob/master/server.js), replace the website string in the `originWhitelist` array with the web address(es) that you want to authorise. You can keep the first string here as is for local testing (assuming you're using port 3000).
3. Now simply upload / push the repo to a hosting provider. I used a free [Heroku](https://id.heroku.com/login) account to create a Node.js app. This can be done without any knowledge of Node, and only a basic familiarity with Git and the command line. Just follow the excellent documentation [here](https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment) (steps 3 to 6 inclusive can be ignored).
4. Prepend the API request in your application code with the server URL as generated in the previous step [like so](https://github.com/Isoaxe/ravenous/blob/master/src/util/searchYelp.js). That's it, you've implemented the server!

**Tip:** If hosting on Heroku, a Procfile has already been created in this repository. This instructs the Heroku Node app on how to start the server.

**Note:** Heroku's [acceptable use policy](https://www.heroku.com/policy/aup) forbids the use of an open proxy (see part 6, item XVIII). Therefore, make sure to follow point 2 above. Leaving the array empty authorises all requests and therefore violates the AUP.
