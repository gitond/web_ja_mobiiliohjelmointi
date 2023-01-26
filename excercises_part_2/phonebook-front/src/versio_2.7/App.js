import React from 'react';
import Contact from './components/Contacts';
import CTable from './components/CTable';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			persons: [
				{ name: 'Arto Hellas', id:0, numero:"040-123456" }
			],
			newName: '',
			newNumber: ''
		}
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
			alert("Anna nimi ja numero")
		} else {
			let addPerson = Object.assign({}, this.state.persons[this.state.persons.length - 1]) // Object.assign(a,b) kopioi objektiin a (tässä tyhjä objekti {}) objektin b ominaisuuksia ja arvoja. Tässä b on Arrayn persons viimeinen jäsen (joka on alussa { name: 'Arto Hellas'} ) jolloin tyhjään objektiin kopioidaan parametri name sekä sen arvo
			addPerson.name = this.state.newName
			addPerson.id++
			addPerson.numero = this.state.newNumber

			console.log("adding Person " + addPerson.name + " with number " + addPerson.numero)

			const modifiedPersons = this.state.persons.concat(addPerson)

			this.setState({
				persons: modifiedPersons,
				newName: '',
				newNumber: ''
			})
		}
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
						numero: <input
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
