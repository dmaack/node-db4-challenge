exports.seed = function(knex) {
  return knex('recipe_ingredients').insert([
    // mashed potatoes
    {recipe_id: 1, ingredient_id: 1, quantity: '1', unit: 'lbs'},
    {recipe_id: 1, ingredient_id: 2, quantity: '6', unit: 'tbs'},
    {recipe_id: 1, ingredient_id: 3, quantity: '1', unit: 'cup'},
    {recipe_id: 1, ingredient_id: 4, quantity: '2', unit: 'whole'},
    {recipe_id: 1, ingredient_id: 5, quantity: '2', unit: 'tsp'},
    {recipe_id: 1, ingredient_id: 6, quantity: '1', unit: 'tsp'},
    
    
    {recipe_id: 2, ingredient_id: 7, quantity: '1', unit: 'lbs'},
    {recipe_id: 2, ingredient_id: 8, quantity: '1', unit: 'cup'},
    {recipe_id: 2, ingredient_id: 9, quantity: '1', unit: 'cup'},
    {recipe_id: 2, ingredient_id: 10, quantity: '2', unit: 'whole'},
    {recipe_id: 2, ingredient_id: 11, quantity: '.5', unit: 'cup'},
    {recipe_id: 2, ingredient_id: 12, quantity: '.5', unit: 'cup'},
    {recipe_id: 2, ingredient_id: 13, quantity: '1', unit: 'whole'},

    {recipe_id: 3, ingredient_id: 14, quantity: '1', unit: 'whole'},
    {recipe_id: 3, ingredient_id: 2, quantity: '4', unit: 'tbs'},
    {recipe_id: 3, ingredient_id: 5, quantity: '3', unit: 'tsp'},
    {recipe_id: 3, ingredient_id: 6, quantity: '2', unit: 'tsp'},
  ]);

};

