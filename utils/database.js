class DataBase {
  constructor() {
    this.host = "localhost";
    this.database = "map";
    this.user = "postgres";
    this.password = "98x$9eg72JLz";
    this.port = 5432;
  }

  async init() {
    const knex = require("knex")({
      client: "pg",
      connection: {
        host: this.host,
        port: this.port,
        user: this.user,
        password: this.password,
        database: this.database,
      },
    });
  }
}

module.exports = new DataBase();
