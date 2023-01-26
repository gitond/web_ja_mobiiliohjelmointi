import React from 'react';
import Contact from './Contacts';

const CTable = (props) => {
	return (
		<table>
			<tbody>
				{props.persons.map(person => <Contact key={person.id} name={person.name} numero={person.numero}/>)}
			</tbody>
		</table>
	)
}

export default CTable
