const User = require('./User');
// const Rank = require('./rank');
const Category = require('./Category');
const Tags = require('./Tags');
const UserTags =require('./UserTags');

// Rank.belongsTo(User, { foreignKey: 'user_id' });
// //Category.belongsTo(User, { foreignKey: 'user_id' });

Tags.belongsToMany(Category, {});

UserTags.belongsToMany(User, {});

module.exports = { User, Rank, Category, Tags, UserTags };