import React, { Component } from "react";
import Decrement from "./Decrement";
import css from "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Decrement start={10} />
        <Decrement start={5} />
      </>
    );
  }
}

export default App;
