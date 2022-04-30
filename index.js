const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const blogRoute = require('./routes/blogRoute.js');


mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/post', blogRoute);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Backend server is running!");
});