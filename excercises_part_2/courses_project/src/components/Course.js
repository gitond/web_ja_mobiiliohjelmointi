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

const Course = (props) => {
	return (
		<div>
			<Header course={props.course} />
			<Contents course={props.course} />
		</div>
	)
}

export default Course
