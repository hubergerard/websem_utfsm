// module.exports.set = function(app) {
	
	// var webServices = require('../web_services/webServices.js');
	// var Musee = require('../model/musee.js');
	
    // app.all('*', function(req, res, next) {
		// res.header('Access-Control-Allow-Origin', '*');
		// res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
		// res.header('Access-Control-Allow-Headers', 'Content-Type');
		// next();
	// });

	// app.get('/', function(req, res, next) {
	  // Handle the get for this route
	// });

	// app.post('/', function(req, res, next) {
	 // Handle the post for this route
	// });

	// app.get('/api/musees', function(req, res) {

		// use mongoose to get all musees in the database
		// Musee.find(function(err, musees) {

			// if (err) {
				// res.send(err);
			// } else {
				// res.json(musees); // return all in JSON format
			// }
		// });
	// });
	
	// app.get('/api/musees/ville/:villes', function(req, res) {

		// webServices.getCities(req.params.villes,function(cities){
			// console.log("Cities found : " + cities);
			// use mongoose to get all musees in the database
			// Musee.find({'ville' : { $in: cities }}, function(err, musees) {
				
				// if (err) {
					// res.send(err);
				// } else {
					// res.json(musees); // return all in JSON format
				// }
			// });
		
		// });

	// });
	
	// app.get('/api/musees/tag/:tag', function(req, res) {
	
		// var tag = req.params.tag;
		// Musee.find({'tags' : tag}, function(err, musees) {
			
			// if (err) {
				// res.send(err);
			// } else {
				// res.json(musees); // return all in JSON format
			// }
		// });
	// });
	
	// app.put('/api/musees/tags', function(req,res) {
		// var tag = req.body.tag;
		// var id = req.body.id;
		
		// Musee.findById(id, function(err, musee) {
			// var tags = musee.tags;
			
			// if (tags.indexOf(tag) == -1) {
				// console.log(id);
				// tags.push(tag);
				// musee.update({
					// tags : tags
				// }, function (err, museeID) {
					// if (err) {
						// res.send("There was a problem updating the information to the database: " + err);
					// } else {
						// res.format({
							// json: function(){
								// res.json(musee);
							// }
						// });
					// }
				// });
			// }
		// });
	// });
// }