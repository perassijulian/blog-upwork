import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';

import blogRoute from './routes/blogRoute.js';

const app = express();

const PORT = 3001;
const CONNECTION_URL = "mongodb+srv://julian:julian123@cluster0.dhn1u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
app.use('/blog', blogRoute);

mongoose.connect(CONNECTION_URL)
    .then( app.listen(PORT, () => {console.log(`Server running on http://localhost:${PORT}`)}) )
    .catch( (err) => console.log(err));