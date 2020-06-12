// aqui estaran las rutas
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router(); //metodo que devuelve un objeto y luego se exportara


//importar el esquema en el servidor, para que se tome en el formato de objetos de mongo
const user = require('../models/user');


//mostrar algo en pantalla, 
router.get('/', async (req, res) => {
    //manera de consulta
    //metodo de tipo asincrono que me debuelve los datos de la DB y los guarda en una nueva variable que se puede exportar
  /*  const tasks = await user.find(); *///mguardar datos en ua variable, el find () trae los datos de la DB
     
    //res.send('Success...'); //al pedir una peticion get en pantalla, se responde con un mensaje
    // con el path ya se capturo el index y se establecio el index que se va a renderizar  
    res.render('index.html'); //responder con un html
    
});


// al agregar el action /add se da metodo llamado post para traer los datos
// al precionar el boton, genera un evento que es leido y trae los datos
router.post('/add', async (req, res) => {
    const users = new user(req.body); //nombre de la constante se vuelve el nombre de la coleccion de mongo
    //almacenar el objeto en un una variable
    // almacenar el objeto
    // almacenar en la db, y que regurese una promesa al ser almacenado
    await users.save();
    //asing aways
    res.send('Saved in DB...');
    //res.render('index.html'); //responder con un html
    

    //crea una base de datos con el nombre
    // se tiene un nuevo dato, se espera a que se guarde y por ultimo se manda un mensaje que dice que se ha guardado, si ha sido exitoso

    //console.log(new Task(req.body)); //imprimo el modelo tareas para generar el objeto de mongo y se le adjuntan los tados requeridos del cuerpo 
    // console.log(req.body); //requerimiento del body 
}); // precesar informacion y recivir datos del formulario

router.get('/data', async (req, res) => {
    const tasks = await user.find();
    console.log(tasks);
    res.send(tasks);
    

}); 


module.exports = router; // exportar un enrutador en blanco

