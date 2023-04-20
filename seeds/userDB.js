const { User } = require('../models');

const userInfo = [
    {
        'username': 'testUser',
        'password': 'password'

    },
];

const userData = () => User.bulkCreate(userInfo, {
    individualHooks: true,
    returning: true
});

module.exports = userData;