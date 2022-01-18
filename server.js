// Craeting a basic http server

let http = require('http');
let url = require('url');
const { route } = require('./router');

//function to wrap the server functionality so that it can be exported.
let start = function(route, handle){
    function onRequest(request, response){
        // Extracting the pathname from the url requested
       let pathname = url.parse(request.url).pathname
       console.log("Request for "+pathname+" has been received");

       //passing pathname,handle as a parameter to route
       // Inject the response object into the route function
       route(handle, pathname, response);

        
     }
     
     http.createServer(onRequest).listen(3000);
}

exports.start = start;

console.log("Server has started.")