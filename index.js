import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';

import blogRoute from './routes/blogRoute.js';

const app = express();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
app.use('/post', blogRoute);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

mongoose.connect(MONGODB_URI)
    .then( app.listen(PORT || 3001, () => {console.log(`Server running on http://localhost:${PORT}`)}) )
    .catch( (err) => console.log(err));