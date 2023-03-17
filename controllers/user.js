const userModel = require("../models/user");

class UserController {
  static async create(user) {
    const create = await userModel.insert(user);
    return create;
  }

  static async getUser(email) {
    const getUser = await userModel.getUser(email);
    console.log(getUser);
    return getUser;
  }
}

module.exports = UserController;
