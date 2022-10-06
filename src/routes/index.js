const express = require('express');

const rutasProductos = require('./products');

const ruta = express.Router();

ruta.use("/products", rutasProductos);

module.exports = ruta;