const path = require("path");
const express = require('express');
const app = express();
const Gun = require('gun');


var gun = Gun("http://localhost:9000/gun");

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(3000);




var fighters = gun.get("/entities/fighter");

setInterval(function() {
  fighters.map().val(function (fighter, id) {
    if (fighter) {
      if (fighter.x > 500 || fighter.y > 500) {
        fighters.path(id).put(null);
      } else {
        fighter.x += 1;
        fighters.path(id).put(fighter);
      }
    }
  });
}, 100);