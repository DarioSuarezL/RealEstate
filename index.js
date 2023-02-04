// const express = require('express');  //commonjs
import express from 'express';
import userRoutes from './routes/userRoutes.js'

//crear la app
const app = express();

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