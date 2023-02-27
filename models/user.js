const knex = require("../utils/database");

class UserModel {
  async insert({ email, password }) {
    knex("users").insert({ email, password });
  }

  /*async getUser(email) {
    const params = [email];
    const sql = `SELECT * FROM ${this.tableName} WHERE email = ?`;
    return this.query(sql, params);
  }*/
}

module.exports = new UserModel();
