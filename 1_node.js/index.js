var http = require("http");

http.createServer(function (request, response){

response.writeHead(200, {'Content-Type': 'text/plain'});

//send the response text as "Hello World"
response.end('Hello World - 7376222IT159 - Jayatchana Aravind\n');
}).listen(3100);

console.log('server runnning at http://127.0.0.1:3100/');


