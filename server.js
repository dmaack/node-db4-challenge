const express = require('express');
const server = express();

const recipeRouter = require('./recipes/recipe-router');
const ingredientRouter = require('./ingredients/ingredients-router')

server.get('/', (req, res) => {
    res.send(`<h2> Let's write a Recipe Book! </h2>`)
})

server.use(express.json());
server.use(logger);

server.use('/api/recipes', recipeRouter);
server.use('/api/ingredients', ingredientRouter);

server.use('/', (req, res) => {
    res.status(404).send('Aint nobody got time for that!')
})

// Cutsom Middleware

function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`)

    next();
}

module.exports = server;