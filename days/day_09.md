## Exercises

### Exercises: Level 1

1. What is conditional rendering?
```
In React, conditional rendering is the process of displaying different content based on certain conditions or states. It allows you to create dynamic user interfaces that can adapt to changes in data and user interactions
```
2. How do you implement conditional rendering?
```
Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.
```
3. Which method of conditional rendering do you prefer to use?
```
I prefer the ternary operator
```

### Exercises: Level 2

1. Make a single page application which changes the body of the background based on the season of the year(Autumn, Winter, Spring, Summer)
```js
// style.css
.app{
    position: relative;
}

button{
    padding: 10px 100px;
    background-color: brown;
    position: absolute;
    bottom: 10px;
    left: 50%;
    color: #fff;
    border-radius: 10px;
}
button:hover{
    background-color: yellow;
    color: black;
}
//index.js

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
      const index=this.state.index
      this.setState({
        styles:{
          backgroundImage:`url(${seasonArr[index]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        },
        index:(this.state.index===3) ? 0 : this.state.index +1
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

```
<img src="../src/image/day9_level2_1.png">
2. Make a single page application which change the body of the background based on the time of the day(Morning, Noon, Evening, Night)

```js
//index.js

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

```

### Exercises: Level 3

1. Fetching data takes some amount of time. A user has to wait until the data get loaded. Implement a loading functionality of a data is not fetched yet. You can simulate the delay using setTimeout.
