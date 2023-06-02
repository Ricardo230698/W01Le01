const express = require('express');

const routerRicardo = express.Router();

routerRicardo.get('/', (req, res) => {
    res.send('Hi Ricardo and welcome to CS341 - Web Services. We are having fun...');
})

module.exports = routerRicardo;