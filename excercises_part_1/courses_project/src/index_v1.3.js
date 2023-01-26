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
			<Part pNo={props.part1.name} eNo={props.part1.exercises} />
			<Part pNo={props.part2.name} eNo={props.part2.exercises} />
			<Part pNo={props.part3.name} eNo={props.part3.exercises} />
		</div>
	)
}

const Total = (props) => {
	return (
		<div>
			<p>Total {props.part1.exercises + props.part2.exercises + props.part3.exercises} exercises</p>
		</div>
	)
}

const App = () => {
	const course = 'Superadvanced web and mobile programming'
	const part1 = {
		name: 'Basics of React',
		exercises: 8
	}
	const part2 = {
		name: 'Using props',
		exercises: 10
	}
	const part3 = {
		name: 'Component states',
		exercises: 12
	}

	return (
		<div>
			<Header course={course} />
			<Contents part1={part1} part2={part2} part3={part3} />
			<Total part1={part1} part2={part2} part3={part3} />
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
