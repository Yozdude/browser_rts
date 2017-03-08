const http = require('http'),
      Gun = require('gun')

var gun = new Gun(),
    server = new http.Server();
server.on('request', gun.wsp.server);
gun.wsp(server);
server.listen(9000);