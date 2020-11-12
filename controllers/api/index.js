const router = require('express').Router();
const userRoutes = require('./user-routes');
const gameRoutes = require('./game-routes');
const genreRoutes = require('./genre-routes');

router.use('/users', userRoutes);
router.use('/games', gameRoutes);
router.use('/genre', genreRoutes);

module.exports = router;