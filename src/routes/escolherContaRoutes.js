const express = require('express');
const router = express.Router();
const sessao = require('../services/autenticador');

const escolherContaController = require('../controllers/escolherContaController');

router.get('/escolher/conta', sessao.autenticar(), escolherContaController.escolherContaView);
router.post('/escolher/conta/selecionar', sessao.autenticar(), escolherContaController.escolherContaEntrar);

module.exports = router;