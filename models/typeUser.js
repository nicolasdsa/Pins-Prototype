const Model = require("../utils/model");

class typeUserModel extends Model {
  constructor() {
    super("type_users");
  }

  async insert(type) {
    const create = await this.query({
      insert: [type],
    });
    return create;
  }

  async list() {
    const list = await this.query({});
    console.log(list);
    return list;
  }

  async findById(id) {
    const type = await this.query({
      where: { id },
    });
    return type;
  }

  async update(typeEdit, id) {
    const type = await this.query({
      where: { id },
      update: typeEdit,
    });
    return type;
  }

  async deleteById(id) {
    const deleteById = await this.query({
      where: { id },
      delete: true,
    });
  }
}

module.exports = new typeUserModel();
