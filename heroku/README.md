# `IMPORTANT NOTICE`

### Heroku will [withdraw](https://devcenter.heroku.com/articles/free-dyno-hours) provision of free Dynos on 28th of November 2022. The [cost](https://www.heroku.com/pricing) will be $7 per Dyno per month after that.

## Implementation using Heroku

Implementation of a basic CORS-Anywhere server is very straightforward. Simply do the following:

1. Fork this repository.
2. Move all of the files in this directory (except this `README`) to root. Heroku only accepts deployment from the root directory and the `master` or `main` branch.
3. Within [server.js](https://github.com/Isoaxe/cors-server/blob/master/heroku/server.js#L9), replace the website string in the `originWhitelist` array with the web address(es) that you want to authorise. You can keep the first string here as is for local testing (assuming you're using port 3000).
4. Now simply upload / push the repo to a hosting provider. I used a free [Heroku](https://id.heroku.com/login) account to create a Node.js app. This can be done without any knowledge of Node, and only a basic familiarity with Git and the command line. Just follow the excellent documentation [here](https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment) (steps 3 to 6 inclusive can be ignored).
5. Prepend the API request in your application code with the server URL as generated in the previous step [like so](https://github.com/Isoaxe/ravenous/blob/master/src/util/searchYelp.js#L5). That's it, you've implemented the server!

**Tip:** If hosting on Heroku, a Procfile has already been created in this repository. This instructs the Heroku Node app on how to start the server.

**Note:** Heroku's [acceptable use policy](https://www.heroku.com/policy/aup) forbids the use of an open proxy (see part 6, item XIX). Therefore, make sure to follow point 2 above. Leaving the array empty authorises all requests and therefore violates the AUP.
