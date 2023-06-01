const express = require('express');
const router = express.Router();

const pessoaController = require('../controllers/pessoaController');

router.get('/pessoa/cadastrar', pessoaController.cadastrarView);
router.post('/pessoa/cadastrar', pessoaController.cadastrarPessoa);

router.get('/pessoa/listar', pessoaController.listarView);

router.get('/pessoa/editar/:id', pessoaController.editarView);
router.post('/pessoa/editar', pessoaController.editarPessoa);
router.post('/pessoa/deletar', pessoaController.deletarPessoa);

module.exports = router;