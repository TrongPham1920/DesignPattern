const mongoose = require('mongoose');
const Product = require('./productModel');

const clothingSchema = new mongoose.Schema({
    size: String,
    material: String
});

module.exports = Product.discriminator('Clothing', clothingSchema);
