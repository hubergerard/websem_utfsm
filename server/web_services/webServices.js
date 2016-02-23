var geocoder = require('geocoder');

module.exports.getCity = function(query, callback) {
	console.log('Searching for city name from query "' + query + '"');
	
	geocoder.geocode(query, function ( err, data ) {
		
		if (err) console.log('ERROR:'+ err)
		
		console.log(data);
		
		if (data.status == "OK") {
			var city;
			var results = data.results;
			var address_components = results[0].address_components;
			for (var i=0 ; i < address_components.length ; i++){
				if (address_components[i].types[0] == 'locality') {
					city = address_components[i].long_name;
					console.log('City found : ' + city);
					callback(city);
					return;
				}
			}
		}
		
		if (data.status == "ZERO_RESULTS") {
			callback(query);
			return;
		}
		
		callback(query);
	});
}

module.exports.getCities = function(query, callback) {
	console.log('Searching for cities name from query "' + query + '"');
	var cities = [];	
	geocoder.geocode(query, function ( err, data ) {
		
		if (err) console.log('ERROR:'+ err)
		
		console.log(data);
		
		if (data.status == "OK") {
			var city;
			var results = data.results;
			var address_components;
			for (var it=0 ; it < results.length ; ++it) {
				address_components = results[it].address_components; // Faire un for sur results [i]
				for (var i=0 ; i < address_components.length ; i++){
					if (address_components[i].types[0] == 'locality') {
						city = address_components[i].long_name;
						cities.push(city.toUpperCase());
					}
				}
			}
			callback(cities);
			return;
		}
		
		if (data.status == "ZERO_RESULTS") {
			callback(new Array());
			return;
		}
		
		callback(query);
	});
}