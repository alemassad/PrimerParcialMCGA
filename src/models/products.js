const mongoose = require('mongoose');

const esquemaProductos = mongoose.Schema({
    
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

module.exports = mongoose.model('Products', esquemaProductos);
