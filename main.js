const path = require("path")
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.use("/public", express.static(path.join(__dirname, "public")))

app.listen(3000)