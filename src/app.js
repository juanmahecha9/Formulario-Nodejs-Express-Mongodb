const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//conectiong to db
mongoose.connect('mongodb://localhost/dataUser') //crar db. mos crea la base de datos en el servicio de mongo
.then(db => console.log('DB concetado')) //si esta conectado
.catch(err => console.log(err)); // si captura un error
//  import routes

const indexRoutes = require('./rutes/index');

//settings
app.set('port', process.env.PORT || 3000); //definir el valor del puerto
app.use(express.static(path.join(__dirname, 'views'))); //concatena las rutas y dice la carpeta esta aqui o busca la direccion o ruta de la misma

/* app.set('view engine', 'ejs'); //motor de vista y plantillas */


// middlewares express
//funciones que se ejecuntan antes de llegar a las rutas
app.use(morgan('dev')); // muestra el proceso de ida y vuelta
app.use(express.urlencoded({extended: false})); //usado para entender los datos enviados por un formulario
// enviados en un formato JSON el extended false es por que no se reciben imagenes



//routes
app.use('/', indexRoutes);


//starting the server
//Usar el puerto, optener la variable
app.listen(app.get('port'), ()=> {
    console.log(`Servidor ejecutado en el puerto ${app.get('port')}`);
  });