const { Router } = require('express');
const StaticFileController = require('./controllers/StaticFileController');

const routes = Router();

// routes.get('/', StaticFileController.index);
// routes.get('/style.css', StaticFileController.index);
// routes.get('/script.js', StaticFileController.index);

module.exports = routes;