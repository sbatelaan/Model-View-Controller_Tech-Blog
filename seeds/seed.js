const sequelize = require('../config/connection');
const userData = require('./userDB');
const postData = require('./postDB');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await userData();
    await postData();
    console.log('posts seeded');
    process.exit(0);
};

seedAll();