const router = require('express').Router();
const { Games } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Tags.findAll({})
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
        tag_name: req.body.tag_name,
        genre_id: req.body.genre_id
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
    Tags.update( 
        {
        tag_name: req.body.tag_name,
        genre_id: req.body.genre_id
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