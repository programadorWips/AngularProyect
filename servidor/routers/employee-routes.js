const express = require('express');
const router = express.Router(); // esto es para crear las rutas del servidor

const ctrlEmployee = require('../controllers/controller-emple');

router.get('/', ctrlEmployee.getEmployees); // la funcion get lo q nos permites es obtener datos
router.post('/', ctrlEmployee.createEmployees); // con post nos permite es guardar datos
router.get("/:id", ctrlEmployee.getEmplo);
router.put("/:id", ctrlEmployee.updateEmployees); // la funcion put nos permite modificar los datos
router.delete("/:id", ctrlEmployee.deleteEmployees); // nos permite eliminar datos

module.exports = router;