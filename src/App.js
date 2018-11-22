import React, { Component } from 'react';
import Rectangle from "./components/Rectangle/Rectangle";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Rectangle text={"Привет"}/>
        <Rectangle text={"Привет"} style={{backgroundColor: "yellow", width: "500px"}}/>
      </div>
    );
  }
}

export default App;
