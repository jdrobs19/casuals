const router = require('express').Router();
const {User , Games} = require ('../models');
const withAuth = require('../utils/auth');

router.get('/:id', (req,res) => {
    User.findAll({
        where: {
            game_id: req.params.id
        }
    })
    .then(dbUserData => {
        const users = dbUserData.map((user) => user.get({plain: true}));
        res.render('usergame', {layout: 'game'});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;