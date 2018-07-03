var path = require('path');
exports.startreg = function (app) {
	
	app.get('/signup.css', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'signup.css'));
	});
	app.get('/validate.js', function (req, res) {
	  res.sendFile(path.join(__dirname, 'ui', 'validate.js'));
	});
}