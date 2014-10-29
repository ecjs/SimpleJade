var express = require('express'),
        app = express(),
        port = process.env.PORT || 3000;

app.set('view engine', 'jade');

app.get('/jade', function(req,res){
  res.render('index', {title: "Simple Jade", msg: "Figuring out how to use jade"});
});

var server = app.listen(port, function (req,res) {
  var listening = server.address().port;
  console.log("Now listening on port " + listening);
});
