const Model = require("../utils/model");

class TagModel extends Model {
  constructor() {
    super("tags");
  }

  async insert() {
    /*return await this.query({
      table: "tags",
      insert: [{ nome: "ConstrutorName" }],
    });*/
  }

  async list() {
    //const sql = this.query();
    return await this.query({ table: "tags" });
  }
}

module.exports = new TagModel();
