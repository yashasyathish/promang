var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

exports.startprojectpage = function (app) {

	app.get('/schedule.html', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'schedule.html'));

	});
	app.get('/schedule.js', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'schedule.js'));

	});
	app.get('/rev2-company-page.css', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'rev2-company-page.css'));

	});	
	app.get('/excel-1.css', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'excel-1.css'));

	});
		app.get('/timeline.css', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'timeline.css'));

	});

	app.get('/logo2.png', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'logo2.png'));
	});
}	

exports.startschedulesave = function (app) {
	app.post('/schedulesave',urlencodedParser, function (req, res) {
	if (!req.body) return res.sendStatus(400);

	console.log(req.body);
	});

}	