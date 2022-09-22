## Implementation using Railway

_Note:_ Implementing the server via Railway uses the same code as with Heroku, so there is no need to duplicate it within this directory.

1. Fork this repository.
2. Within [server.js](https://github.com/Isoaxe/cors-server/blob/master/heroku/server.js#L9), replace the website string in the `originWhitelist` array with the web address(es) that you want to authorise. You can keep the first string here as is for local testing (assuming you're using port 3000).
3. Create a [Railway](https://railway.app) account.
4. Verify the account by connecting to GitHub. This gives $5 free credit per month. No payment card required.
5. Go to 'New Project' -> 'Deploy from GitHub repo'. Authorise Railway to access your GitHub project.
6. Click 'deploy now' on the authorised app.
7. It will fail. Go to Settings for the deployment in the Railway browser console and change the root directory to `/heroku`.
8. Click 'enable' under the 'Domains' subsection to assign a public URL to the server and expose it to the internet. It will be of the form `https://private-cors-server.up.railway.app/`.
9. Prepend the API request in your application code with the server URL as generated in the previous step [like so](https://github.com/Isoaxe/ravenous/blob/master/src/util/searchYelp.js#L10). That's it, you've implemented the server!

**Tip:** Railway uses a Procfile just like Heroku. This has already been created in this repository. This instructs the Railway Node app on how to start the server.