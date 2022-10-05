const express = require('express');
const esquemaProductos = require('../models/products');

const router = express.Router();

//Crear Productos
router.post('/products', (req, res) => {
    const productos = esquemaProductos(req.body);
    productos
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));

});

//Obtener los Productos
router.get('/products', (req, res) => {
    
    esquemaProductos
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});
//Buscar un Productos
router.get('/products/:id', (req, res) => {
    const {id} = req.params;
    esquemaProductos
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//Actualizar un Productos
router.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, price, stock, description } = req.body;
    esquemaProductos
        .updateOne({_id: id}, { $set: { name, price, stock, description }})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//Borrar un Productos
router.delete('/products/:id', (req, res) => {
    const {id} = req.params;
    esquemaProductos
        .remove({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});
module.exports = router;