require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

//crear el servidor de express
const app = express();

// Configurar Cors
app.use(cors());

// Base de datos 
dbConnection();

console.log( process.env );

// mean_user
// 1A2B3C

//Rutas
app.get('/',(req, res) => {
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    });
});

app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto '+ process.env.PORT);
});