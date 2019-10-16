const express = require("express");

const routerConfig = require("../api/routes/router");

const server = express();
server.use(express.json());

routerConfig(server);

server.get("/", (req, res) => {
  res.send("server running");
});

module.exports = server;
