const express = require('express');
const Ingredients = require('./ingredients-model');

const router = express.Router();

router.get('/:id/recipes', (req, res) => {
    const id = req.params.id;

    Ingredients.getRecipesByIngredient(id)
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(err => {
        res.status(500).json({ error: 'Failed to get instructions'})
    })
})

module.exports = router;