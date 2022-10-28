const {onRequest} = require("firebase-functions/v2/https");
const corsAnywhere = require('cors-anywhere');
const cors = require("cors")({origin:true})
const corsServer = corsAnywhere.createServer({
    originWhitelist: [
      'http://localhost:3000',
    ],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
});

exports.proxy = onRequest({cors:'http://localhost:3000'},(request, response) => {
  response.set('Access-Control-Allow-Origin', '*');
  cors(request,response,() =>{
    corsServer.emit('request', request, response);
  })    
});
