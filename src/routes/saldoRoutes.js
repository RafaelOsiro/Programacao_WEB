const express = require('express');
const router = express.Router();
const sessao = require('../services/autenticador');

const saldoController = require('../controllers/saldoController');

router.get('/saldo', sessao.autenticar(), saldoController.saldoView);
router.get('/logout', saldoController.logout);


module.exports = router;