var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffer = new Buffer(100);
    buffer.write(fs.readFileSync("index.html"), "utf-8");
    response.send(buffer.toString("utf-8", 0, 19));
  response.send('Neville says -- Hello Web! -- latest realaay');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});