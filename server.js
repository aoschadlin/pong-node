var http = require('http');

var serv = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello world\n');
});

serv.listen(8000);
console.log('Server running on port 8000');
