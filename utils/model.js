const knex = require("./database");

class Model {
  constructor(tableName) {
    this.knex = knex;
    this.tableName = tableName;
  }

  async query(params) {
    const query = knex(this.tableName);

    return Object.entries(params).reduce((q, [key, value]) => {
      switch (key) {
        case "table":
          break;
        case "select":
          q.select(value);
          break;
        case "where":
          q.where(value);
          break;
        case "whereIn":
          q.whereIn(...value);
          break;
        case "orderBy":
          q.orderBy(...value);
          break;
        case "groupBy":
          q.groupBy(value);
          break;
        case "limit":
          q.limit(value);
          break;
        case "offset":
          q.offset(value);
          break;
        case "join":
          value.forEach(([table, column1, operator, column2]) => {
            q.join(table, column1, operator, column2);
          });
          break;
        case "insert":
          q.insert(value);
          break;
        default:
          q.where(key, value);
          break;
      }
      return q;
    }, query);
  }

  async getAll() {
    return knex(this.table);
  }

  async find(filter) {
    return knex(this.table).where(filter);
  }

  async findById(id) {
    return knex(this.table).where({ id }).first();
  }

  async create(data) {
    return knex(this.table).insert(data).returning("*");
  }

  async update(id, data) {
    return knex(this.table).where({ id }).update(data).returning("*");
  }

  async delete(id) {
    return knex(this.table).where({ id }).del();
  }
}

module.exports = Model;
