import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';

import blogRoute from './routes/blogRoute.js';

const app = express();

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

app.use(express.static("/client/build"));

app.get('*', (req, res) => {
  res.sendFile('/client/build', 'index.html');
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Backend server is running!");
});