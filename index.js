const express = require("express");
const server = express();
const database = require("./utils/database");
const bodyParser = require("body-parser");
const routes = require("./routes");

server.use(bodyParser.json());

server.listen(3000, async () => {
  await database.init();
  console.log("alo");
});

server.use("/", routes);
