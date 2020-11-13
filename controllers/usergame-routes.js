const router = require('express').Router();
const {Games} = require ('../models');
const withAuth = require('../utils/auth');

router.get('/:id', withAuth, (req,res) => {
    res.render('usergame', {layout: 'game'});
});

module.exports = router;