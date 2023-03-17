const Model = require("../utils/model");

class UserModel extends Model {
  constructor() {
    super("users");
  }

  async insert(user) {
    const create = await this.query({
      insert: [user],
    });
    return create;
  }

  async getUser(email) {
    const user = await this.query({
      where: { email },
    });
    return user;
  }
}

module.exports = new UserModel();
