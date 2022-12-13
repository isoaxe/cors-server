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


## Troubleshooting

On _redeployment_ of the cloud function, the following error may be encountered:

`HTTP Error: 400, Could not update Cloud Run service proxy. spec.template.spec.containers[0].resources.limits.cpu: Invalid value specified for cpu.`

There may be two ways to resolve this. The first way is to simply delete the function via the Firebase console in the browser. Then redeploy, it will fail. A second or third redeployment should be successful. The function name does not change on redeployment, so don't worry about needing to update it in the apps that use the proxy.

---

### Note: Below fix not working yet

The [other way](https://cloud.google.com/run/docs/configuring/cpu#setting-services) is to change the CPU allocation for the function. However, there is currently a [problem](https://issuetracker.google.com/issues/245363153) with this. Following the steps in the Console tab:

1. Click on the 'Go to Cloud Run' button.
2. From the new tab that opens, click on your service (function name).
3. Click 'Edit and deploy new revision'.
4. Select `1` CPU from the dropdown in the 'Container' tab.
5. Set the 'maximum number of instances' field to `30`.
6. Click the 'Deploy' button.

Unfortunately the image URL gets [omitted](https://prnt.sc/DoC18_7QVjwf) during deployment, despite being specified in the [first field](https://prnt.sc/RCzmLPRrLi9o) in step 3 above. The `YAML` [file](https://prnt.sc/6CGPgWMa_MpZ) also shows the image URL.

Upvote the [problem](https://issuetracker.google.com/issues/245363153) on the issue tracker and maybe Google will look at it. If a solution is discovered, please let me know and I'll update the readme.