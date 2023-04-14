const mongoose = require('mongoose')

// Once again. For this file to work, change "<password>" to the actual password. Only this non-functional version is pushed to git for safety reasons
const url = 'mongodb+srv://botondb:<password>@cluster0.mvsvx.mongodb.net/phoneb'

mongoose.connect(url)

const Person = mongoose.model('Person', {
	name: String,
	number: String,
	id: Number
}, 'persons' )

module.exports = Person
