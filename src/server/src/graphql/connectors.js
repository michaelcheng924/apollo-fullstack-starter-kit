const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("database.sqlite");

db.serialize();

const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "database.sqlite"
  },
  useNullAsDefault: true
});

knex.schema.hasTable("count").then(hasTable => {
  if (!hasTable) {
    knex.schema
      .createTable("count", table => {
        table.increments("id");
        table.integer("value");
      })
      .then(() => {
        knex("count")
          .insert({
            value: 1
          })
          .then(() => {
            console.log('Table "count" created and seeded');
          });
      });
  }
});

export default knex;
