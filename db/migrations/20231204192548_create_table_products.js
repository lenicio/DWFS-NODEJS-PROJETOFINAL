exports.up = function(knex) {
  return knex.schema.createTable('products', function(table) {
    table.increments('id');
    table.string('description').notNullable();
    table.decimal('price').notNullable();
    table.string('brand').notNullable();
  });
};


exports.down = function(knex) {
  return knex.schema.dropTableIfExists('products');
};
