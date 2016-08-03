// console.log("Hello world");

//1.) require imports modules into current file, http --> library
var http = require("http");

//2.) create the server
PORT = 3000;
http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': "text/html"});
  response.end('<html><body><h1>Hello World</h1></body></html>');
}).listen(PORT);

console.log("Server running on port http://localhost:" + PORT);
