const express = require('express');
const router = express.Router();

const cadastrarContaController = require('../controllers/cadastrarContaController');

router.get('/cadastrar/conta', cadastrarContaController.cadastrarContaView);
router.post('/cadastrar/conta', cadastrarContaController.cadastrarConta);

module.exports = router;