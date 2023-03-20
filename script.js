const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

let ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 10,
  speed: 5,
  dx: 5,
  dy: -5,
};

let paddle = {
  x: canvas.width / 2 - 50,
  y: canvas.height - 20,
  width: 100,
  height: 10,
  speed: 10,
  dx: 0,
};

let bricks = [];
let brickRowCount = 5;
let brickColumnCount = 8;

let score = 0;
let maxScore = brickRowCount * brickColumnCount;

function createBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
  }
}

createBricks();

function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status === 1) {
        let brickX = c * (80 + 10) + 45;
        let brickY = r * (20 + 10) + 30;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, 80, 20);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      let b = bricks[c][r];
      if (b.status === 1) {
        if (
          ball.x > b.x &&
          ball.x < b.x + 80 &&
          ball.y > b.y &&
          ball.y < b.y + 20
        ) {
          ball.dy = -ball.dy;
          b.status = 0;
          score++;
          if (score === maxScore) {
            alert("Tebrikler! Kazandınız!");
            document.location.reload();
          }
        }
      }
    }
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function moveBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;
  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.dx = -ball.dx;
  }
  if (ball.y - ball.radius < 0) {
    ball.dy = -ball.dy;
  } else if (ball.y + ball.radius > canvas.height - paddle.height) {
    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
      ball.dy = -ball.dy;
    } else {
      alert("Oyun Bitti!");
      document.location.reload();
    }
  }
}

function movePaddle() {
  paddle.x += paddle.dx;
  if (paddle.x < 0) {
    paddle.x = 0;
  }
  if (paddle.x + paddle.width > canvas.width) {
    paddle.x = canvas.width - paddle.width;
  }
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Puan: " + score, 10, 20);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawBricks();
  collisionDetection();
  drawScore();
  moveBall();
  movePaddle();
  requestAnimationFrame(draw);
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(event) {
  if (event.key === "Right" || event.key === "ArrowRight") {
    paddle.rightPressed = true;
  } else if (event.key === "Left" || event.key === "ArrowLeft") {
    paddle.leftPressed = true;
  }
}

function keyUpHandler(event) {
  if (event.key === "Right" || event.key === "ArrowRight") {
    paddle.rightPressed = false;
  } else if (event.key === "Left" || event.key === "ArrowLeft") {
    paddle.leftPressed = false;
  }
}
function movePaddle() {
  if (paddle.rightPressed && paddle.x < canvas.width - paddle.width) {
    paddle.x += paddle.speed;
  } else if (paddle.leftPressed && paddle.x > 0) {
    paddle.x -= paddle.speed;
  }
}

draw();
