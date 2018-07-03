var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var mysql = require('mysql');
var util = require('util');
exports.startform2 = function (app) {
app.post('/form2',urlencodedParser, function (req, res) {
	if (!req.body) return res.sendStatus(400);
//	res.send(req.body);
	var access_code2 = req.body.accesscode;
	var fname2= req.body.FirstName;
	var lname2= req.body.LastName;
	var mob2 = req.body.MobileNo;
	var clientemail2 = req.body.email;
	var uname2 = req.body.username;
	var pwd2 = req.body.pwd;
	var sql = util.format('INSERT INTO client (access_code, fname, lname, mob, clientemail, uname, pwd) VALUES ("%s","%s","%s","%d","%s","%s","%s")',access_code2, fname2, lname2, mob2, clientemail2, uname2, pwd2);
		var con = mysql.createConnection({
		  host: "localhost",
		  user: "root",
		  password: "root",
		  database: "promang"
		});

		con.connect(function(err) {
		  if (err) throw err;
		  console.log("Connected!");
		});
		con.query(sql, function (err, result) {
			if (err) throw err;
			console.log("1 record inserted");
			return res.redirect("/");
		});
	});
}
