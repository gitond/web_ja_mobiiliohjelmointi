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
			<Part pNo={props.part1} eNo={props.exercises1} />
			<Part pNo={props.part2} eNo={props.exercises2} />
			<Part pNo={props.part3} eNo={props.exercises3} />
		</div>
	)
}

const Total = (props) => {
	return (
		<div>
			<p>Total {props.exercises1 + props.exercises2 + props.exercises3} exercises</p>
		</div>
	)
}

const App = () => {
	const course = 'Superadvanced web and mobile programming'
	const part1 = 'Basics of React'
	const exercises1 = 8
	const part2 = 'Using props'
	const exercises2 = 10
	const part3 = 'Component states'
	const exercises3 = 12

	return (
		<div>
			<Header course={course} />
			<Contents part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
			<Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
