# Day 10 -  Project Folder Structure

## Exercises Answers

- ### [Exercises:Level 1](#exercises-level-1)
- ### [Exercises:Level 2](#exercises-level-2)
- ### [Exercises:Level 3](#exercises-level-3)

### [Home](../README.md) | [<< Day 9](./day_09.md) | [Day 11 >>](./day_11.md/) <hr>


## Exercises Level 1

1. What is the importance of React Folder Structure and File Naming
```
Each component should consist of a test file to do a unit test as it will be widely used in the project.26 Sep 2023
```
2. How do you export file
```
How to export a js file in JavaScript?
Syntax. // Exporting declarations export let name1, name2/*, … */; // also var export const name1 = 1, name2 = 2/*, … */; // also var, let export function functionName() { /* … */ } export class ClassName { /* … */ } export fun
```
3. How do you  import file
```js 
// index.js

// we can import  style file 

import "./style.css";
```
4. Make a component of module and export it as named or default export
```js
//footer.js
class Footer extends React.Component {

  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}


  export default Footer
```
5. Make a component or module and import it
```js
// index.js

import App from "./App.js";

```
6. Change all the components you have to different folder structure

## Exercises Level 2

1. Make a simple portfolio using the components we have created so far. Implement a dark mode by using the function we wrote on day 8 challenge.

## Exercises Level 3

Coming



### [Home](../README.md) | [<< Day 9](./day_09.md) | [Day 11 >>](./day_11.md/) <hr>
