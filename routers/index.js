const express = require('express');
const routerRicardo = express.Router();
const myFunction = require('../controllers/index.js');

routerRicardo.get('/', myFunction);

module.exports = routerRicardo;