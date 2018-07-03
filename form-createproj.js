var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var mysql = require('mysql');
var util = require('util');
var session = require('./usersession');
exports.startformcreateproj = function (app) {
app.post('/form3',urlencodedParser, function (req, res) {
	if (!req.body) return res.sendStatus(400);
	//res.send(req.body);
	var fname1= req.body.FirstName;
	console.log(fname1);
	var lname1 = req.body.LastName;
	console.log(lname1);
	var custmob1 = req.body.MobileNo;
	console.log(custmob1);
	var custemail1 = req.body.email;
	console.log(custemail1);
	var country1 = req.body.country;
	console.log(country1);
	var pname1 = req.body.projName;
	console.log(pname1);
	var qty1 = req.body.qty;
	console.log(qty1);
	var pstartdate1 = req.body.fromDate;
	console.log(pstartdate1);
	var penddate1 = req.body.toDate;
	console.log(penddate1);
	var pdescription1 = req.body.projdesc;
	console.log(pdescription1);
	var client_id1,comp_id1;
	var sql_client_id = util.format('SELECT client_id from client WHERE mob="%d" AND clientemail="%s"',custmob1, custemail1);

		var con = mysql.createConnection({
		  host: "127.0.0.1",
		  user: "root",
		  password: "",
		  database: "promang",
		  port: 3307
		});

		con.connect(function(err) {
		  if (err) throw err;
		  console.log("Connected!");
		});
		con.query(sql_client_id, function (err, result) {
			if (err) throw err;
			client_id1 = result[0].client_id;
			console.log(result[0].client_id);
			insproj();
		});
		console.log(client_id1);
		function insproj() {
		var sql = util.format('INSERT INTO project (pname, qty, pstartdate, penddate, pdescription, client_id, comp_id) VALUES ("%s","%d","%s","%s","%s","%d","%d")',pname1, qty1, pstartdate1, penddate1, pdescription1, client_id1, session.userid);
		console.log(sql);
		con.query(sql, function (err, result1) {
			if (err) throw err;
			console.log(result1);
			console.log("1 record inserted.");
			//return res.redirect("/dash");
			return res.redirect("/rev2-company-page");
		});
		}
	});
}
