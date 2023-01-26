import React from 'react';
import ReactDOM from 'react-dom';

const Part = (props) => {
	return (
		<div>
			<p>{props.pNo} {props.eNo}</p>
		</div>
	)
}

const Header = (props) => {
	return (
		<div>
			<h1>{props.course}</h1>
		</div>
	)
}

const Contents = (props) => {
	return (
		<div>
			<Part pNo={props.parts[0].name} eNo={props.parts[0].exercises} />
			<Part pNo={props.parts[1].name} eNo={props.parts[1].exercises} />
			<Part pNo={props.parts[2].name} eNo={props.parts[2].exercises} />
		</div>
	)
}

const Total = (props) => {
	return (
		<div>
			<p>Total {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} exercises</p>
		</div>
	)
}

const App = () => {
	const course = 'Superadvanced web and mobile programming'
	const parts = [
		{
			name: 'Basics of React',
			exercises: 8
		},
		{
			name: 'Using props',
			exercises: 10
		},
		{
			name: 'Component states',
			exercises: 12
		}
	]

	return (
		<div>
			<Header course={course} />
			<Contents parts={parts} />
			<Total parts={parts} />
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
