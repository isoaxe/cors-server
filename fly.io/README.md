## Implementation using Fly.io

_Note:_ Implementing the server via Fly.io uses the same code as with Heroku, so there is no need to duplicate it within this directory.

1. Fork this repository.
2. Within [server.js](https://github.com/isoaxe/cors-server/blob/master/heroku/server.js#L9), replace the website string in the `originWhitelist` array with the web address(es) that you want to authorise. You can keep the first string here as is for local testing (assuming you're using port 3000).
3. Create a [Fly.io](https://fly.io/app/sign-up) account using your GitHub.
4. Select Node.js from your app dashboard after the account has been created.
5. [Install](https://fly.io/docs/hands-on/install-flyctl) the `flyctl` command line tool and then [login](https://fly.io/docs/getting-started/log-in-to-fly).
6. Enter payment card number for the _Hobby_ plan (don't worry, you won't be charged).
7. Now [launch](https://fly.io/docs/languages-and-frameworks/node/#launch-the-app-on-fly) `cors-server` on Fly.io by navigating to the [heroku](https://github.com/isoaxe/cors-server/tree/master/heroku) directory of your local fork and running `flyctl launch`. Select all the default options presented in the CLI.
8. Run `fly deploy` to deploy a docker image.
9. Navigate back to the dashboard in the browser and click on your new app. Check the _Hostname_ in the 'Application Information' section, it will take the form `https://cors-server.fly.dev/`.
10. Prepend the API request in your application code with the server URL as generated in the previous step [like so](https://github.com/isoaxe/ravenous/blob/master/src/util/searchYelp.js#L10). That's it, you've implemented the server!