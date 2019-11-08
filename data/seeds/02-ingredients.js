exports.seed = function(knex) {
  return knex('ingredients').insert([
    {name: 'Russett Potatoes'}, //1
    {name: 'Butter'}, //2
    {name: 'Heavy Cream'}, //3
    {name: 'Garlic'}, //4
    {name: 'Salt'}, //5
    {name: 'Pepper'}, //6
    {name: 'Lettuce'}, //7
    {name: 'Cheese'}, //8
    {name: 'Tomatoes'}, //9
    {name: 'Hard Boiled Eggs'}, //10
    {name: 'Bacon'}, //11
    {name: 'Ranch Dressing'}, //12
    {name: 'Avocado'}, //13
    {name: 'Turkey'}, //14
   
  ]);

};
