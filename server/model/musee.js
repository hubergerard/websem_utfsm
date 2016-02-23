var mongoose = require('mongoose'); 

var museeSchema =  new mongoose.Schema({ 
	nomreg: 'string',
	nomdep: 'string',
	dateAppellation: 'string',
	ferme: 'string',
	annReouv: 'string',
	annexe: 'string',
	nomMusee: 'string',
	adresse: 'string',
	cp : 'string',
	ville: 'string',
	site: 'string',
	fermetureAnnuelle: 'string',
	periodeOuverture: 'string',
	joursNocturnes: 'string',
	tags: [String]
});

var Musee = mongoose.model('Musee', museeSchema);

module.exports = Musee;