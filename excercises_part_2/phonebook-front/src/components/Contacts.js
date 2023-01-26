import React from 'react';
import axios from 'axios';

const Contact = (props) => {

	/*
	constructor(props) {
		super(props);
		this.poista = this.poista.bind(this)
	}

	poista = (event) => {
		event.preventDefault();
		console.log("poista")
	}

	//this.poista = this.poista.bind(this);
	*/

	/*
				<form onsubmit={this.poista}>
					<button type="submit">poista</button>
				</form>
	*/

	return (
		<tr>
			<td>{props.name}</td>
			<td>{props.numero}</td>
			<td>
				<button onClick={() => {
					axios
						.delete("http://localhost:3001/persons/" + props.id)
						.then(() => {window.location.reload(true);})
					/*
					if(window.confirm("Poistetaanko " + props.name)){
						console.log("Poistettu " + "localhost:3001/persons/" + props.id)
						window.location.reload(true); //Uudelleenlataa sivun (jolloin serveristä ladataan päivittyneet tiedot) (tämä on huono ratkaisu korvaa mahdollisesti myöhemmin
					 }
					 */
				}}>poista</button>
			</td>
		</tr>
	)
}

export default Contact
