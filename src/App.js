import React, { Component } from 'react';
import Rectangle from "./components/Rectangle/Rectangle";
import RectangleWithState from "./components/RectangleWithState/RectangleWithState";
import Circle from "./components/Circle/Circle";
import './App.css';

function check() {
	const a = 15;
	console.log(a);
	function checkVariable() {
		console.log(a);
	}
	checkVariable();
}

class App extends Component {
	render() {
		check();
		return (
			<div className="App">
				<Rectangle text={"Привет"} style={{ backgroundColor: "yellow", width: "500px" }} >
					<Circle >
						<p>React</p>
					</Circle>
				</Rectangle>
				<RectangleWithState textProps={"first"} />
			</div>
		);
	}
}

export default App;
