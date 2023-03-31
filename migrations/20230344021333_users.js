/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").unique().notNullable();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.string("username").notNullable().unique();
    table.boolean("is_verified").defaultTo(false).notNullable();
    table
      .integer("job_id")
      .unsigned()
      .references("id")
      .inTable("jobs")
      .onDelete("CASCADE");
    table
      .integer("type_id")
      .unsigned()
      .references("id")
      .inTable("type_users")
      .onDelete("CASCADE");
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
    table.timestamp("updated_at").defaultTo(knex.fn.now()).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
