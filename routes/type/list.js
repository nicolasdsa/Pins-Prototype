const typeUserController = require("../../controllers/typeUser");

const route = async (req, res) => {
  const list = await typeUserController.list();
  return res.status(200).send(list);
};

module.exports = route;
