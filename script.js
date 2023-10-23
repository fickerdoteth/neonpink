const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 1080;
canvas.height = 720; // Set the canvas size to 1080x720

const player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 5,
  speed: 2,
  velocityX: 1.5,
  velocityY: 1.5,
  friction: 0.1, // Friction factor to slow down the player
};

const enemies = [];
const maxEnemies = 50; // Increase the number of enemies

function createEnemy() {
  const fromLeft = Math.random() < 0.5;
  const x = fromLeft ? -20 : canvas.width + 20;
  const y = Math.random() * canvas.height;
  const speedX = fromLeft ? 1 + Math.random() * 2 : -1 - Math.random() * 2;

  const radius = getRandomEnemySize(); // Get a random enemy size

  enemies.push({ x, y, radius, speedX });
}

function getRandomEnemySize() {
  // Generate random enemy sizes: small, medium, big, huge
  const sizes = [10, 15, 20, 25];
  return sizes[Math.floor(Math.random() * sizes.length)];
}

function handleEnemies() {
  if (enemies.length < maxEnemies) {
    createEnemy();
  }

  for (let i = enemies.length - 1; i >= 0; i--) {
    const enemy = enemies[i];
    enemy.x += enemy.speedX;

    if (enemy.x < -20 || enemy.x > canvas.width + 20) {
      enemies.splice(i, 1);
      createEnemy();
    }

    const dx = enemy.x - player.x;
    const dy = enemy.y - player.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < player.radius + enemy.radius) {
      // Handle collision, for example, end the game
      // You can add your custom game logic here
    }
  }
}

function drawPlayer() {
  ctx.fillStyle = "#FF10F0"; // White player
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
  ctx.fill();
}

function drawEnemies() {
  ctx.fillStyle = "#FFFFFF"; // White enemies
  for (const enemy of enemies) {
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function movePlayer() {
  player.velocityX *= player.friction;
  player.velocityY *= player.friction;

  if (keys["ArrowUp"]) {
    player.velocityY -= player.speed;
  }
  if (keys["ArrowDown"]) {
    player.velocityY += player.speed;
  }
  if (keys["ArrowLeft"]) {
    player.velocityX -= player.speed;
  }
  if (keys["ArrowRight"]) {
    player.velocityX += player.speed;
  }

  player.x += player.velocityX;
  player.y += player.velocityY;

  // Keep the player within the canvas boundaries
  if (player.x - player.radius < 0) {
    player.x = player.radius;
    player.velocityX = 0;
  } else if (player.x + player.radius > canvas.width) {
    player.x = canvas.width - player.radius;
    player.velocityX = 0;
  }

  if (player.y - player.radius < 0) {
    player.y = player.radius;
    player.velocityY = 0;
  } else if (player.y + player.radius > canvas.height) {
    player.y = canvas.height - player.radius;
    player.velocityY = 0;
  }
}

const keys = {};

window.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

function update() {
  movePlayer();
  handleEnemies();
}

function render() {
  // Set the background color to black
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawEnemies();
  drawPlayer();
}

function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

gameLoop();
