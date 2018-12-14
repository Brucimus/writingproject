//requiring dontenv
require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var db = require("./db");
var app = express();
const passport = require('./passport');

// var passport = require("passport");
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.static("public"));
app.use(express.static(__dirname+'/public'));

// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser

app.use( (req, res, next) => {
	console.log('req.session', req.session);

	return next();
});

// ==== if its production environment!
if (process.env.NODE_ENV === 'production') {
	const path = require('path')
	console.log('YOU ARE IN THE PRODUCTION ENV')
	app.use('/static', express.static(path.join(__dirname, '../build/static')))
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../build/'))
	})
}

// Routes



  // ====== Error handler ====
app.use(function(err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
})

// ==== Starting Server =====
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})