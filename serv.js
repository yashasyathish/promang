var express = require('express');
var morgan = require('morgan');
var path = require('path');
var session = require('./usersession');
var mysql = require('mysql');
var util = require('util');

var app = express();
app.use(morgan('combined'));
var dt = require('./home');
dt.starthome(app);
var form1 = require('./form');
form1.startform(app);
var form2 = require('./form-clientreg');
form2.startform2(app);
var login = require('./login-check');
login.startlogincheck(app);
var form3 = require('./form-createproj');
form3.startformcreateproj(app);

var port = 8080;
app.listen(port, function () {
  console.log(`app listening on port ${port}!`);
});

		var options = {
		host: 'localhost',// Host name for database connection. 
		user: 'root',// Database user. 
		password: 'root',// Password for the above database user. 
		database: 'promang',// Database name. 
		connectionLimit: 1,// Number of connections when creating a connection pool 
		};

app.get('/ind', function(req, res){
	console.log(req);
	console.log(session.userid);
console.log(session.type);
		if (session.type=="company"){
	    var sqlprojdet = util.format('SELECT * FROM project WHERE comp_id="%s"',session.userid);
		}
		else{
	    var sqlprojdet = util.format('SELECT * FROM project WHERE client_id="%s"',session.userid);
		}
		var con = mysql.createConnection(options);

		con.connect(function(err) {
		  if (err) throw err;
		  console.log("Connected!");
		});
		
		con.query(sqlprojdet, function (err, result) {
			if (err) throw err;
			console.log("proj det extracted");
			console.log(result.length);
			var resultlength;
			resultlength = result.length;
			//res.send((result.length).toString());
			res.status(200).send((result.length).toString());
		});	
});