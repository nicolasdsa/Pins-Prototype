const express = require("express");
const router = express.Router();
module.exports = router;
const userRouter = require("./user");

router.use("/auth", userRouter);

module.exports = router;
