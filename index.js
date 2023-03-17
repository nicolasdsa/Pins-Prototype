const express = require("express");
const server = express();
const routes = require("./routes");

server.use(express.json());

server.listen(3000, async () => {
  console.log("alo");
});

server.use("/", routes);
