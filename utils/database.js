const { Client } = require("pg");

class DataBase {
  constructor() {
    this.host = "localhost";
    this.database = "map";
    this.user = "postgres";
    this.password = "98x$9eg72JLz";
    this.port = 5432;
  }

  async init() {
    const client = new Client({
      user: this.user,
      host: this.host,
      database: this.database,
      password: this.password,
      port: this.port,
    });
  }

  /*async query(query) {
    return await this.connection.execute(query);
  }*/
}

module.exports = new DataBase();
