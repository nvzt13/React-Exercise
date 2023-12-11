import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class App extends React.Component {
  state = {
    backgroundColor: "lightBlue",
    color: "#FFF",
    border: "1px solid",
    width: "280px",
    paddingTop: "30px",
    fontSize: "25px",
    fontWeight: "800",
    height: "50px",
    textAlign: "center",
    position: "absolute",
    top: `${this.randomNumber()}`,
    left: `${this.randomNumber()}`,
    bottom: `${this.randomNumber()}`,
    right: `${this.randomNumber()}`,
  };
  randomNumber = () => {
    return Math.floor(Math.random() * 100);
  };
  render() {
    return (
      <div style={this.state}>30 Days Of React </div>
    );
  }
}

const domNode = document.getElementById("root");
ReactDOM.render(<App />, domNode);
