const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const tagRouter = require("./tag");
const typeRouter = require("./type");

router.use("/auth", userRouter);
router.use("/tag", tagRouter);
router.use("/type", typeRouter);

module.exports = router;
