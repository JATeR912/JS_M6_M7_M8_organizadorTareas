const express = require('express');
const router = express.Router();
const { getHome, getTareas, getStatus } = require('../controllers/indexController');

router.get('/', getHome);
router.get('/Tareas', getTareas); 
router.get('/status', getStatus);

module.exports = router;
