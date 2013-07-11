var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var infile = "index.html";
var fileContents = fs.readFileSync(infile);
var contentsString = fileContents.toString;

app.get('/', function(request, response) {
  response.send(contentsString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
