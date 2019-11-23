import React from "react";
import ReactDOM from "react-dom";

class MyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    //this.onIncrement = this.onIncrement.bind(this);
    //this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  onDecrement = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  };

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
// Here , functional component calls the Class comonent,
// So,
// each counter has its own state
function App() {
  return (
    <div className="App">
      <h1>Counter using render props:</h1>
      <MyCounter
        render={(counter, onIncrement, onDecrement) => (
          <>
            <label>Count1: {counter} </label>
            <button onClick={onIncrement}> + </button>
            <button onClick={onDecrement}> - </button>
          </>
        )}
      />
      <br />
      <MyCounter
        render={(counter, onIncrement, onDecrement) => (
          <>
            <label>Count2: {counter} </label>
            <button onClick={onIncrement}> + </button>
            <button onClick={onDecrement}> - </button>
          </>
        )}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
