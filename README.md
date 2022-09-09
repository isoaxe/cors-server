# CORS-Anywhere Server

[CORS-Anywhere](https://www.npmjs.com/package/cors-anywhere) is a Node.js package that adds [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) headers to a proxied request. This is useful when the API provider does not natively support CORS. Without altering the headers, a request to such a provider would cause an error and prevent the request from being fulfilled.

**Tip:** You can test out the server in this repo locally by using port 3000 in your application and prepending `https://us-central1-private-cors-server.cloudfunctions.net/proxy/` to your API request [like this](https://github.com/Isoaxe/ravenous/blob/master/src/util/searchYelp.js#L6). However, if you want to use for a hosted website, then follow the implementation steps below.


# `IMPORTANT NOTICE`

### There are some issues with the remote-hosted instance of `cors-server` using Firebase functions. It only works when locally hosted for now.

### It is advised to implement the Heroku version of this server until the issues are resolved. The Firebase version should be operational well before Heroku [withdraws](https://devcenter.heroku.com/articles/free-dyno-hours) provision of free Dynos on 28th of November 2022.

### To do so, follow the `README` in the `heroku` directory. It works exactly the same as before.

## Implementation

Implementation of a basic CORS-Anywhere server is very straightforward. Simply do the following:

1. Fork this repository.
2. Within [index.js](https://github.com/Isoaxe/cors-server/blob/master/functions/index.js#L5), replace the website URLs in the `originWhitelist` array with the web address(es) that you want to authorise. You can keep the first string here as is for local testing (assuming you're using port 3000).
3. Navigate to the `functions` directory from the terminal and run `npm install`.
4. Create a new [Firebase](https://firebase.google.com/) account if you don't already have one.
5. Install the Firebase CLI by running `npm install -g firebase-tools`.
6. Log into Firebase using your Google account credentials with `firebase login` in the terminal.
7. From the Firebase console in your browser, create a new project. Give it a name and `project-id`.
8. Replace the value of the `default` field in [`.firebaserc`](https://github.com/Isoaxe/cors-server/blob/master/.firebaserc#L3) with your `project-id`.
9. From the bottom-left of the Firebase browser console, upgrade your billing plan from Spark (free) to Blaze (paid). Don't worry though, so long as you don't operate an open proxy or make a huge amount of requests it should be fine. You should also set up billing alerts and a cutoff just to be sure. There is a [generous](https://firebase.google.com/pricing) free tier of 2 million cloud function invocations per month in any case.
10. From the terminal, navigate to the `functions` directory and `npm run deploy`. Your function will deploy to `https://<region>-<project-id>.cloudfunctions.net/proxy`. In my case, it was `https://us-central1-private-cors-server.cloudfunctions.net/proxy`.
11. Prepend the API request in your application code with this URL [like so](https://github.com/Isoaxe/ravenous/blob/master/src/util/searchYelp.js#L6). That's it, you've implemented the server!
