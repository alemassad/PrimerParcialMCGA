const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const rutaProductos = require('./routes/products'); 

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use('/api', rutaProductos);


//routes: ping al server
app.get('/', (req, res) => {
    res.send(200, 'OK')
});

//Conexion a Mongo
mongoose
    .connect(process.env.MONGODB_UR)
    .then(()=> console.log('Conectado a MongoDB Atlas'))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('Servidor OK con puerto ', port));
