var path = require('path');
exports.startdash = function (app) {
  app.get('/rev2-company-page.css', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'rev2-company-page.css'));
	});
	app.get('/rev2-company-page.js', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'rev2-company-page.js'));
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
}
