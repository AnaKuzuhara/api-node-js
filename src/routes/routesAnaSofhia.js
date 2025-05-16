const express = require('express'); 
const router = express.Router(); 

const AssuntosController = require('../controllers/Assuntos'); 

router.get('/Assuntos', AssuntosController.listarAssuntos); 
router.post('/Assuntos', AssuntosController.cadastrarAssuntos); 
router.patch('/Assuntos/:id', AssuntosController.editarAssuntos); 
router.delete('/Assuntos/:id', AssuntosController.apagarAssuntos); 

module.exports = router;