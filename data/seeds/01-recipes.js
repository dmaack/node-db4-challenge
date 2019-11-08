
exports.seed = function(knex) {
      return knex('recipes').insert([
        {name: 'Mashed Potatoes', servings: 4, total_time: '1', favorite: true},
        {name: 'Cob Salad', servings: 6, total_time: '1', favorite: true},
        {name: 'Roasted Turkey', servings: 8, total_time: '4'}
      ]);

};
