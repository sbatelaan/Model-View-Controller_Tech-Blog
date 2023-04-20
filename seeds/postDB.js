const { Post } = require('../models');

const postContent = [
    {
        'postTitle': 'test',
        'postContent': 'testing testing',
        'userId': 1
    }
];

const postData = () => 
    Post.bulkCreate(postContent)

module.exports = postData;