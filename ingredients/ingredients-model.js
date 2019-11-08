const db = require('../data/db.config');

module.exports = {
    getRecipesByIngredient
}

function getRecipesByIngredient(ingredient_id) {
    return db('recipe_ingredients')
    .select('recipe_id')
    .where({ ingredient_id })
}