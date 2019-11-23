import React from "react";
import ReactDOM from "react-dom";

// The <Mouse> component encapsulates the behavior we need...
class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStWm7srGStb1Yml4R5I2nKRSZs4r6y4jzhOsNOtNNo5AM3grRo"
        width="100"
        height="100"
        style={{ position: "absolute", left: mouse.x, top: mouse.y }}
      />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: "100%" }} onMouseMove={this.handleMouseMove}>
        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}

        {/* <Cat mouse={this.state} /> */}

        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  // Defined as an instance method, `this.MouseRender` always
  // refers to *same* function when we use it in render
  MouseRender(mouse) {
    return (
      <>
        <Cat mouse={mouse} />
      </>
    );
  }
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        {/* Here, passing render as props to Mouse comp 
        Takes a func that returns a react element and calls it instead of implementing ,
        its own render logic
        */}
        <Mouse render={this.MouseRender} />
        {/* <Mouse render={mouse => <Cat mouse={mouse} />} /> */}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MouseTracker />, rootElement);
