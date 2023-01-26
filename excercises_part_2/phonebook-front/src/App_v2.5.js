import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			persons: [
				{ name: 'Arto Hellas', id:0 }
			],
			newName: '',
		}
	}

	// -- Event control -- //

	inptChangeCtrl = (event) => {
		console.log(event.target.value)
		this.setState({ newName: event.target.value })
	}

	addPerson = (event) => {
		event.preventDefault()

		// inputista saadun nimen (newName) lisääminen kontaktilistaan (persons)
		if (this.state.persons.map(person => person.name).includes(this.state.newName)){
			alert("Antamasi nimi jo luettelossa")
		} else {
			let addPerson = Object.assign({}, this.state.persons[this.state.persons.length - 1]) // Object.assign(a,b) kopioi objektiin a (tässä tyhjä objekti {}) objektin b ominaisuuksia ja arvoja. Tässä b on Arrayn persons viimeinen jäsen (joka on alussa { name: 'Arto Hellas'} ) jolloin tyhjään objektiin kopioidaan parametri name sekä sen arvo
			addPerson.name = this.state.newName
			addPerson.id++

			console.log("adding Person " + addPerson.name)

			const modifiedPersons = this.state.persons.concat(addPerson)

			this.setState({
				persons: modifiedPersons,
				newName: ''
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
							onChange={this.inptChangeCtrl}
						/>
					</div>
					<div>
						<button type="submit">lisää</button>
					</div>
				</form>
				<h2>Numerot</h2>
				{this.state.persons.map(person => <p key={person.id}>{person.name}</p>)}
			</div>
		)
	}
}

export default App
