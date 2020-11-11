const router = require("express").Router();
const { Games, Genre } = require("../models/");
const withAuth = require("../utils/auth");

  router.get("/", withAuth, (req, res) => {
    res.render("all-games", {
      layout: "dashboard"
    });
  });

  
  
module.exports = router;