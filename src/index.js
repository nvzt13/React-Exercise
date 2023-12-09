
import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";


class App extends React.Component{
  state={
    style:{
      backgroundColor:"",
      height:"100vh",
      border:"1px solid"
    }
  }
  changeBackground = () => {
    const hour = new Date().getHours()
    if(6<hour && hour<12){
      this.setState({
        style:{
          backgroundColor:"red",
          height:"100vh",
          border:"1px solid"
        }
      })
    }
    else if(12<hour && hour<18){
      this.setState({
        style:{
          backgroundColor:"blue",
          height:"100vh",
          border:"1px solid"
        }
      })
    }
    else if(18<hour && hour<24){
      this.setState({
        style:{
          backgroundColor:"green",
          height:"100vh",
          border:"1px solid"
        }
      })
    }
    else if(24>hour && hour>6){
      this.setState({
        style:{
          backgroundColor:"black",
          height:"100vh",
          border:"1px solid"
        }
      })
    }
  }
  render(){
    
    return(
      <div className="app" style={this.state.style}>
        <button onClick={this.changeBackground}>cfghjdry</button>
      </div>
    )

}
}

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
