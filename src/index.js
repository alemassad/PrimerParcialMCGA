require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const ruta = require('./routes');
const app = express();

app.use(express.json());
app.use(ruta);

app.get('/',(req, res)=>{
    res.status(200).send('OK');// conexion con DB
})

mongoose.connect(process.env.MONGODB_UR)
.then(
    app.listen(()=>{        
        app.listen(process.env.PORT, () => console.log('Server OK'))
    })
)
.catch((error)=> console.error(error))

