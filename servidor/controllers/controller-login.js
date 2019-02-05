const miLogin = require('../models/login');
const loginCtrl = {};

loginCtrl.busquedaLoginSer = async (req, res) =>{
    let miBusquedaE = await miLogin.find();
    console.log(miBusquedaE);
    res.json(miBusquedaE);
};

loginCtrl.busquedaLogin = async (req, res) =>{

    let usu = req.body.usuario;
    let pass = req.body.password;
    let miBusquedaE = await miLogin.find({usuario: usu, password: pass});

        console.log(miBusquedaE);
        res.json( miBusquedaE ); // al ponerlo asi manda 0 si esta vacio el array lo cual permite activar el if de forma correcta

};


module.exports = loginCtrl;