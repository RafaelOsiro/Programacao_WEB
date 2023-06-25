const express = require('express');
const router = express.Router();

const pessoaController = require('../controllers/cadastrarPessoaController');

router.get('/cadastrarPessoa', pessoaController.cadastrarPessoaView);
router.post('/cadastrarPessoa', pessoaController.cadastrarPessoaUsuario);


module.exports = router;