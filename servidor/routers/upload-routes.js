const express = require('express');
const router = express.Router(); // esto es para crear las rutas del servidor

const ctrlUpload = require('../controllers/controller-upload');

router.put('/',ctrlUpload.updateFotoPerfil); 


module.exports = router;