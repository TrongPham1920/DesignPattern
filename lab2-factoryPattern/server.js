const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

//init dbs
require("./config/db");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRoutes);

const { PORT } = process.env || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
