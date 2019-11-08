const express = require('express');
const Recipes = require('./recipe-model');

const router = express.Router();

// READ Requests
router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(err => {
        res.status(500).json({ error: 'Failed to get recipes'})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Recipes.getRecipeById(id)
    .then(recipe => {
        res.status(200).json(recipe)
    })
    .catch(err => {
        res.status(500).json({ error: `Failed to get recipe with ID ${id}`})
    })
})

router.get('/:id/shoppingList', (req, res) => {
    const id = req.params.id;

    Recipes.getShoppingList(id)
    .then(shoppingList  => {
        if(shoppingList) {
            res.status(200).json(shoppingList)
        } else {
            res.status(404).json({ error: `No ingredient with ID ${id}`})
        }
    })
    .catch(err => {
        res.status(500).json({ error: 'Failed to get Shopping List'})
    })
})

router.get('/:id/instructions', (req, res) => {
    const id = req.params.id;

    Recipes.getInstructions(id)
    .then(instructions => {
        res.status(200).json(instructions)
    })
    .catch(err => {
        res.status(500).json({ error: 'Failed to get instructions'})
    })
})

module.exports = router;