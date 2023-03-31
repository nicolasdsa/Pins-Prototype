const typeUserModel = require("../models/typeUser");

class typeUserController {
  static async create(type) {
    const create = await typeUserModel.insert(type);
    return create;
  }

  static async list() {
    const list = await typeUserModel.list();
    return list;
  }

  static async findById(id) {
    const type = await typeUserModel.findById(id);
    return type;
  }

  static async update(typeEdit, id) {
    const type = await typeUserModel.update(typeEdit, id);
    return type;
  }

  static async deleteById(id) {
    const deleteById = await typeUserModel.deleteById(id);
    return deleteById;
  }
}

module.exports = typeUserController;
