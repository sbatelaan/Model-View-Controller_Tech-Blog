const { Post } = require('../models');

const postContent = [
    {
        'postTitle': 'testTitle',
        'postContent': 'testing testing',
        'userId': 3
    },
    {
        'postTitle': 'test',
        'postContent': 'test test',
        'userId': 2
    },
    {
        'postTitle': 'testtest',
        'postContent': 'tetsibg',
        'userId': 1
    }

];

const postData = () => 
    Post.bulkCreate(postContent)

module.exports = postData;