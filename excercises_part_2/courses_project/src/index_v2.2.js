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

const Total = (props) => {
	// Exercise summalaskuri uudelleenkirjoitettu käyttämään .map funktiota, jotta tämä komponentti ei hajoisi jos "Parttien" määrä muuttuu
	// Toimii seuraavasti:
	// props.course.parts 			sisältää käsiteltävät tiedot, käytännössä Array jonka sisältö muotoa Object
	// .map(part => part.exercises) 	ottaa jokaisesta Object ista arvon exercise ja tallentaa ne uuteen Array yn
	// .reduce()				iteroi sille syötetyn funktion mapin luoman Arrayn läpi. Tätä käytetään laskemaan Partsin objektien exercise arvojen summaa
	// Lisää .reduce() käytöstä: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
	// .reduce() funktion nolla on ns. "alkuarvo" .reduce() funktiolle.
	return (
		<div>
			<p>Total {props.course.parts.map(part => part.exercises).reduce((previousValue, currentValue) => previousValue + currentValue,0)} exercises</p>
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
			<Total course={course} />
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
