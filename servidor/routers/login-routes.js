const express = require('express');
const router = express.Router(); // esto es para crear las rutas del servidor

const ctrlLogin = require('../controllers/controller-login');


router.get('/', ctrlLogin.busquedaLoginSer); // la funcion get lo q nos permites es obtener datos
router.post('/', ctrlLogin.busquedaLogin); // la funcion get lo q nos permites es obtener datos


module.exports = router;