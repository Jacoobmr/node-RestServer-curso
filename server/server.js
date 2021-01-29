require('./config/config.js');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//habulitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

//CONFIGURACION GLOBAL DE RUTAS
app.use(require('./routes/index'));


mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (err, resp) => {
        if (err) {
            throw err;
        } else {
            console.log('Base de datos ONLINE');
        }

    })

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto: ', process.env.PORT);
});