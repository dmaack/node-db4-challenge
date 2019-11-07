const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send(`<h2> Let's write a Recipe Book! </h2>`)
})

server.use(express.json());
server.use(logger);
server.use((req, res) => {
    res.status(404).send('Aint nodbody got time for that!')
})

// Cutsom Middleware

function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get()}`)
}

module.exports = server;