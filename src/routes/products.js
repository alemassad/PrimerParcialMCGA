const express = require('express');

const ruta = express.Router();

const { listadoProductos, buscaProducto, borraProducto, editaProducto, agregaProducto} = require('../controllers/Products');


ruta.get('/', (req, res) => listadoProductos(req, res));

ruta.get('/:name', (req, res) => buscaProducto(req, res));

ruta.post("/add", (req, res) => agregaProducto(req, res));

ruta.delete("/delete/:id", (req, res) => borraProducto(req, res));

ruta.put("/update/:id", (req, res) => editaProducto(req, res));

module.exports = ruta;