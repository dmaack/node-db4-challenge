exports.seed = function(knex) {
  return knex('steps').insert([
    // mashed potatoes
    {recipe_id: 1, directions: 'Cut potatoes into small cubes', order: 1},
    {recipe_id: 1, directions: 'Boil potatoes until you a fork inserts with ease', order: 2},
    {recipe_id: 1, directions: 'Melt butter', order: 3},
    {recipe_id: 1, directions: 'Drain potatoes and mash with masher', order: 4},
    {recipe_id: 1, directions: 'Add butter, salt and pepper', order: 4},
    
    {recipe_id: 2, directions: 'Chop lettuce', order: 1},
    {recipe_id: 2, directions: 'Slice avocados and eggs', order: 2},
    {recipe_id: 2, directions: 'Add all ingredients in a large bowl and toss with dressing', order: 3},

    {recipe_id: 3, directions: 'Preheat oven to 400 degress', order: 1},
    {recipe_id: 3, directions: 'Rub turker with melted butter and salt and pepper', order: 2},
    {recipe_id: 3, directions: 'Cook turkey for 4 hours or until temperature registers 165 degrees', order: 3},
  ]);

};