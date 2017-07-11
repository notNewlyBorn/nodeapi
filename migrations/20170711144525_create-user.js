exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table) => {
    table.increments();
    table.text('name');
    table.float('point');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
