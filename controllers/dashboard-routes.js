const router = require("express").Router();
const { Games, Genre } = require("../models/");
const withAuth = require("../utils/auth");

  router.get("/", withAuth, (req, res) => {
    res.render("all-games", {
      layout: "dashboard"
    });
  });

  router.get("/new", withAuth, (req, res) => {
    res.render("new-game", {
      layout: "dashboard"
    });
  });
  
module.exports = router;