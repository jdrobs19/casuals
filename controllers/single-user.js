const router = require('express').Router();
const {User , Games} = require ('../models');
const withAuth = require('../utils/auth');

router.get('/:id', (req,res) => {
    Games.findAll({
        where: {
            user_id: req.params.id
        },
        include: [User]
    })
    .then(dbUserData => {
        // console.log(dbUserData);
        const users = dbUserData.map((user) => user.get({plain: true}));
        console.log(users)
        res.render('single-user', {
            layout: 'game',
            users
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;