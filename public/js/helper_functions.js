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

window.oncontextmenu = function () {
    return false;
}