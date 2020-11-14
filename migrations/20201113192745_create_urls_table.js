exports.up = function (knex) {
  return knex.schema.createTable("urls", (table) => {
    table.increments("id");
    table.string("url", 1024).notNullable();
    table.string("hash", 512);
    table.integer("visited").defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("urls");
};
