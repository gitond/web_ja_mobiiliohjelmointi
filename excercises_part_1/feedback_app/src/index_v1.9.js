import React from 'react';
import ReactDOM from 'react-dom';

const Feedback = ({ type, val }) => {	// A container for the feedback counters
	return(
		<div>
			<p>{type} feedback: {val}</p>
		</div>
	)
}

const Statistic = ({ text, val }) => { // Container for rendering the statistics calculated from the feedback
	return(
		<div>
			<p>{text} : {val}</p>
		</div>
	)
}

const Statistics = ({ curState }) => {
	if(curState.positive + curState.neutral + curState.negative == 0){
		return (
			<div>
				<h2>Statistics</h2>
				<p>No Feedback given yet</p>
			</div>
		)
	} else {
		return (
			<div>
				<h2>Statistics</h2>
				<Feedback type="Positive" val={curState.positive} />
				<Feedback type="Neutral" val={curState.neutral} />
				<Feedback type="Negative" val={curState.negative} />
				<Statistic text="Average" val={
					// Keskiarvon lasku täällä:
					// (curState.positive - curState.negative)	Feedbackkien "arvon" laskenta (Positiivinen:1 Negatiivinen:-1)
					// (curState.positive + curState.neutral + curState.negative)	kaikkien palautteiden (kappalemäärä) summan laskeminen
					// Keskiarvo = arvot/(arvojen lukumäärä)
					// .toFixed(1) pyöristää 1 desimaalin tarkkuudelle (tehtävänannon esimerkissä oli)
					((curState.positive - curState.negative)/(curState.positive + curState.neutral + curState.negative)).toFixed(1)
				} />
				<Statistic text="Positive ratio" val={
					// Ration lasku prosentteina:
					// (positiivisten lkm)/(kaikkien lkm) * 100
					// .toFixed(1) pyöristää 1 desimaalin tarkkuudelle (tehtävänannon esimerkissä oli)
					// .toString() + " %" renderöi prosenttimerkin luvun perään
					(((curState.positive/(curState.positive + curState.neutral + curState.negative)) * 100).toFixed(1)).toString() + " %"
				} />
			</div>
		)
	}
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

				// Pos Neg ja Neutr tuloksien lisääminen

				//HUOM! setState komennot tuntuvat toimivan viiveellä, (console.log heti päivityksen jälkeisellä rivillä on ns. "myöhässä" eli antaa ennen päivitystä olevan arvon (arvo kyllä päivittyy koska renderöinti toimii oikein!) mikäli aiheuttaa ongelmia jatkossa investigate!!

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
				<Statistics curState={this.state}/>
			</div>
		)

	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
