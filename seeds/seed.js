const sequelize = require('../config/connection');
const { User, Types } = require('../models');

const userData = require('./userData.json');
const typesData = require('./datatypes.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    const users = await User.bulkCreate(userData, {
        individualhooks: true,
        returning: true,
    });
    const types = await Types.bulkCreate(typesData, {
        returning: true,
    });
    process.exit(0)
    };

    seedDatabase()
