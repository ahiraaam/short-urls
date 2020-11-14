exports.up = function (knex) {
  return knex.schema.createTable("urlsConplete", (table) => {
    table.increments("id");
    table.string("url", 1024).notNullable();
    table.string("hash", 512);
    table.string("shortUrl", 512).defaultTo("none");
    table.integer("visited").defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {};
