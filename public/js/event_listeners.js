function onMouseMove (canvas, event, mousePos) {
  localPlayerState.mouseX = mousePos.x;
  localPlayerState.mouseY = mousePos.y;
}

function onMouseDown (canvas, event, mousePos) {
  localPlayerState.mouseX = mousePos.x;
  localPlayerState.mouseY = mousePos.y;
  var isRightButton = isRightMouseButton (event);

  if (!isRightButton) {
    localPlayerState.leftMouseDown = true;
  } else {
    localPlayerState.rightMouseDown = true;
  }
  console.log(localPlayerState);
}

function onMouseUp (canvas, event, mousePos) {
  localPlayerState.mouseX = mousePos.x;
  localPlayerState.mouseY = mousePos.y;
  var isRightButton = isRightMouseButton (event);

  if (!isRightButton) {
    localPlayerState.leftMouseDown = false;
  } else {
    localPlayerState.rightMouseDown = false;
  }
  console.log(localPlayerState);
}

function setupEventListeners (canvas) {
  canvas.addEventListener('mousemove', function (event) {
    var mousePos = getMousePosOnCanvas(canvas, event);
    onMouseMove(canvas, event, mousePos);
  }, false);

  canvas.addEventListener('mousedown', function (event) {
    var mousePos = getMousePosOnCanvas(canvas, event);
    onMouseDown(canvas, event, mousePos);
  }, false);

  canvas.addEventListener('mouseup', function (event) {
    var mousePos = getMousePosOnCanvas(canvas, event);
    onMouseUp(canvas, event, mousePos);
  }, false);
}