const express = require('express');
const router = express.Router();
const sessao = require('../services/autenticador');

const transferenciaEntreContasController = require('../controllers/transferenciaEntreContasController');
const homeController = require('../controllers/homeController');

router.get('/transferencia/entre-contas/:contaId', sessao.autenticar(), transferenciaEntreContasController.transferenciaEntreContasView);
router.get('/logout', transferenciaEntreContasController.logout);
router.get('/home/:contaId', sessao.autenticar(), homeController.homeView);
router.post('/transferencia/submit/:contaId', sessao.autenticar(), transferenciaEntreContasController.processarTransferencia);

module.exports = router;