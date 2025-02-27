const express = require('express');
const app = express();
const cors = require('cors');

//ENV
require('dotenv').config();

//DATABASE
require('./dbs/mongo.db.js');

//CORS
var corsOptionsDelegate = function (req, callback) {
  var corsOptions = { origin: true };
  callback(null, corsOptions);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptionsDelegate));
const productRoutes = require('./routes/productRoutes');

//routes
app.use('/api/v1', productRoutes);

//error handler
app.use((err, req, res, next) => {
  const error = err.message ? err.message : err;
  const status = err.status ? err.status : 500;

  return res.status(status).json({
    error: {
      code: status,
      message: error
    }
  });
});

app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}!`));