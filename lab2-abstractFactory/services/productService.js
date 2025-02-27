const electronicFactory = require('../factories/electronicFactory');
const clothingFactory = require('../factories/clothingFactory');

class ProductService {
  static async createProduct(type, data) {
    let product;
    if (type === 'Electronic') {
      product = electronicFactory.createProduct(data);
    } else if (type === 'Clothing') {
      product = clothingFactory.createProduct(data);
    } else {
      throw new Error('Invalid product type');
    }
    await product.save();
    return product;
  }

  static async getAllProducts() {
    return await Product.find();
  }
}

module.exports = ProductService;