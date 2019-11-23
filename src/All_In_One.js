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

//------------------------Render Props---------------
class MyCounter extends React.Component {
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
      <>
        {this.props.render(
          this.state.counter,
          this.onIncrement,
          this.onDecrement
        )}
      </>
    );
  }
}
//---------------------------Higher Order Component-------------------------

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
        <Counter counter={this.state.counter} onIncrement={this.onIncrement} />
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
      <h1>Counter using render props:</h1>
      <MyCounter
        render={(counter, onIncrement, onDecrement) => (
          <>
            <label>Count: {counter} </label>
            <button onClick={onIncrement}> + </button>
            <button onClick={onDecrement}> - </button>
          </>
        )}
      />
      <br />
      <MyCounter
        render={(counter, onIncrement, onDecrement) => (
          <>
            <label>Count: {counter} </label>
            <button onClick={onIncrement}> + </button>
            <button onClick={onDecrement}> - </button>
          </>
        )}
      />
      <br />

      <h1>Counter using Higher Order Component:</h1>
      <NewCounter />
      <br />
      <NewCounter1 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
