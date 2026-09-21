const canvas = document.getElementById('game-canvas');
const context = canvas.getContext('2d');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const messageElement = document.getElementById('game-message');
const resetButton = document.getElementById('reset-button');

const court = { width: canvas.width, height: canvas.height };
const paddle = { width: 16, height: 104, speed: 8 };
const ball = { size: 14, speed: 6, maxSpeed: 11 };

const player = { x: 30, y: 0, score: 0, velocity: 0 };
const computer = { x: court.width - 46, y: 0, score: 0, velocity: 0 };
const keys = new Set();
let animationFrame;
let gameStarted = false;

function resetBall(direction = Math.random() > 0.5 ? 1 : -1) {
  ball.x = court.width / 2 - ball.size / 2;
  ball.y = court.height / 2 - ball.size / 2;
  ball.velocityX = direction * ball.speed;
  ball.velocityY = (Math.random() * 4 - 2) || 1;
  gameStarted = false;
  messageElement.textContent = 'Press an arrow key to serve';
  messageElement.classList.remove('hidden');
}

function resetGame() {
  player.score = 0;
  computer.score = 0;
  playerScoreElement.textContent = '0';
  computerScoreElement.textContent = '0';
  player.y = court.height / 2 - paddle.height / 2;
  computer.y = player.y;
  resetBall();
}

function serve() {
  if (!gameStarted) {
    gameStarted = true;
    messageElement.classList.add('hidden');
  }
}

function movePlayer() {
  const movingUp = keys.has('ArrowUp') || keys.has('w');
  const movingDown = keys.has('ArrowDown') || keys.has('s');
  player.velocity = (movingDown ? paddle.speed : 0) - (movingUp ? paddle.speed : 0);
  player.y = Math.max(0, Math.min(court.height - paddle.height, player.y + player.velocity));
}

function moveComputer() {
  const target = ball.y + ball.size / 2 - paddle.height / 2;
  const difference = target - computer.y;
  const movement = Math.sign(difference) * Math.min(Math.abs(difference), 5.3);
  computer.y = Math.max(0, Math.min(court.height - paddle.height, computer.y + movement));
}

function overlaps(paddleObject) {
  return (
    ball.x < paddleObject.x + paddle.width &&
    ball.x + ball.size > paddleObject.x &&
    ball.y < paddleObject.y + paddle.height &&
    ball.y + ball.size > paddleObject.y
  );
}

function bounceFromPaddle(paddleObject, direction) {
  const paddleCenter = paddleObject.y + paddle.height / 2;
  const ballCenter = ball.y + ball.size / 2;
  const impact = (ballCenter - paddleCenter) / (paddle.height / 2);
  const nextSpeed = Math.min(ball.maxSpeed, Math.abs(ball.velocityX) + 0.35);
  ball.velocityX = direction * nextSpeed;
  ball.velocityY = impact * 6;
  ball.x = direction === 1 ? paddleObject.x + paddle.width : paddleObject.x - ball.size;
}

function scorePoint(scoringPlayer) {
  scoringPlayer.score += 1;
  playerScoreElement.textContent = String(player.score);
  computerScoreElement.textContent = String(computer.score);
  resetBall(scoringPlayer === player ? 1 : -1);
}

function update() {
  movePlayer();
  moveComputer();
  if (!gameStarted) return;

  ball.x += ball.velocityX;
  ball.y += ball.velocityY;

  if (ball.y <= 0 || ball.y + ball.size >= court.height) {
    ball.velocityY *= -1;
    ball.y = Math.max(0, Math.min(court.height - ball.size, ball.y));
  }

  if (ball.velocityX < 0 && overlaps(player)) bounceFromPaddle(player, 1);
  if (ball.velocityX > 0 && overlaps(computer)) bounceFromPaddle(computer, -1);

  if (ball.x + ball.size < 0) scorePoint(computer);
  if (ball.x > court.width) scorePoint(player);
}

function draw() {
  context.clearRect(0, 0, court.width, court.height);
  context.fillStyle = '#101729';
  context.fillRect(0, 0, court.width, court.height);

  context.setLineDash([8, 14]);
  context.strokeStyle = '#36415f';
  context.lineWidth = 3;
  context.beginPath();
  context.moveTo(court.width / 2, 18);
  context.lineTo(court.width / 2, court.height - 18);
  context.stroke();
  context.setLineDash([]);

  context.fillStyle = '#7ee7cc';
  context.fillRect(player.x, player.y, paddle.width, paddle.height);
  context.fillStyle = '#f8b26a';
  context.fillRect(computer.x, computer.y, paddle.width, paddle.height);

  context.fillStyle = '#f5f7ff';
  context.beginPath();
  context.arc(ball.x + ball.size / 2, ball.y + ball.size / 2, ball.size / 2, 0, Math.PI * 2);
  context.fill();
}

function gameLoop() {
  update();
  draw();
  animationFrame = requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (event) => {
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 's'].includes(event.key)) {
    event.preventDefault();
    keys.add(event.key);
    if (event.key.startsWith('Arrow')) serve();
  }
});

document.addEventListener('keyup', (event) => keys.delete(event.key));
resetButton.addEventListener('click', resetGame);

resetGame();
gameLoop();

window.addEventListener('beforeunload', () => cancelAnimationFrame(animationFrame));
