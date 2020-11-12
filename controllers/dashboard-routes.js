const router = require("express").Router();
const { Games, Genre } = require("../models/");
const withAuth = require("../utils/auth");

  router.get("/", withAuth, (req, res) => {
    Games.findAll({
      where: {
        user_id: req.session.user_id
      }
    })
    .then(dbGamesData => {
      const games = dbGamesData.map((game) => game.get({plain: true}));
      
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
    res.render("new-game", {
      layout: "dashboard"
    });
  });
  
module.exports = router;