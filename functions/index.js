const functions = require('firebase-functions');
const corsAnywhere = require('cors-anywhere');

corsAnywhere.createServer({
    originWhitelist: ['http://localhost:3000', 'https://portfolio-ravenous.herokuapp.com'],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
});

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
