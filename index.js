// const express = require('express');  //commonjs
import express from 'express';
import userRoutes from './routes/userRoutes.js'
import db from './config/db.js'

//crear la app
const app = express();

//conexión a la base de datos
try {
    await db.authenticate();
    db.sync();
    console.log('Connected to the database');
} catch (error) {
    console.log(error);
}

//habilitar lectura de datos de formulario
app.use( express.urlencoded({ extended: true }) )

//habilitar pug
app.set('view engine','pug');
app.set('views', './views');

//carpeta pública
app.use( express.static('public') );

//routing
app.use('/auth', userRoutes);


//definir un puerto y arrancar el proyecto
const port = 3000;
app.listen(port,() => {
    console.log(`El servidor está funcionando en el puerto ${port}`)
})