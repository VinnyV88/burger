var express = require("express");

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burger = require('../models/burgers.js')

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.all(function (data) {
    res.render('burgers/index', {
      burgers: data
    });
  });
});

router.get("/new", function (req, res) {
  res.render('burgers/new');
});

router.post("/create", function (req, res) {
  // res.send(req.body);
  var cols = ['burger_name'];
  var vals = [req.body.burger_name];

  burger.create(cols, vals, function (response) {
    res.redirect('/burgers');
  });
})


// Export routes for server.js to use.
module.exports = router;