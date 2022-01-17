// Craeting a basic http server

let http = require('http');

//function to wrap the server functionality so that it can be exported.
let start = function(){
    function onRequest(request, response){
        console.log("Request received!")
        response.writeHead(200, {"Content-type": "text/plain"});
        response.write("Hello World");
        response.end();
     }
     
     http.createServer(onRequest).listen(3000);
}

exports.start = start;

console.log("Server has started.")