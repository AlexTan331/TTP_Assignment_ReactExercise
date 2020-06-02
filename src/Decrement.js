import React, { Component } from "react";
import propTypes from "prop-types";

class Decrement extends Component {
  constructor(props) {
    super(props);
    this.state = { number: props.start };
  }

  decrementHandler = (state) => {
    if (state.number === 0) return alert("Cannot be less than zero");
    this.setState({ number: state.number - 1 });
  };

  render() {
    return (
      <div ID="center">
        {this.state.number}{" "}
        <button onClick={() => this.decrementHandler(this.state)}>
          Decrement
        </button>
      </div>
    );
  }
}

Decrement.propTypes = {
  start: propTypes.number.isRequired,
};
export default Decrement;
