import React from 'react';

const Contact = (props) => {
	return (
		<tr>
			<td>{props.name}</td>
			<td>{props.numero}</td>
		</tr>
	)
}

export default Contact
