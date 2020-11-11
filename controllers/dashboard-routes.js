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
        const games = dbGamesData.map((games) => games.get({ plain: true }));
        
        res.render("all-games-admin", {
          layout: "dashboard",
          games
        });
      })
      .catch(err => {
        console.log(err);
        res.redirect("login");
      });
  });

  router.get("/new", withAuth, (req, res) => {
    res.render("new-game", {
      layout: "dashboard"
    });
  });
  
  router.get("/edit/:id", withAuth, (req, res) => {
    Games.findByPk(req.params.id)
      .then(dbGamesData => {
        if (dbGamesData) {
          const games = dbPostData.get({ plain: true });
          
          res.render("edit-games", {
            layout: "dashboard",
            games
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
module.exports = router;