// Disable the right-click menu
window.oncontextmenu = function () {
    return false;
}

function getMousePosOnCanvas (canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

function isRightMouseButton (event) {
  if ("which" in event) { // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
    return event.which == 3; 
  } else if ("button" in event) { // IE, Opera 
    return event.button == 2;
  }
}

function cornersToRect (cornerA, cornerB) {
  var minX = Math.min(cornerA.x, cornerB.x),
      maxX = Math.max(cornerA.x, cornerB.x),
      minY = Math.min(cornerA.y, cornerB.y),
      maxY = Math.max(cornerA.y, cornerB.y);
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}