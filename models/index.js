const User = require('./User');
// const Rank = require('./rank');
const Genre = require('./Genre');
const Games = require('./Games');

// Rank.belongsTo(User, { foreignKey: 'user_id' });
// //Genre.belongsTo(User, { foreignKey: 'user_id' });

Games.belongsTo(Genre, { foreignKey: 'genre_id'});

Games.belongsToMany(User, { foreignKey: 'user_id'});

module.exports = { User, Rank, Genre, Games };