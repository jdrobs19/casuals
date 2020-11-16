const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Games extends Model { }

Games.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Games'
    }
)

module.exports = Games;