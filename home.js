var path = require('path');
var re=0;
var dash=0;
var project=0;
exports.starthome = function (app) {
/*var express = require('express');
var morgan = require('morgan');


var app = express();
app.use(morgan('combined'));*/

	app.get('/', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'home-lat.html'));
	});
	app.get('/nav.html', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'nav.html'));
	});
	app.get('/login.html', function (req, res) {
	res.sendFile(path.join(__dirname, 'ui', 'login.html'));
	});
	app.get('/main.css', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'main.css'));
	});

	app.get('/feature.css', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'feature.css'));
	});
	app.get('/signup.css', function (req, res) {
	res.sendFile(path.join(__dirname, 'ui', 'signup.css'));
	});

	app.get('/logo2.png', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'logo2.png'));
	});
	app.get('/profile.png', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'profile.png'));
	});

	app.get('/client1.png', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'client1.png'));
	});

	app.get('/client2.png', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'client2.png'));
	});

	app.get('/client3.png', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'client3.png'));
	});

	app.get('/client4.png', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'client4.png'));
	});
	app.get('/login', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'login.html'));
	});
	app.get('/clientregister', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'clientreg.html'));
	  if(re==0){
	  re = require('./reg');
      re.startreg(app);
	  }
	});
	app.get('/companyregister', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'compreg.html'));
	  if(re==0){
	  re = require('./reg');
      re.startreg(app);
	  }
	});
	app.get('/rev2-company-page', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'rev2-company-page.html'));
		if(dash==0){
		dash = require('./dash');
    dash.startdash(app);
	
	}
	});
	app.get('/projectpage', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'excel-1.html'));
		if(project==0){
		project = require('./projectschedule');
        project.startprojectpage(app);
		project.startschedulesave(app);
	}
	

	});
};
