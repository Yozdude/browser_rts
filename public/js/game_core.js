var canvas = document.getElementById("gameCanvas"),
	ctx = canvas.getContext("2d"),
	width = canvas.width,
	height = canvas.height,
	FPS = 30;

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


}