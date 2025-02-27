const mongoose = require("mongoose");
require("dotenv").config();

const { MONGO_URI } = process.env;

class Database {
  constructor() {
    if (!Database.instance) {
      Database.instance = this;
      this.connect();
    }
  }
  async connect() {
    try {
      const response = await mongoose.connect(MONGO_URI);
      if (response) {
        console.log("ConnectDB OK");
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
}

const instance = new Database();
module.exports = instance;
