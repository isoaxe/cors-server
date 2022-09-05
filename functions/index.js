const functions = require('firebase-functions');
const corsAnywhere = require('cors-anywhere');

const corsServer = corsAnywhere.createServer({
    originWhitelist: ['http://localhost:3000', 'https://portfolio-ravenous.herokuapp.com'],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
});

exports.proxy = functions.https.onRequest((request, response) => {
    corsServer.emit('request', request, response);
});
