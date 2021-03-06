
exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('position').notNullable();
    table.float('ppg').notNullable();
    table.float('apg').notNullable();
    table.float('fgp').notNullable();
    table.float('twopp').notNullable();
    table.float('twoapg').notNullable();
    table.float('threepp').notNullable();
    table.float('threeapg').notNullable();
    table.float('ftp').notNullable();
    table.float('ftapg').notNullable();
    table.float('rpg').notNullable();
    table.float('orpg').notNullable();
    table.float('bpg').notNullable();
    table.float('spg').notNullable();
    table.float('tpg').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players')
};
