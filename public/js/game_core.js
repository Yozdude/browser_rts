var canvas = document.getElementById("gameCanvas"),
    ctx = canvas.getContext("2d"),
    width = canvas.width,
    height = canvas.height,
    FPS = 30;

localStorage.clear();

setupDb();
setupEventListeners(canvas);

setInterval(function() {
  update();
  draw();
}, 1000/FPS);

function update() {

}

function draw() {
  // Clear the canvas
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, width, height);

  // Draw selection field
  if (localPlayerState.leftMouseDown) {
    ctx.strokeStyle = "#fff";
    var rect = cornersToRect(localPlayerState.leftMouseDown, localPlayerState.mousePos);
    ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
  }

  // Spawn units
  if (localPlayerState.rightMouseDown && localPlayerState.rightMouseDownNew) {
    spawnFighter(localPlayerState.rightMouseDown);
    localPlayerState.rightMouseDownNew = false;
  }

  fighters.map().val(function (fighter, id) {
    if (fighter) {
      ctx.fillStyle = "#bbb";
      ctx.fillRect(fighter.x - 4, fighter.y - 4, 8, 8);
    }
  });
}