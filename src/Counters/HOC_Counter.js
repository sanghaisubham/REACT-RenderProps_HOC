import React from "react";
import ReactDOM from "react-dom";

// Simple React Component
function IncDecCounter(props) {
  return (
    <>
      <label>Count: {props.counter} </label>
      <button onClick={props.onIncrement}> + </button>
      <button onClick={props.onDecrement}> - </button>
    </>
  );
}
//---------------------------Higher Order Component-------------------------

//A class Component inside a functional component
function statefulCounter(Counter) {
  class HOCCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0
      };
      this.onIncrement = this.onIncrement.bind(this);
      this.onDecrement = this.onDecrement.bind(this);
    }

    onIncrement() {
      this.setState(prevState => ({ counter: prevState.counter + 1 }));
    }

    onDecrement() {
      this.setState(prevState => ({ counter: prevState.counter - 1 }));
    }

    render() {
      return (
        <Counter
          counter={this.state.counter}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
        />
      );
    }
  }
  return HOCCounter;
}

const NewCounter = statefulCounter(IncDecCounter);
const NewCounter1 = statefulCounter(IncDecCounter);
//--------------------------------------------------------

function App() {
  return (
    <div className="App">
      <h1>Counter using Higher Order Component:</h1>
      <NewCounter />
      <br />
      <NewCounter1 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
