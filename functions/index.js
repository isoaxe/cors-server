const {onRequest} = require("firebase-functions/v2/https");
const cors = require("cors")({origin:true})

exports.proxy = onRequest({cors:'http://localhost:3000'},(request, response) => {
  response.set('Access-Control-Allow-Origin', '*');
  cors(request,response,() =>{
    // function goes here
  })    
});
