import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function IncDecCounter(props) {
  return (
    <div>
      <label>Count1:{props.count} </label>
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onDecrement}>-</button>
    </div>
  );
}
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  //set the state in class component
  handlePlusClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleMinusClick = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <h1>Simple Counter</h1>

        {/* Here, state is declared at  class level (Parent).
        so ,
        both the counters share the same state */}

        <IncDecCounter
          count={this.state.count}
          onIncrement={this.handlePlusClick}
          onDecrement={this.handleMinusClick}
        />

        <IncDecCounter
          count={this.state.count}
          onIncrement={this.handlePlusClick}
          onDecrement={this.handleMinusClick}
        />
      </>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
