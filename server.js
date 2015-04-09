// BASE SETUP
// ============

// CALL THE PACKAGES
// -------------------
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var config = require('./config');
var path = require('path');
var http = require('http');
var https = require('https');
var fs = require('fs');


// APP CONFIGURATION
// ===================
// use body parser to grab info from POST requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// configure our app to handle CORS requests
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

// log all requests to the console
app.use(morgan('dev'));

// connect to the database
mongoose.connect(config.database);

// set static files location
app.use(express.static(__dirname + '/public'));


// ROUTES
// ========

// API ROUTE
// -------------
var apiRoutes = require('./app/routes/api')(app, express);
app.use('/api', apiRoutes);

// MAIN CATCHALL ROUTE
// ---------------------
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});


// START THE SERVER
// ==================
var options = {
	key: fs.readFileSync('server-key.pem'),
	cert: fs.readFileSync('server-crt.pem')
}
https.createServer(options, app, function(req, res) {
	res.end('secure');
	console.log('secure server running on port 443');
}).listen(443);
http.createServer(function(req, res) {
	res.writeHead(301, {"Location": "https://"+req.headers['host']+req.url});
	res.end();
	console.log('server running on port 80');
}).listen(80);

