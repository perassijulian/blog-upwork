import express from 'express';
import { getBlog, createBlog } from '../controllers/blog.js';

const blogRoute = express.Router();

blogRoute.get('/', getBlog)
blogRoute.post('/', createBlog)

export default blogRoute;