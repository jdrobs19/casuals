const router = require('express').Router();
const { Games } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Games.findAll({})
        .then(dbGamesData => {
            res.json(dbGamesData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {

    Games.create({
        title: req.body.title,
        user_id: req.session.user_id
    })
        .then(dbGamesData => {
            res.json(dbGamesData);
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
        .then(dbGamesData => {
            if (!dbGamesData[0]) {
                res.status(404).json({ message: 'No games found with this id' });
                return;
            }
            res.json(dbGamesData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;