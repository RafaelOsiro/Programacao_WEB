const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');

router.get('/login', loginController.loginView);
router.post('/submit', loginController.entrarNaConta);

module.exports = router;