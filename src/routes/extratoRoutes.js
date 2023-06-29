const express = require('express');
const router = express.Router();
const sessao = require('../services/autenticador');

const extratoController = require('../controllers/extratoController');
const homeController = require('../controllers/homeController');

router.get('/extrato/:contaId', sessao.autenticar(), extratoController.extratoView);
router.get('/home/:contaId', sessao.autenticar(), homeController.homeView);
router.get('/logout', extratoController.logout);
router.post('/extrato/consultar/:contaId', sessao.autenticar(), extratoController.consultarExtrato);

module.exports = router;