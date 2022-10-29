## Implementation using Firebase

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
10. From the terminal, navigate to the `functions` directory and `npm run deploy`. My function deployed to `https://proxy-ibmasyzzya-uc.a.run.app`.
11. Prepend the API request in your application code with this URL [like so](https://github.com/Isoaxe/ravenous/blob/master/src/util/searchYelp.js#L10). That's it, you've implemented the server!
