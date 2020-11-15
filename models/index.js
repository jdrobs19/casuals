const User = require('./User');
const Genre = require('./Genre');
const Games = require('./Games');



// Games.belongsTo(Genre, { foreignKey: 'genre_id'});

User.hasMany(Games, {foreignKey: 'user_id'});

Games.belongsTo(User);



module.exports = { User, Genre, Games };