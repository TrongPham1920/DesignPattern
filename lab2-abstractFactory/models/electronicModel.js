const mongoose = require('mongoose');
const Product = require('./productModel');

const electronicSchema = new mongoose.Schema({
    brand: String,
    warrantyPeriod: Number
});

module.exports = Product.discriminator('Electronic', electronicSchema);
