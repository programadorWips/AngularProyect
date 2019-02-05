const miUpdate = require('../models/login');
const uploadCtrl = {};

uploadCtrl.updateFotoPerfil  = async (req, res) =>{
    const miCedula = req.body.contenidoPerfil.cedula;
    const miFoto = req.body.contenidoPerfil.foto;

    console.log('informacion Adquirida: ',miFoto, " -- ",miCedula);

    const UploadCostruc = {
        nombres : req.body.contenidoPerfil.nombres,
        apellidos : req.body.contenidoPerfil.apellidos,
        cedula : req.body.contenidoPerfil.cedula,
        usuario : req.body.contenidoPerfil.usuario,
        password : req.body.contenidoPerfil.password,
        posicion : req.body.contenidoPerfil.posicion,
        sexo : req.body.contenidoPerfil.sexo,
        edad : req.body.contenidoPerfil.edad,
        foto : req.body.contenidoPerfil.foto
    }

    await miUpdate.findOneAndUpdate({cedula : miCedula},{$set:UploadCostruc}, {new: true});
    res.json({status:"Actualizado"});

    /* primero selecciona la id despues crea un objeto con los mismos campos que en la base de datos despues hacer la ultima linea */
};

module.exports = uploadCtrl;