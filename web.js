var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Neville says -- Hello Web! -- latest realzzzz');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});