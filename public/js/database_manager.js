// One type of unit to start
// Fighter



/*
Base entity properties
xPos, yPos
*/

var gun,
    fighters;

function setupDb () {
  gun = Gun("http://localhost:9000/gun");
  fighters = gun.get("/entities/fighter");

  /*
  fighters.map().val(function (fighter, id) {
    if (fighter) {
      console.log(fighter);
    }
  });
  */
}

function spawnFighter (pos) {
  var newFighter = { x: pos.x, y: pos.y };
  fighters.set(newFighter);
}