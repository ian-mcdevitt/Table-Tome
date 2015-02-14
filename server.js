// BASE SETUP
// ============

// CALL THE PACKAGES
// -------------------
var express = require('express'), app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');
var path = require('path');


// APP CONFIGURATION
// ===================
// use body parser to grab info from POST requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// connect to the database
// mongoose.connect(config.database);

// set static files location
app.use(express.static(__dirname + '/public'));


// ROUTES
// ========
// MAIN CATCHALL ROUTE
// ---------------------
// send users to the frontend
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});


// START THE SERVER
// ==================
app.listen(config.port);
console.log('Application running on post ' + config.port);
