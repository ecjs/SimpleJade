var express = require('express'),
        app = express(),
        port = process.env.PORT || 3000;

app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('index',   // renders index.jade file
    {title: 'Simple Jade', msg: 'Hello, we are the index'});
});

app.get('/jade', function(req, res) {
  res.render('JadePage',  // renders JadePage.jade
    {title: 'Simple Jade', msg: 'Figuring out how to use jade'});
});

app.get('/lorem', function(req, res) {
  res.render('lorem',
    {title: 'Simple Jade', msg: 'Figuring out how to use jade'});
});

app.get('/*', function(req, res) {    // catch all last here.
  res.render('last',
    {title: 'Simple Jade', msg: 'Figuring out how to use jade'});
});


var server = app.listen(port, function(req, res) {
  var listening = server.address().port;
  console.log('Now listening on port' + listening);
});
