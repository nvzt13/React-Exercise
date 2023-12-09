
import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import winter from "../src/image/winter.jpg"
import summer from "../src/image/summer.jpg"
import autumn from "../src/image/autumn.jpg"
import spring from "../src/image/spring.jpg"
import season from "../src/image/season.jpg"


const seasonArr = [autumn,summer,spring,winter]

const Button = ({onclick}) => (<button onClick={onclick}> Change Season</button>
)

class App extends React.Component {

  state={
   styles:{
    backgroundImage:`url(${season})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
   },
   index:-1,
  }
  
    changeSeason=()=>{
      let newindex= this.state.index+1 
      
      this.setState({
        styles:{
          backgroundImage:`url(${seasonArr[newindex]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        },
        index:this.state.index+1
      })
    }

  render(){
    return(
      <div className="app" style={this.state.styles}>
           <Button onclick={this.changeSeason}/>
      </div>
    )
  }

}
const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
