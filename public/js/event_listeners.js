function onMouseMove (canvas, event, mousePos) {
  localPlayerState.mousePos = mousePos;
}

function onMouseDown (canvas, event, mousePos) {
  localPlayerState.mousePos = mousePos;
  var isRightButton = isRightMouseButton (event);

  if (!isRightButton) {
    localPlayerState.leftMouseDown = { x: mousePos.x, y: mousePos.y };
    localPlayerState.leftMouseDownNew = true;
  } else {
    localPlayerState.rightMouseDown = { x: mousePos.x, y: mousePos.y };
    localPlayerState.rightMouseDownNew = true;
  }
}

function onMouseUp (canvas, event, mousePos) {
  localPlayerState.mousePos = mousePos;
  var isRightButton = isRightMouseButton (event);

  if (!isRightButton) {
    localPlayerState.leftMouseDown = undefined;
    localPlayerState.leftMouseDownNew = true;
  } else {
    localPlayerState.rightMouseDown = undefined;
    localPlayerState.rightMouseDownNew = true;
  }
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