const express = require('express');

const blogRoute = express.Router();

blogRoute.get('/', async (req, res, next) => {
    try {
        const blogPosts = await Blog.find();

        res.status(200).json(blogPosts)

    } catch (err) {
        res.status(404).json({message: err.message})
    }
})

blogRoute.post('/', async (req, res, next) => {
    const newPost = new Blog(req.body);

    try {
        await newPost.save();
        res.status(201).json(newPost);

    } catch (err) {
        res.status(409).json({message: err.message})
    }
})

module.exports = blogRoute;