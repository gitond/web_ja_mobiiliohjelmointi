// Importing relevant libraries and storing them in constants (Old js syntax for libraries)
const express = require('express')
const bP = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const Person = require('./models/person') //NOTE: this module communicates with a remote database and there is a place to enter the database password in the person.js file itself. Before This file can be usedone has to manually edit it to enter the password since the password is not on the git version of the file

// Server setup
const server = express()			// Serverin luonti expressillä
server.use(bP.json())				// Otetaan body parser käyttöön, jotta serveri pystyy tulkitsemaan POST requestejä
server.use(cors())
server.use(express.static('build'))

// Hardkoodatut tiedot (let muodossa jotta delete request toimisi)

let persons = [
	{
		"name": "Arto Hellas",
		"number": "040-123456",
		"id": 1
	},
	{
		"name": "Martti Tienari",
		"number": "040-123456",
		"id": 2
	},
	{
		"name": "Arto Järvinen",
		"number": "040-123456",
		"id": 3
	},
	{
		"name": "Lea Kutvonen",
		"number": "040-123456",
		"id": 4
	}
]

// TODO: Consider maybe adding a note formatter if deemed necessary

// Serverin toiminnallisuudet
server.get('/api/persons/', (request, response) => {	// response GET requestuestiin default URL llä
	Person
		.find({})
		.then(ppl => {
			response.json(ppl)
		})
})

server.get(/^\/api\/persons\//i, (request, response) => {	// response GET requestuestiin jonka URL alkaa: "/api/persons/3"
	let idMatchList = []

	if(request.url.length > 13 && !/[^0-9]/.test(request.url.substring(13))){	// !/[^0-9]/.test on regexpohjainen testaus sille onko "Base URL" jälkeen numero (pitää olla, jotta ohjelma toimii)
		Person
			.find({ id: parseInt(request.url.substring(13)) })
			.then(result => {
				result.forEach(sResult => {
					idMatchList.push(sResult)
				})
				response.json(idMatchList)
			})
	}
})

server.delete('/api/persons/:inpId', (request, response) => {
	Person
		.find({ id: request.params.inpId })
		.then(result => {
			result.forEach(sResult => {
				console.log(sResult._id.toString())

				Person
					.findByIdAndRemove(sResult._id.toString())
					.then( result => {
						response.status(204).end()
					})
					.catch(error => {
						response.status(400).send({ error: 'malformatted id' })
					})
			})
		})

	/*
	Person
		.findByIdAndRemove(request.params._id) // jossa _id on tietokannan käyttämä id
		.then( result => {
			response.status(204).end()
		})
		.catch(error => {
			response.status(400).send({ error: 'malformatted id' })
		})
	*/

	/*
	const id = Number(request.params.id)
	persons = persons.filter(person => person.id !== id) // Tallenna muuttujaan persons (jossa hardkoodatut tiedot), kaikki muut persons jäsenet, paitsi se jonka id vastaa delete requestiä

	response.status(204).end()
	*/
})

server.post('/api/persons', (request, response) => {
	const newPers = request.body

	// Requestin muodon tarkistus
	if (request.body.name === undefined || request.body.number === undefined){
		return response.status(400).json({error: 'request body should have name and number'})
/*	} else if(( persons.find( ({ name }) => name === request.body.name ) !== undefined ) ){ // Mikäli tämän niminen henkilö on luettelossa
		return response.status(400).json({ error: 'name must be unique' })*/
	} else {
		// Oikeanlaisen id lisääminen
		newPers.id = Math.floor(Math.random()*100000)	// Math.random antaa satunnaisluvun välillä [0,1] joka skaalataan välille [0,100000]

		// Formatointi (olemassa olevan olion tallennus Person datatyyppiin tietokantaa varten
		const newPersReform = new Person({
			name: newPers.name,
			number: newPers.number,
			id: newPers.id
		})

		newPersReform
			.save()
			.then(savedPerson => {
				response.json(newPersReform)
			})
	}
})

const PORT = process.env.PORT || 3001
server.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })
