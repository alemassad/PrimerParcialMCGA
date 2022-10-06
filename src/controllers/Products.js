const productos = require('../models/products');

const listadoProductos = (req, res) =>{
    productos.find() //Obtenemos todos los productos
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json({mensaje: error}));
}

const buscaProducto = (req, res) =>{
    const name = req.params.name
    productos.findOne({name: name})//Busca producto por nombre
    .then(data => {
        if(!data){
            return res.status(404).json({mensaje: "Producto no encontrado"});
        }
        return res.json(data);
    })
    .catch(error => res.status(500).json({mensaje: error}));
}

const agregaProducto = (req, res) => {
    const nuevoProducto = new productos(req.body);//Agrega un producto
    nuevoProducto.save()
    .then(data => res.status(201).json({mensaje: `Producto ${data.name} agregado`, data}))
    .catch(() => res.status(500).json({mensaje: "Error"}));
}

const borraProducto = (req, res) => {
    const id = req.params.id;
    productos.findByIdAndDelete(id)//Elimina un producto por id
    .then(data => {
        if (!data) {
            return res.status(404).json({mensaje: "Producto no encontrado"});
        }
        return res.status(200).json({mensaje: `Producto ${data.name} borrado`});
    })
    .catch(error => res.status(500).json({error}));
}

const editaProducto = (req, res) => {
    const id = req.params.id;
    productos.findByIdAndUpdate(id, req.body)//edita un producto por id
    .then(data => {
        if(!data){
            return res.status(404).json({mensaje: "Producto no encontrado"})
        }
        return res.status(200).json({mensaje: `Producto ${data.name} editado`});
    })
    .catch(error => res.status(500).json({error}));
}

//Exporta los endpoint
module.exports = { listadoProductos, buscaProducto, agregaProducto, borraProducto, editaProducto };