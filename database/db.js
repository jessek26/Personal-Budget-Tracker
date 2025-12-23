//imports
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './budget.db'
});

//setting up user model
const User = sequelize.define('User', {
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    }
});

//transacton model:
const Transaction = sequelize.define('Transaction', {
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.DATEONLY
    }
});

//relationships
User.hasMany(Transaction, { foreignKey: 'userId' });
Transaction.belongsTo(User, { foreignKey: 'userId' });

//exports
module.exports = {sequelize, User, Transaction};