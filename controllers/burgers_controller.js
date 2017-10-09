// *********************************************************************************
// burgers_controller.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Sqlburgers model
var db = require('../models');
var app = require('../server');

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the burgers
  app.get('/api/burger', function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Sqlburgers.findAll({}).then(function(dbSqlburgers) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbSqlburgers);
    });
  });

  app.get('/api/burger', function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Sqlburgers.findAll({}).then(function(dbSqlburgers) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbSqlburgers);
    });
  });

// Returns landing page 
app.get("/", function(req, res) {
  db.Sqlburgers.findAll({}).then(function(dbSqlburgers) {
    var hbsObject = {
      burgers: dbSqlburgers
    };
    //console.log(dbSqlburgers);
    res.render("index", hbsObject);
  });
});

  // POST route for saving a new burger
  app.post('/api/burger', function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Sqlburgers
      .create({
        burger: req.body.burger,
        devoured: req.body.devoured
      })
      .then(function(dbSqlburgers) {
        // We have access to the new burger as an argument inside of the callback function
        res.json(dbSqlburgers);
      });
  });

  // PUT route for updating sqlburgers. We can get the updated burger from req.body
  app.put('/api/burger/:id', function(req, res) {
    console.log(req.body);
    db.Sqlburgers
      .update(
        {
          burger: req.body.burger,
          devoured: true,
          devourer: req.body.devourer
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
      .then(function(dbSqlburgers) {
        res.json(dbSqlburgers);
      });
  });
};
