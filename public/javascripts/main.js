
function send() {
  // Send the nickname to the server
  var val = document.getElementById('nickname').value;
  socket.send(val);
}

// Don't set the socket connection up until we're ready to use it
var socket;

function setupPlayer() {
  console.log('setupPlayer : starting');
  socket = new io.Socket(null, {port: 8080, rememberTransport: false});
  socket.connect();
  socket.on('message', function(obj) {
    console.log('Message received : ' + obj);
  });

  startGame();
}
