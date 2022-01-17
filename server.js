// Craeting a basic http server

let http = require('http');
let url = require('url');
const { route } = require('./router');

//function to wrap the server functionality so that it can be exported.
let start = function(){
    function onRequest(request, response){
        // Extracting the pathname from the url requested
       let pathname = url.parse(request.url).pathname
       console.log("Request for "+pathname+" has been received");

       //passing pathname as a parameter to route
       route(pathname);

        console.log("Request received!")
        response.writeHead(200, {"Content-type": "text/plain"});
        response.write("Hello World");
        response.end();
     }
     
     http.createServer(onRequest).listen(3000);
}

exports.start = start;

console.log("Server has started.")