const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const gameusersRoutes = require('./gameusers-routes');
const singleUserRoutes = require('./single-user');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/games', gameusersRoutes);
router.use('/users', singleUserRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;