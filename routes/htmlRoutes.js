const router = require('express').Router();
const db = require('../models/');

router.get('/', (req, res) => {
    res.render('home', { message: "Hello World!" });
});

router.get('/test', (req, res) => {
    db.User.create({
        name: "jordan"
    })
    .then(dbRes => {
        res.json(dbRes);
    });
});

module.exports = router;