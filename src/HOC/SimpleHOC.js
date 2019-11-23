import React from "react";
import ReactDOM from "react-dom";

const hoc = WrappedComponent => props => {
  return (
    <div>
      <WrappedComponent {...props}>
        {props.children.toUpperCase()}
      </WrappedComponent>
    </div>
  );
};

const Username = props => <div>{props.children}</div>;
//wrap Username with the higher-order component.
const UpperCaseUsername = hoc(Username);

const App = () => (
  <div>
    <UpperCaseUsername>Subham</UpperCaseUsername>
  </div>
);
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
