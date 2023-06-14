const express = require('express');
const router = express.Router();

const depositarController = require('../controllers/depositarController');

router.get('/depositar', depositarController.navigateView);

module.exports = router;