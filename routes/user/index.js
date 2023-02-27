const express = require("express");
const router = express.Router();
const signup = require("./signup");
const signin = require("./signin");
const routeMiddleware = require("../../middlewares/route");
const validationMiddleware = require("../../middlewares/validation");

router.post("/signup", validationMiddleware({bodySchema: signup.bodySchema}), routeMiddleware(signup.route));
router.post("/signin", validationMiddleware({bodySchema: signin.bodySchema}), routeMiddleware(signin.route));

module.exports = router;
