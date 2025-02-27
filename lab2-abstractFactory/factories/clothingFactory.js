const ProductFactory = require('./productFactory');
const Clothing = require('../models/clothingModel');

class ClothingFactory extends ProductFactory {
  createProduct(data) {
    return new Clothing(data);
  }
}

module.exports = new ClothingFactory();