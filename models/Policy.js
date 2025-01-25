const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Policy = sequelize.define('Policy', {
    role_name: { type: DataTypes.STRING, allowNull: false },
    module: { type: DataTypes.STRING, allowNull: false },
    action: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Policy;
