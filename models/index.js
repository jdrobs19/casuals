const User = require('./User');
const Genre = require('./Genre');
const Games = require('./Games');



Games.belongsTo(Genre, { foreignKey: 'genre_id'});

User.hasMany(Games, {foreignKey: 'user_id'});

Games.belongsToMany(User, {foreignKey: 'game_id'});



module.exports = { User, Genre, Games };