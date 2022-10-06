require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express();

app.use(express.json());
app.use(router);

//GET: para hacer ping al servidor y que devuelva 'OK' en caso que el server y la BD estén levantadas
app.get('/',(req, res)=>{
    res.status(200).send('OK');
})

mongoose.connect(process.env.MONGODB_UR)
.then(
    app.listen(()=>{        
        app.listen(process.env.PORT, () => console.log('Server OK'))
    })
)
.catch((error)=> console.log("Sin conexion" + error))

