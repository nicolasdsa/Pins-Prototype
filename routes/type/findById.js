const Joi = require("joi");
const typeUserController = require("../../controllers/typeUser");
const ApiError = require("../../utils/apiError");

const paramsSchema = Joi.object({
  id: Joi.number().integer().required(),
});

const route = async (req, res) => {
  const [type] = await typeUserController.findById(req.params.id);

  if (!type) {
    throw ApiError.NotFound("Este tipo de usuario não existe.", {});
  }

  return res.status(200).send(type);
};

module.exports = { route, paramsSchema };
