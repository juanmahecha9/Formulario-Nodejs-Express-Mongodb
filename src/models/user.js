//define el esquema de como lucen las tareas en la db
//modelo
//validar los dastos

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    fechaNacimiento: String,
    SistemaOperativo: String,
    status: {
        type: Boolean,
        default: false
    }
});

//toma el esquema y lo guarda en una collecion
module.exports = mongoose.model('user', taskSchema); // definir la coleccion