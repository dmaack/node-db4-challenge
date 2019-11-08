
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      tbl
        .string('name', 255)
        .notNullable();
      tbl
        .integer('servings', 3);
      tbl
        .decimal('total_time', 155);
      tbl
        .boolean('favorite', 2);

  })
  .createTable('ingredients', tbl => {
    tbl.increments();
    tbl
        .string('name', 255)
        .notNullable();

  })
  .createTable('recipe_ingredients', tbl => {
    tbl.increments();
    tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    tbl
        .integer('ingredient_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    tbl
        .decimal('quantity')
        .string('unit')

  })
  .createTable('steps', tbl => {
      tbl.increments();
      tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl
        .string('directions')
      tbl
        .integer('order')

  })
};

exports.down = function(knex) {
    dropTableIfExists('recipe_ingredients');
    dropTableIfExists('recipes');
    dropTableIfExists('ingredients');
    dropTableIfExists('steps');
};
