const express = require('express');
const router = express.Router();
const sessao = require('../services/autenticador');

const homeController = require('../controllers/homeController');

router.get('/home', sessao.autenticar(), homeController.homeView);

module.exports = router;