const TagController = require("../../controllers/tag");

const route = async (req, res) => {
  const list = await TagController.list();

  return res.status(200).send({ list });
};

module.exports = route;
