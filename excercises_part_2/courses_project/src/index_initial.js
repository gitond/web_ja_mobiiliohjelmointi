import React from 'react';
import ReactDOM from 'react-dom';

// Versio courses_project/src/index.js tiedostosta joka oli viimeisin ennen tehtäväpaketin "Exercises, part 2" aloittamista. Vastaa versiota 1.5

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
			<Part pNo={props.course.parts[0].name} eNo={props.course.parts[0].exercises} />
			<Part pNo={props.course.parts[1].name} eNo={props.course.parts[1].exercises} />
			<Part pNo={props.course.parts[2].name} eNo={props.course.parts[2].exercises} />
		</div>
	)
}

const Total = (props) => {
	return (
		<div>
			<p>Total {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises} exercises</p>
		</div>
	)
}

const App = () => {
	const course = {
		name: 'Superadvanced web and mobile programming',
		parts: [
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
	}
	return (
		<div>
			<Header course={course} />
			<Contents course={course} />
			<Total course={course} />
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
