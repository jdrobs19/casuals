const router = require('express').Router();
const { Genre } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Genre.findAll({    })
        .then(dbUserData => {
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Genre.create({
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

router.put('/:id', (req, res) => {
    Genre.update({
        genre_id: req.body.genre_id
    },
    {
        where: {
            id: req.params.id
        }
        
    })
        .then(dbUserData => {
            if (!dbUserData[0]) {
                res.status(404).json({ message: 'No genre found with this id' });
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