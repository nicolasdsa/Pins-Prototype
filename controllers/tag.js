const TagModel = require("../models/tag");

class TagController {
  static async create() {
    return await TagModel.insert();
  }

  static async list() {
    const list = await TagModel.list();
    return list;
  }
}

module.exports = TagController;
