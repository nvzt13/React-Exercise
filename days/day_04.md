
# Exercises Day 4

## Exercises: Level 1

1. What is the difference between a regular function and an arrow function?

```
The syntax of the arrow function is simple. It allows us to write clean code and the Arrow function does not allow access to the argument object.
```
2. What is a React Component?

```
React Components are building blocks that shape the user interface, have specific tasks, are defined as classes or functions, return react elements, and optionally take parameters.
```

3. How do you make a React functional component?

```
// React Function component syntax
// it can be arrow function, function declaration or function expression

const jsx = <tag> Content </tag>
const ComponentName = () => {
  return jsx
}
```

4. What is the difference between a pure JavaScript function and a functional component?
```
Functional components, unlike class components, do not have features such as state management or lifecycle methods. Instead, functional components return an output using the properties taken as input.
```
5. How small is a React component?

```
// This is a small components

const Button = () => <button> action </button>

```
6. Can we make a button or input field component?

```
// certainly

```
7. Make a reusable Button component.

```
// Button components
const Button = () => <button> action </button>
```
8. Make a reusable InputField component.

```
// Input components
const Imput = () => <input> action </input>
```
9. Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).

```
// style.css
body{
  background-color: rgb(71, 71, 69);
}
.alert-box{
  border: 1px solid black;
  text-align: center;
  width: 50%;
  margin-left: 25%;
}
.alert-box p{
  color: aliceblue;
  font-weight: 600;

  // index.js
import React from 'react'
import ReactDOM from 'react-dom'

import './style.css'

const successMessage = "This is a success message"
const warningMessage = "This is a warning message"


const Warning = ()=> (
    <div className='alert-box'>
        <p>{warningMessage}</p>
    </div>
) 

const Succes = ()=> (
    <div className='alert-box'>
        <p>{successMessage}</p>
    </div>
) 

const app = (
    <>
        <Succes/>
        <Warning/>
   </>
)
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app,rootElement)
}
```

## Exercises: Level 2

1. Create functional components and display the following images
   ![Front end](../images/frontend_technologies.png)

2. Use functional component to create the following design

![News Letter](../images/news_letter_design.png)

## Exercises: Level 3

1.  Use the given hexadecimal color generator in the example to create these random colors

![Hexadecimal colors](../images/hexadecimal_color_exercise.png)

2. Use functional component to design the following user card.

   ![User Card](../images/user_card_design_jsx.png)

🎉 CONGRATULATIONS ! 🎉

[<< Day 3](../30-Days-Of-React/03_Day_Setting_Up/03_setting_up.md) | [Day 5 >>](../05_Day_Props/05_props.md)
