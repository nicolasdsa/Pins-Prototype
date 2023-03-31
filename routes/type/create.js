const Joi = require("joi");
const typeUserController = require("../../controllers/typeUser");

const bodySchema = Joi.object({
  tipo: Joi.string().required(),
  descricao: Joi.string().required(),
});

const route = async (req, res) => {
  const create = await typeUserController.create(req.body);

  return res.status(200).send({ success: true });
};

module.exports = { route, bodySchema };
