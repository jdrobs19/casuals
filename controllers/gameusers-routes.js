const router = require('express').Router();
const {User , Games} = require ('../models');
const withAuth = require('../utils/auth');

router.get('/:id', (req,res) => {
    Games.findAll({
        where: {
            id: req.params.id
        },
        include: [
            User
        ]
    })
    .then(dbUserData => {
        const users = dbUserData.map((user) => user.get({plain: true}));
        res.render('gameusers', {layout: 'game'});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;