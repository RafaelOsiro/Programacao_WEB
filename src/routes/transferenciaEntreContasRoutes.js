const express = require('express');
const router = express.Router();

const transferenciaEntreContasController = require('../controllers/transferenciaEntreContasController');

router.get('/transferencia/entre-contas', transferenciaEntreContasController.transferenciaEntreContasView);

module.exports = router;