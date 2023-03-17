const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const tagRouter = require("./tag");

module.exports = router;

router.use("/auth", userRouter);
router.use("/tag", tagRouter);

module.exports = router;
