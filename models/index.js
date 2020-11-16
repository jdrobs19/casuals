const User = require('./User');
const Games = require('./Games');

User.hasMany(Games, { foreignKey: 'user_id' });

Games.belongsTo(User);

module.exports = { User, Games };