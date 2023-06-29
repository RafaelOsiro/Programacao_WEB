const express = require('express');
const router = express.Router();
const sessao = require('../services/autenticador');

const saldoController = require('../controllers/saldoController');
const homeController = require('../controllers/homeController');

router.get('/saldo/:id', sessao.autenticar(), saldoController.saldoView);
router.get('/consultar-saldo', sessao.autenticar(), homeController.consultarSaldo);
router.get('/logout', saldoController.logout);
router.get('/home/:contaId', sessao.autenticar(), homeController.homeView);


module.exports = router;