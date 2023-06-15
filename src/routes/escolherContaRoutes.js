const express = require('express');
const router = express.Router();

const escolherContaController = require('../controllers/escolherContaController');

router.get('/escolher/conta', escolherContaController.escolherContaView);

module.exports = router;