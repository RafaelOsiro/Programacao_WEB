const express = require('express');
const router = express.Router();

const saldoController = require('../controllers/saldoController');

router.get('/saldo', saldoController.saldoView);

module.exports = router;