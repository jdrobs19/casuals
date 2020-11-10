const User = require('./User');
const Rank = require('./rank');
const Category = require('./Category');

Rank.belongsTo(User, { foreignKey: 'user_id' });
//Category.belongsTo(User, { foreignKey: 'user_id' });

module.exports = { User, Rank, Category };