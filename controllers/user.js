const userModel = require("../models/user");

class UserController {
  static async create(user) {
    return userModel.insert(user);
  }

  /*static async getUser(email){
        const [user] = await userModel.getUser(email);
        return user;
    }*/

  /*static async deleteById(id){
        return equipmentModel.deleteById(id);
    }*/
}

module.exports = UserController;
