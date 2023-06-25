const express = require('express');
const router = express.Router();
const sessao = require('../services/autenticador');

const transferenciaEntreContasController = require('../controllers/transferenciaEntreContasController');

router.get('/transferencia/entre-contas', sessao.autenticar(), transferenciaEntreContasController.transferenciaEntreContasView);

module.exports = router;