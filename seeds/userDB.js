const { User } = require('../models');

const userInfo = [
    {
        'username': 'testUser',
        'password': 'password'

    },
    {
        'username': 'user2',
        'password': 'password'   
    },
    {
        'username': 'user3',
        'password': 'password'
    }
];

const userData = () => User.bulkCreate(userInfo, {
    individualHooks: true,
    returning: true
});

module.exports = userData;