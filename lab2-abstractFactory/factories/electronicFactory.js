const ProductFactory = require('./productFactory');
const Electronic = require('../models/electronicModel');

class ElectronicFactory extends ProductFactory {
  createProduct(data) {
    return new Electronic(data);
  }
}

module.exports = new ElectronicFactory();