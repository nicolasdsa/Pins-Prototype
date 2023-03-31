const Joi = require("joi");
const typeUserController = require("../../controllers/typeUser");
const ApiError = require("../../utils/apiError");

const bodySchema = Joi.object({
  tipo: Joi.string().required(),
  descricao: Joi.string().required(),
});

const paramsSchema = Joi.object({
  id: Joi.number().integer().required(),
});

const route = async (req, res) => {
  const [type] = await typeUserController.findById(req.params.id);

  if (!type) {
    throw ApiError.NotFound("Este tipo de usuario não existe.", {});
  }

  const update = await typeUserController.update(req.body, req.params.id);

  return res.status(200).send({ success: true });
};

module.exports = { route, bodySchema, paramsSchema };
