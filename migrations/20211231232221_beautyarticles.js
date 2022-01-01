exports.up = function (knex) {
    return knex.schema.createTable('beautyarticles', function (table) {
      table.increments('id')
      table.string('title')
      table.datetime('datetime')
      table.integer('commentcount')
      table.string('paragraphs')
    })
  };

exports.down = function(knex) {
    return knex.schema.dropTable('beautyarticles')
};
