var express = require('express');
var app = express();

var bodyparser = require('body-parser');

app.get('/', function(req, res){
   res.send("Well come to node server"); 
});
app.get('/download', function(){
	res.download('./package.json', function(){
		console.log("Download is completed")
	});
});
app.get('/home', function(req, res){
   res.send("Well come to home"); 
});
app.get('/aboutus', function(req, res){
   res.send("<h1>Well come to about us</h1>"); 
});

var port=process.env.PORT || 3000;

app.listen(port, function(){
    console.log("HTTP server is up on port"+port);
});