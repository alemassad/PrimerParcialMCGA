const products = require('../models/products');


const listProducts = (req, res) =>{
    products.find() //Obtenemos todos los productos
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json({mensaje: error}));
}


const searchProduct = (req, res) =>{
    const name = req.params.name
    products.findOne({name: name})//Bsca producto por nombre
    .then(data => {
        if(!data){
            return res.status(404).json({mensaje: "Producto no encontrado"});
        }
        return res.json(data);
    })
    .catch(error => res.status(500).json({mensaje: error}));
}


const addProducts = (req, res) => {
    const newProducts = new products(req.body);//Agrega un producto
    newProducts.save()
    .then(data => res.status(201).json({mensaje: `Producto ${data.name} agregado`, data}))
    .catch(() => res.status(500).json({mensaje: "Error"}));
}


const deleteProduct = (req, res) => {
    const id = req.params.id;
    products.findByIdAndDelete(id)//Elimina un producto por id
    .then(data => {
        if (!data) {
            return res.status(404).json({mensaje: "Producto no encontrado"});
        }
        return res.status(200).json({mensaje: `Producto ${data.name} borrado`});
    })
    .catch(error => res.status(500).json({error}));
}


const updateProduct = (req, res) => {
    const id = req.params.id;
    products.findByIdAndUpdate(id, req.body)//edita un producto por id
    .then(data => {
        if(!data){
            return res.status(404).json({mensaje: "Producto no encontrado"})
        }
        return res.status(200).json({mensaje: `Producto ${data.name} editado`});
    })
    .catch(error => res.status(500).json({error}));
}
//Exporta los endpoint
module.exports = { listProducts, searchProduct, addProducts, deleteProduct, updateProduct };