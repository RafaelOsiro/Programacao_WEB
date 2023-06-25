const express = require('express');
const router = express.Router();
const sessao = require('../services/autenticador');

const cadastrarContaController = require('../controllers/cadastrarContaController');

router.get('/cadastrar/conta', sessao.autenticar(), cadastrarContaController.cadastrarContaView);
router.post('/cadastrar/conta', cadastrarContaController.cadastrarConta);

module.exports = router;