import React from 'react';
import Contact from './components/Contacts';
import CTable from './components/CTable';
import axios from 'axios';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			persons: [],
			newName: '',
			newNumber: ''
		}
	}

	// -- Datan lataaminen servulta ja mounttaaminen -- //
	componentDidMount() {
		console.log('did mount')
		axios
			.get('http://localhost:3001/persons')
			.then(response => {
				console.log('promise fulfilled')
				this.setState({ persons: response.data })
			})
	}

	// -- Event control -- //

	nameChangeCtrl = (event) => {
		console.log(event.target.value)
		this.setState({ newName: event.target.value })
	}

	numChangeCtrl = (event) => {
		console.log(event.target.value)
		this.setState({ newNumber: event.target.value })
	}

	addPerson = (event) => {
		event.preventDefault()

		// inputista saadun nimen (newName) lisääminen kontaktilistaan (persons)
		if (this.state.persons.map(person => person.name).includes(this.state.newName)){
			alert("Antamasi nimi jo luettelossa")
		} else if (this.state.newName == '' || this.state.newNumber == '') {
			alert("Anna nimi ja number")
		} else {
			let addPerson = Object.assign({}, this.state.persons[this.state.persons.length - 1]) // Object.assign(a,b) kopioi objektiin a (tässä tyhjä objekti {}) objektin b ominaisuuksia ja arvoja. Tässä b on Arrayn persons viimeinen jäsen (esim { name: 'Arto Hellas'} ) jolloin tyhjään objektiin kopioidaan parametri name sekä sen arvo. HUOM! Menee rikki jos this.state.persons on tyhjä!!
			addPerson.name = this.state.newName
			addPerson.id++
			addPerson.number = this.state.newNumber

			console.log("adding Person " + addPerson.name + " with number " + addPerson.number)

			const modifiedPersons = this.state.persons.concat(addPerson)

			// Datan lähetys serverille (käyttäen HTTP POST requestiä ja axios kirjastoa)
			axios.post('http://localhost:3001/persons', addPerson)

			this.setState({
				persons: modifiedPersons
			})
		}

		// Tyhjennetään input fieldit joka tapauksessa (ehtolauseiden ulkopuolella)
		this.setState({
			newName: '',
			newNumber: ''
		})
	}

	// -- Rendering -- //

	// Additional debugging code:
	/*
	<div>
		debug: {this.state.newName}
	</div>
	*/
	// Use under render -> return when encessary

	render() {
		return (
			<div>
				<h2>Puhelinluettelo</h2>
				<form onSubmit={this.addPerson}>
					<div>
						nimi: <input
							value={this.state.newName}
							onChange={this.nameChangeCtrl}
						/>
					</div>
					<div>
						number: <input
							value={this.state.newNumber}
							onChange={this.numChangeCtrl}
						/>
					</div>
					<div>
						<button type="submit">lisää</button>
					</div>

				</form>
				<h2>Numerot</h2>
				<CTable persons = {this.state.persons} />
			</div>
		)
	}
}

export default App
