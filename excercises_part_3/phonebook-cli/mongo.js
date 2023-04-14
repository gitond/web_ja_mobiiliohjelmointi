const mongoose = require('mongoose')

// Salasanaton versio gitjulkaisua varten
// käyttöä varten: korvaa "<password>" tietokannan phoneb käyttäjän botondb salasanalla
const url = 'mongodb+srv://botondb:<password>@cluster0.mvsvx.mongodb.net/phoneb'

mongoose.connect(url)

const Person = mongoose.model('Person', {
	name: String,
	number: String,
	id: Number
}, 'persons' )

if (process.argv[2] !== undefined && process.argv[3] !== undefined) { 	// Jos ohjelmalle on annettu parametrit
									// HUOM! Tässä tehdään oletus että nimiparametri on indeksissä 2, numeroparametri indeksissä 3 ja molemmat ovat Stringejä!
	const person = new Person({
		name: process.argv[2],
		number: process.argv[3],
		id: Math.floor(Math.random()*100000) // id generaatio pöllitty ../phoneboock-back/index.js
	})
	person
		.save()
		.then(response => {
			console.log('adding person ' + process.argv[2] + ' number ' + process.argv[3] + ' to the directory')
			mongoose.connection.close()
	})
} else {
	Person
		.find({})
		.then( persons => {
			console.log("puhelinluettelo:")
			persons.forEach(person => {
				console.log(person.name + " " + person.number)
			})
			mongoose.connection.close()
	})
}
