const express = require('express');
const cors = require('cors');
const compress = require('compression');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV == 'development'){

    app.use(morgan('dev'));

}else if(process.env.NODE_ENV == 'production'){
    app.use(compression());
}

//archivos propios
const { mongoose } = require('./database');
const routerLogin = require('./routers/login-routes');
const routerUpload = require('./routers/upload-routes');
//const router = require('./routers/employee-routes');

//settings

app.set('port', process.env.PORT || 3000); // esto es una forma de configurar el puerto para que sea de forma dinamica

app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(methodOverride());

//Routers
app.use('/',routerLogin); // tienes q usar la instancia de express el metodo use() para que pueda funcionar correctamente
app.use('/upload',routerUpload);

app.listen(3000, ()=>{
    console.log('se a conectado en el servidor 3000');
})
