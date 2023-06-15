const express = require('express');
const router = express.Router();

const extratoController = require('../controllers/extratoController');

router.get('/extrato', extratoController.extratoView);

module.exports = router;