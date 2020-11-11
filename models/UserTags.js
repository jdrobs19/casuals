const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class UserTags extends Model {}

UserTags.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tag_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
)

module.exports = UserTags;