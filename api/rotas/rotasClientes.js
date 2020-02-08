const express = require('express');
const router = express.Router();
const userController = require('../controller/clientesController');
router.post('/cadastrar', userController.criar);
router.post('/autenticar', userController.autenticar);
module.exports = router;