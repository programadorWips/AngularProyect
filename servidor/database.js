const mongoose = require('mongoose');

const URI = "mongodb://localhost:27017/secundaria";/* esta es la forma de llegar a la base de datos de mongodb el ultimo nombre despues de localhost
                                             es el nombre de la base de datos, si no la haz creado aun mongodb la crea de una vez*/

mongoose.connect(URI, { useNewUrlParser: true })   // metodo para conectarse a la base de datos
        .then((db) => {console.log('se Conecto a la base de datos')})   //promesas 
        .catch((err) => {console.error('no se Pudo conectar por: ', err)});

module.exports = mongoose;