const express = require('express');
const router = express.Router();

const depositarController = require('../controllers/depositarController');

router.get('/depositar', depositarController.depositarView);

module.exports = router;