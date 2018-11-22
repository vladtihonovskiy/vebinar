import React, { Component } from 'react';
import Rectangle from "./components/Rectangle/Rectangle";
import RectangleWithState from "./components/RectangleWithState/RectangleWithState";
import Circle from "./components/Circle/Circle";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Rectangle text={"Привет"} style={{backgroundColor: "yellow", width: "500px"}} >
			<Circle >
              <p>React</p>
            </Circle>
        </Rectangle>
        <RectangleWithState textProps={"first"}/>
      </div>
    );
  }
}

export default App;
