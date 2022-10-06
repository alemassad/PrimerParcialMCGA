const mongoose = require('mongoose');

//Costruccion del esquema
const esquemaProductos = mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name:{
        type: String,
        required: true,
        maxlenght: 25
    },
    price:{
        type: Number,
        min: 1,
        required: true
    },
    stock:{
        type: Number,
        min: 0,
        required: true,
    },
    description:{
        type: String,
        maxlenght: 80,
    },

});
//Exporta el esquema
module.exports = mongoose.model('Products', esquemaProductos);
