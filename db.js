const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('erp_db', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;
