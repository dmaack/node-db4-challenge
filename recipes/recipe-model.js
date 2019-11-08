const db = require('../data/db.config');

module.exports = {
    getRecipes,
    getRecipeById,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
}

function getRecipeById(id) {
    return db('recipes')
    .where({ id })
    .first()
}

function getShoppingList(recipe_id) {
    return db('recipe_ingredients')
    .join('ingredients', 'ingredients.id', '=', 'recipe_ingredients.ingredient_id')
    .select('ingredient_id', 'ingredients.name', 'quantity', 'unit')
    .where({ recipe_id })
}

function getInstructions(recipe_id) {
    return db('steps')
    .select('order', 'directions')
    .where({ recipe_id })
}