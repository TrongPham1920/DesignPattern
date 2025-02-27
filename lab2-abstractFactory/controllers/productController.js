const ProductService = require('../services/productService');

const createProduct = async (req, res) => {
  try {
    const { type, ...data } = req.body;
    const product = await ProductService.createProduct(type, data);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await ProductService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getProducts
};