const Joi = require("joi");
const AuthController = require("../../controllers/auth");

const bodySchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .regex(/^(?=.*\d).{4,16}$/)
    .required(),
});

const route = async (req, res) => {
  const token = await AuthController.signin(req.body);

  return res.status(200).send({
    token,
  });
};

module.exports = { route, bodySchema };
