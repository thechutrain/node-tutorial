//1.) require imports modules into current file, http --> library
var http = require("http"),
  express = require("express"); // imports express module & saves as var express

var app = express();  // creates express app
app.set('port', process.env.PORT || 3000); // or statement for default at 3000!

// creates Route Handler - chain of request handlers for a URL
app.get('/', function(req, res){
  res.send('<html><body><h1>Express library</h1></body></html>');
})

// run server
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening @ http://localhost:" + app.get('port'));
})
