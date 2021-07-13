const express = require('express');
const {index, about} = require('../controllers/mainControllers')
const router = express.Router();

// Rutas web
router.get('/', index);
router.get('/about', about);

module.exports = router;