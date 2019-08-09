const express = require('express');
const DevController = require('./controllers/DevController');
// Importaremos o nosso Controller
const LikeController = require('./controllers/LikeController');

const routes = express.Router();

routes.post('/devs', DevController.store);
 // :devId para passar um parâmetro
routes.post('/devs/:devId/likes', LikeController.store);

module.exports = routes;