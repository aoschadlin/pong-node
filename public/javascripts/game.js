
var paddleLeft = {yPos: "200", height: "80"}
  , paddleRight = {yPos: "200", height: "80"}
  , balls = {xPos: "150", yPos: "150", vel: "10"}
  , gameLoop;

function getContext() {
  var canvas = document.getElementById('tutorial');
  return canvas.getContext('2d');
}

function drawPaddles() {
  var ctx = getContext();

  // Draw details for the left paddle
  ctx.fillStyle = "rgb(200, 0, 0, 0.5)";
  ctx.fillRect (10, paddleLeft.yPos, 30, paddleLeft.yPos + paddleLeft.height);

  // Draw details for the right paddle
  ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
  ctx.fillRect (560, paddleRight.yPos, 30, paddleRight.yPos + paddleRight.height);
}

function drawBalls() {
}

function startGame() {
  gameLoop = setTimeout(function() {
    if (gamePlaying) {
      drawPaddles();
      drawBalls();
    }
  }, 50);
}

