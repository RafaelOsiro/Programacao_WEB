const express = require('express');
const router = express.Router();
const sessao = require('../services/autenticador');

const extratoController = require('../controllers/extratoController');

router.get('/extrato', sessao.autenticar(), extratoController.extratoView);

module.exports = router;