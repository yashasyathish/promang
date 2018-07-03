var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var mysql = require('mysql');
var express = require('express');
var util = require('util');
var cookieParser = require('cookie-parser');
var session = require('./usersession');
var app = express();
var setCookie = require('set-cookie');
 
// In, for example, an Express middleware. 

app.use(cookieParser());
const cryptoRandomString = require('crypto-random-string');


/*request({
  url: '/ind',
  method: 'GET',

}, function(err, res, body) {
	body=session.userid;
  
});*/
var select = 0;
exports.startlogincheck = function (app) {
app.post('/login',urlencodedParser, function (req, res) {
	if (!req.body) return res.sendStatus(400);
	//res.send(req.body);
	var loginuname = req.body.username;
	var loginpwd = req.body.pwd;
	
			var options = {
			host: 'localhost',// Host name for database connection. 
			//port: 7080,// Port number for database connection. 
			user: 'root',// Database user. 
			password: 'root',// Password for the above database user. 
			database: 'promang',// Database name. 
			connectionLimit: 1,// Number of connections when creating a connection pool 

		};
	var sess=req.session;
	var sql = util.format('SELECT * FROM company WHERE uname="%s" AND pwd="%s"',loginuname, loginpwd);
	var sql1 = util.format('SELECT * FROM client WHERE uname="%s" AND pwd="%s"',loginuname, loginpwd);
		var con = mysql.createConnection(options);

		con.connect(function(err) {
		  if (err) throw err;
		  console.log("Connected!");
		});
		
		con.query(sql, function (err, result) {
			if (err) throw err;
			if(result.length == 1) {
				console.log("company login successful");
				select=1;
				var sec=cryptoRandomString(10);
				
				session.userid=result[0].comp_id;
				session.sessionid=sec;
				session.type="company";
				console.log(session.userid);
				console.log(session.sessionid);
				console.log(session.type);
				app.use(function(req, res, next) {
				  setCookie('myCookie', 'the value of the cookie', {
					domain: '.example.org',
					res: res
				  });
				  next();
				});				
				return res.redirect("/rev2-company-page");
				
			}
		});
		con.query(sql1, function (err, result1) {
			if (err) throw err;
			if(result1.length == 1) {
				console.log("client login successful");
				select=2;
				var sec=cryptoRandomString(10);
				
				session.userid=result1[0].client_id;
				session.sessionid=sec;
				session.type="client";
				console.log(session.userid);
				console.log(session.sessionid);
				console.log(session.type);
				app.use(function(req, res, next) {
				  setCookie('myCookie', 'the value of the cookie', {
					domain: '.example.org',
					res: res
				  });
				  next();
				});				
				return res.redirect("/rev2-company-page");
				
				
			}
		});

/*
		if(select == 1) 
		else if(select == 2) 
		else{
			console.log("login unsuccessful");
			//return res.redirect("");
		}
*/
	});



}
