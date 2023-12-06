
# Exercises Day 5

## Exercise  Answers

- ### [Exercises:Level 1](#exercises-level-1)
- ### [Exercises:Level 2](#exercises-level-2)
- ### [Exercises:Level 3](#exercises-level-3)


### [Home](../README.md) | [<< Day 4](day_04.md) | [Day 6 >>](day_06.md)<hr> 

### Exercises Level 1

1. What is props in a React component ?

```
It is a structure used to flow data between components in React applications.
```
2. How do you access props in a React component ?

```
We can access the probs object as shown in the picture
```

```js 
// index.js

import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => {
  console.log(props) // empty object, {}
  return (
    <header>
      <div className='header-wrapper'>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <Header />
    </div>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)
```
3. What data types can we pass as props to components ?

```
We can pass string, boolean, array, number and object data types to support components.
```
4. What is a propTypes?

```
propTypes means the object in which the keys represent the props accepted by the component and the values represent the data types for these probes.
```
5. What is a default propTypes?

```
Default props ; If a value does not appear for a props, the previously determined values are written instead of the values of those props that do not appear.
```

## Exercises Level 2

1. Create a functional component and display the following images

   ![Front end](./src/image/day4_level2_1.png)

2. Use functional component to create the following design

![News Letter](./src/image/day4_level2_2.png)

## Exercises Level 3

1.  Use the given hexadecimal color generator in the example to create these random colors. If you don't know how to generate the hexadecimal color you can use [dummy data generator](https://www.30daysofreact.com/dummy-data)

![Hexadecimal colors](./src/image/day4_level3_1.png)

2. Use functional component to design the following user card.

![User Card](./src/image/day4_level3_2.png)


### [Home](../README.md) | [<< Day 4](day_04.md) | [Day 6 >>](day_06.md) 
