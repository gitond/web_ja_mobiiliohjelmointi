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
			<h1>{props.course.name}</h1>
		</div>
	)
}

const Contents = (props) => {
	return (
		<div>
			{props.course.parts.map(part => <Part key={part.id} pNo={part.name} eNo={part.exercises}/>)}
		</div>
	)
}

// Total not used in current version
const Total = (props) => {
	return (
		<div>
			<p>Total {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises} exercises</p>
		</div>
	)
}

const Course = (props) => {
	return (
		<div>
			<Header course={props.course} />
			<Contents course={props.course} />
		</div>
	)
}

const App = () => {
	const course = {
		name: 'Superadvanced web and mobile programming',
		parts: [
			{
				name: 'Basics of React',
				exercises: 8,
				id: 1
			},
			{
				name: 'Using props',
				exercises: 10,
				id: 2
			},
			{
				name: 'Component states',
				exercises: 12,
				id: 3
			}
		]
	}
	return (
		<div>
			<Course course={course} />
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
