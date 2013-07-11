var express = require('express');

var app = express.createServer(express.logger());

var fs = requre('fs');
var infile = "index.html";
var fileContents = fs.readFileSync(infile);

app.get('/', function(request, response) {
  response.send(fileContents.toString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
