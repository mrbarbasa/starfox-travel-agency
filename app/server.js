// INIT AND LIBRARIES
var express = require('express');
var app = express();

// MIDDLEWARE
app.use(express.static('public'));
app.engine('html', require('ejs').renderFile);

// ROUTES
app.get('/', function(req, res) {

  var locals = {
    myname: "this stuff",
    mypets: [
      "mochi",
      "crunch",
      "boba"
    ]
  };

  res.render('./index.ejs', locals);
});

// EXPORT THIS FILE AS A MODULE
module.exports.app = app;
