const mongoose = require('mongoose');
const { Schema } = mongoose;

const SchemaE = new Schema({
    nombres : {type: String, required: true},
    apellidos : {type: String, required: true},
    cedula : {type: String, required: true},
    nivel : {type: Number, required: true},
    clave : {type: String, required: true}
});

module.exports = mongoose.model('estudiantes', SchemaE);

// Todo esto es como para decir que la collection administrador va a tener un nombre,posicion,profecion y salario