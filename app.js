var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile('/index.html');
});

app.listen(process.env.PORT || 5000, function(){
  console.log("server started");
});
