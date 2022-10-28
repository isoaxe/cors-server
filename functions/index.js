const {onRequest} = require("firebase-functions/v2/https");
const cors = require("cors")({origin:true})

exports.proxy = onRequest((request, response) => {
  cors(request,response,() =>{
    // function goes here
  })    
});
