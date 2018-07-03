var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var mysql = require('mysql');
var util = require('util');
exports.startform = function (app) {
app.post('/form1',urlencodedParser, function (req, res) {
	if (!req.body) return res.sendStatus(400);
//	res.send(req.body);
	var comp_name1 = req.body.companyname;
	var fname1 = req.body.FirstName;
	var lname1= req.body.LastName;
	var email1 = req.body.email;
	var mob1 = req.body.MobileNo;
	var uname1 = req.body.username;
	var pwd1 = req.body.pwd;
	var sql = util.format('INSERT INTO company (comp_name, fname, lname, email, mob, uname, pwd) VALUES ("%s","%s","%s","%s","%d","%s","%s")',comp_name1, fname1, lname1, email1, mob1, uname1, pwd1);
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
