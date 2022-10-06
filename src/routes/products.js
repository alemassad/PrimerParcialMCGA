const express = require('express');
const router = express.Router();

const {
    listProducts,
    searchProduct,
    deleteProduct,    
    updateProduct,
    addProducts
} = require('../controllers/Products');



router.get('/', (req, res) => listProducts(req, res));

router.get('/:name', (req, res) => searchProduct(req, res));

router.post("/add", (req, res) => addProducts(req, res));

router.delete("/delete/:id", (req, res) => deleteProduct(req, res));

router.put("/update/:id", (req, res) => updateProduct(req, res));

module.exports = router;