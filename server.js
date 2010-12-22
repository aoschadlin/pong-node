var express = require('express');
var app = module.exports = express.createServer();
var io = require('socket.io');

app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyDecoder());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.staticProvider(__dirname + '/public'));
});

app.get('/', function(req, res) {
  res.render('index', {
    comment: 'Hello world'
  });
});

app.post('/main', function(req, res) {
  res.render('main', {
    status: 'inside post'
  });
});

var socket = io.listen(server);

io.on('connection', function(client){
});

app.listen(8080);
console.log('Server running on port %d', app.address().port);
