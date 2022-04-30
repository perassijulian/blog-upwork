const express = require('express');
const { getBlog, createBlog } = require('../controllers/blog.js');

const blogRoute = express.Router();

blogRoute.get('/', getBlog)
blogRoute.post('/', createBlog)

module.exports = blogRoute;