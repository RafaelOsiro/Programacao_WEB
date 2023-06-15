const express = require('express');
const router = express.Router();

const cadastrarContaController = require('../controllers/cadastrarContaController');

router.get('/cadastrar/conta', cadastrarContaController.cadastrarContaView);

module.exports = router;