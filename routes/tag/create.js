const TagController = require("../../controllers/tag");

const route = async (req, res) => {
  const create = await TagController.create();

  return res.status(200).send({ success: true });
};

module.exports = route;
