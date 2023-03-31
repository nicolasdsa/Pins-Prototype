const express = require("express");
const router = express.Router();
const routeMiddleware = require("../../middlewares/route");
const validateMiddleware = require("../../middlewares/validation");
const list = require("./list");
const update = require("./update");
const create = require("./create");
const deleteById = require("./delete");
const findById = require("./findById");

router.post(
  "/",
  validateMiddleware({ bodySchema: create.bodySchema }),
  routeMiddleware(create.route)
);
router.get("/", routeMiddleware(list));

router.get(
  "/:id",
  validateMiddleware({ paramsSchema: findById.paramsSchema }),
  routeMiddleware(findById.route)
);

router.put(
  "/:id",
  validateMiddleware({
    bodySchema: update.bodySchema,
    paramsSchema: update.paramsSchema,
  }),
  routeMiddleware(update.route)
);

router.delete(
  "/:id",
  validateMiddleware({
    paramsSchema: deleteById.paramsSchema,
  }),
  routeMiddleware(deleteById.route)
);

module.exports = router;
