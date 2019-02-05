const misEstudiantes = require('../models/estudiantes');
const EstudianteCtrl = {};

EstudianteCtrl.getEmployees = async (req, res) =>{
    let miBusquedaE = await misEstudiantes.find();
    //console.log(miBusquedaE);
    res.json(miBusquedaE);
};

EstudianteCtrl.createEmployees = async (req, res) =>{
    
    const nuevoEstudiante = new misEstudiantes({
        nombre : req.body.nombre,
        posicion : req.body.posicion,
        profecion : req.body.profecion,
        salario : req.body.salario
    });
    await nuevoEstudiante.save();

    console.log(nuevoEstudiante);
    res.json({
        status: "Guardado"
    });

    /*
    console.log(nuevoEmpleado);
    res.json('resivido');
    */
};

EstudianteCtrl.updateEmployees  = async (req, res) =>{
    const id = req.body.id;
    console.log('este es el id: ',id);

    const PActulizado = {
        nombre : req.body.nombre,
        posicion : req.body.posicion,
        profecion : req.body.profecion,
        salario : req.body.salario
    }

    await miEmpleado.findByIdAndUpdate(id,{$set: PActulizado}, {new: true});
    res.json({status:"Actualizado"});

    /* primero selecciona la id despues crea un objeto con los mismos campos que en la base de datos despues hacer la ultima linea */
};

EstudianteCtrl.deleteEmployees = async (req, res) =>{
    console.log(req.params.id);
    await miEmpleado.findByIdAndRemove(req.params.id);
    res.json({status: 'El Empleado fue Eliminado'});
};

EstudianteCtrl.getEmplo = async (req, res) =>{

    const trabajador = await miEmpleado.findById(req.body.id); // para pedir un query por id Importata poner siempre los await
    console.log(req.body.id);
    res.json(trabajador);
};

module.exports = EstudianteCtrl;