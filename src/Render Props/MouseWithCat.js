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

class MouseWithCat extends React.Component {
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
          We could just swap out the <p> for a <Cat> here ... but then
          we would need to create a separate <MouseWithSomethingElse>
          component every time we need to use it, so <MouseWithCat>
          isn't really reusable yet.
        */}
        <Cat mouse={this.state} />
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <MouseWithCat />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MouseTracker />, rootElement);
