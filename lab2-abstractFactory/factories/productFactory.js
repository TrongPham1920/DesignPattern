class ProductFactory {
  createProduct(type, data) {
    throw new Error("This method should be overridden!");
  }
}

module.exports = ProductFactory;