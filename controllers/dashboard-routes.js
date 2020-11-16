const router = require("express").Router();
const axios = require('axios');
const { Games } = require("../models/");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  Games.findAll({
    where: {
      user_id: req.session.user_id
    }
  })
    .then(dbGamesData => {
      const games = dbGamesData.map((game) => game.get({ plain: true }));

      res.render("all-games", {
        layout: "dashboard",
        games
      });
    })
    .catch(err => {
      console.log(err);
      res.redirect('login');
    });
});

router.get("/new", withAuth, (req, res) => {
  axios.get(`https://api.rawg.io/api/games?API_KEY=${process.env.API_KEY}&page_size=999`)
    .then(data => {
      const games = data.data.results;

      console.log(games[0]);

      res.render("new-game", {
        layout: "dashboard",
        games
      });
    });
});

module.exports = router;