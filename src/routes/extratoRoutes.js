const express = require('express');
const router = express.Router();
const sessao = require('../services/autenticador');

const extratoController = require('../controllers/extratoController');

router.get('/extrato', sessao.autenticar(), extratoController.extratoView);
router.get('/logout', extratoController.logout);

module.exports = router;