const express = require("express");
const router = express.Router();
const routeMiddleware = require("../../middlewares/route");
const list = require("./list");
const create = require("./create");

router.get("/", routeMiddleware(list));
router.post("/", routeMiddleware(create));

module.exports = router;
