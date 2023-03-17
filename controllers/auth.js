const bcrypt = require("bcryptjs");
const UserController = require("./user");
const jwt = require("jsonwebtoken");
const ApiError = require("../utils/apiError");

const secret = "9uC&g@4HX^xFgTf10o!7";

class AuthController {
  static async signup({ email, password, username }) {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);

    const [user] = await UserController.getUser(email);

    if (user) {
      throw ApiError.badRequest("Este Email já está sendo utilizado.", {});
    }

    const id = await UserController.create({
      email,
      password: hash,
      username,
    });

    return id;
  }

  static async signin({ email, password }) {
    const [user] = await UserController.getUser(email);

    if (!user) {
      throw ApiError.NotFound("O usuario não existe.", {});
    }

    const isValidPassword = bcrypt.compareSync(password, user.password);

    if (!isValidPassword) {
      throw ApiError.NotFound("Senha Incorreta.", {});
    }

    const token = jwt.sign({ email: user.senha }, secret);

    return token;
  }
}

module.exports = AuthController;
