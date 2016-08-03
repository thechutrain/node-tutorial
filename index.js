//1.) require imports modules into current file, http --> library
var http = require("http"),
  express = require("express"); // imports express module & saves as var express
path = require("path"); // used for static files

//2.)
var app = express();  // creates express app
app.set('port', process.env.PORT || 3000); // or statement for default at 3000!
app.set('views', path.join(__dirname, 'views')); // where views will live
app.set('view engine', 'jade'); // sets jade as rendering engine
app.use(express.static(path.join(__dirname, 'public'))) // static handler, anything in public can be accesssed

// 3.) creates Route Handler - chain of request handlers for a URL
// also app.post, app.put etc.
app.get('/:person1/:person2', function(req, res){
  res.send(req.params.person1 + ", says hello to " + req.params.person2);
})
// 4.) Error Handling, if no previous call to res.send()??
// app.use(callback) matches and catches all request if at last
app.use(function(req, res){
  res.render('404', {url:req.url});
});

// run server
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening @@ http://localhost:" + app.get('port'));
})
