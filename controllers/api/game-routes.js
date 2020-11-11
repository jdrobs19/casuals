const router = require('express').Router();
const { Games } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Games.findAll({})
        .then(dbUserData => {
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Games.create({
        title: req.body.title,
    })
        .then(dbTagData => {
            res.json(dbTagData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', withAuth, (req, res) => {
    Games.update( 
        {
        title: req.body.title,
    },
    {
        where: {
        id: req.params.id
    }
    })
    .then(dbUserData => {
        if (!dbUserData[0]) {
            res.status(404).json({ message: 'No tag found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;