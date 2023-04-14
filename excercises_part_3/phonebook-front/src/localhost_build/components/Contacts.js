import React from 'react';
import axios from 'axios';

const Contact = (props) => {

	return (
		<tr>
			<td>{props.name}</td>
			<td>{props.numero}</td>
			<td>
				<button onClick={() => {
					axios
						.delete("http://localhost:3001/api/persons/" + props.id)
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
