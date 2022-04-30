const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    authorAvatar: {
        type: String,
        require: true
    },
    authorName: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    cover: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    description: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    subCategory: {
        type: Array
    }
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;