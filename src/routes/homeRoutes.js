const express = require('express');
const router = express.Router();
const sessao = require('../services/autenticador');

const homeController = require('../controllers/homeController');

router.get('/home/:contaId', sessao.autenticar(), homeController.homeView);
router.get('/logout', homeController.logout);


module.exports = router;