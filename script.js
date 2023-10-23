const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions
canvas.width = 800;
canvas.height = 600;

// Dot properties
const dot = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 10,
  speed: 5,
};

// Enemy block properties
const enemies = [];

// Create up to 20 enemy blocks
for (let i = 0; i < 20; i++) {
  enemies.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 20,
    speed: 2 + Math.random() * 2,
    direction: Math.random() < 0.5 ? 1 : -1, // 1 for right, -1 for left
  });
}

// Game state
let isGameOver = false;

// Handle user input
const keys = {};

window.addEventListener("keydown", (e) => {
  keys[e.key] = true;

  if (isGameOver && (e.key === "Enter" || e.key === " ") && !keys[e.key]) {
    // Restart the game
    restartGame();
  }
});

window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

// Function to restart the game
function restartGame() {
  isGameOver = false;

  // Reset dot position
  dot.x = canvas.width / 2;
  dot.y = canvas.height / 2;

  // Reset enemy positions
  for (const enemy of enemies) {
    enemy.x = Math.random() * canvas.width;
    enemy.y = Math.random() * canvas.height;
  }
}

// Update function
function update() {
  if (!isGameOver) {
    // Move each enemy block
    for (const enemy of enemies) {
      enemy.x += enemy.speed * enemy.direction;

      // If an enemy block goes off the screen, reset its position
      if (enemy.x < -enemy.size || enemy.x > canvas.width + enemy.size) {
        enemy.x = enemy.direction === 1 ? -enemy.size : canvas.width + enemy.size;
        enemy.y = Math.random() * canvas.height;
        enemy.speed = 2 + Math.random() * 2;
        enemy.direction = enemy.direction === 1 ? -1 : 1;
      }

      // Check for collision with the enemy block
      if (
        dot.x - dot.size / 2 < enemy.x + enemy.size / 2 &&
        dot.x + dot.size / 2 > enemy.x - enemy.size / 2 &&
        dot.y - dot.size / 2 < enemy.y + enemy.size / 2 &&
        dot.y + dot.size / 2 > enemy.y - enemy.size / 2
      ) {
        isGameOver = true;
      }
    }

    if (keys["ArrowUp"] && dot.y - dot.speed > 0) {
      dot.y -= dot.speed;
    }
    if (keys["ArrowDown"] && dot.y + dot.speed < canvas.height) {
      dot.y += dot.speed;
    }
    if (keys["ArrowLeft"] && dot.x - dot.speed > 0) {
      dot.x -= dot.speed;
    }
    if (keys["ArrowRight"] && dot.x + dot.speed < canvas.width) {
      dot.x += dot.speed;
    }
  }
}

// Render function
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!isGameOver) {
    // Draw each enemy block
    ctx.fillStyle = "red";
    for (const enemy of enemies) {
      ctx.fillRect(enemy.x, enemy.y, enemy.size, enemy.size);
    }

    // Draw player's dot
    ctx.fillStyle = "white";
    ctx.fillRect(dot.x - dot.size / 2, dot.y - dot.size / 2, dot.size, dot.size);
  } else {
    // Game over screen
    ctx.fillStyle = "red";
    ctx.font = "30px Arial";
    ctx.fillText("Game Over! Press Enter or Space to Restart", canvas.width / 2 - 250, canvas.height / 2);
  }
}

// Game loop
function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
