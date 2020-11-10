const router = require('express').Router();
const sequelize = require('../config/config');
const { User, Rank } = require('../models');


router.get('/',(req, res) => {
   
    res.render('homepage')
});


router.get('/login', (req, res) => {
    
    res.render('login')
});


router.post('/api/users/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;