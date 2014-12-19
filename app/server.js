// INIT AND LIBRARIES
var express = require('express');
var app = express();

// MIDDLEWARE
app.use(express.static('./static'));
app.set('view engine', 'jade');

// ROUTES
app.get('/', function(req, res) {

  var locals = {
    main_options: [
      {
        title: "To the Moon",
        price: "$30,000",
        description: "Covers travel fare, lodgings, and meals for 3 months in space." 
      },
      {
        title: "Just Around Earth",
        price: "$10,000",
        description: "Covers travel fare, lodgings, and meals for 2 weeks in space."
      }
    ],
    more_deals: [
      {
        title: "Just to Jupiter",
        price: "$26,000"
      },
      {
        title: "Center of the Earth",
        price: "$156,000"
      }
    ]
  };

  res.render('./index', locals);
});

// EXPORT THIS FILE AS A MODULE
module.exports.app = app;
