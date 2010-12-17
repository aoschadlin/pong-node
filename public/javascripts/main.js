
function send() {
  // Send the nickname to the server
  var val = document.getElementById('nickname').value;
  socket.send(val);

  // modify the main panel div
  var el = document.getElementById('mainpanel');
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
/*
  var newEl = document.createElement('<canvas id="cvs" width="600" height="400"></canvas>');
  document.getElementById('mainpanel').appendChild(newEl);
*/
}

var socket = new io.Socket(null, {port: 8001, rememberTransport: false});
socket.connect();
socket.on('message', function(obj) {
  if ('buffer' in obj) {
  } else {
  }
});
