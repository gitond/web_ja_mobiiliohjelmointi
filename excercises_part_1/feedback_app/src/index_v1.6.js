import React from 'react';
import ReactDOM from 'react-dom';

const Feedback = ({ type, val }) => {
	return(
		<div>
			<p>{type} feedback: {val}</p>
		</div>
	)
}

const FeedbackContainer = ({ curState }) => {
	return (
		<div>
			<Feedback type="Positive" val={curState.positive} />
			<Feedback type="Neutral" val={curState.neutral} />
			<Feedback type="Negative" val={curState.negative} />
		</div>
	)
}

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			positive: 0,
			neutral: 0,
			negative: 0
		}
	}

	render(){

		const bAction = (what2Upd) => {
			const funcToRet = () => {
				if (what2Upd == 'positive') {
					this.setState({ positive: this.state.positive + 1 })
					//console.log(this.state.positive)
				} else if (what2Upd == 'negative'){
					this.setState({ negative: this.state.negative + 1 })
					//console.log(this.state.negative)
				} else {
					this.setState({ neutral: this.state.neutral + 1 })
					//console.log(this.state.neutral)
				}
			}
			return funcToRet
		}

		return (
			<div>
				<button onClick={bAction('positive')}>good</button>
				<button onClick={bAction('neutral')}>neutral</button>
				<button onClick={bAction('negative')}>poor</button>
				<h2>Statistics</h2>
				<FeedbackContainer curState={this.state}/>
			</div>
		)

	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
