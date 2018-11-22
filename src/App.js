import React, { Component } from 'react';
import Rectangle from "./components/Rectangle/Rectangle";
import RectangleWithState from "./components/RectangleWithState/RectangleWithState";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Rectangle text={"Привет"} style={{backgroundColor: "yellow", width: "500px"}}/>
        <RectangleWithState textProps={"first"}/>
      </div>
    );
  }
}

export default App;
