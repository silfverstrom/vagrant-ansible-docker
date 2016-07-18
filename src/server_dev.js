var express = require('express');
var app = express();

app.get('/', function (req, res) {
      res.send('Hello World, this is a dev machine!');
});

app.listen(8888, function () {
      console.log('Example app listening on port 8888!');
});
