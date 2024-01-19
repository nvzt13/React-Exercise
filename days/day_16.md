# Day 16 -  Higher Order Component

## Exercises Answers

- ### [Exercises:Level 1](#exercises-level-1)
- ### [Exercises:Level 2](#exercises-level-2)
- ### [Exercises:Level 3](#exercises-level-3)

### [Home](../README.md) | [<< Day 15](./day_15.md) | [Day 17>>](./day_17.md) <hr>


# Exercises

## Exercises Level 1

1. What is higher order function

```
A higher order function is a function that takes one or more functions as arguments, or returns a function as its result. 
```
2. What is Higher Order Component
```
In React, a higher-order component is a function that takes a component as an argument and returns a new component that wraps the original component.
```
3. What is the difference between higher order function and higher order component?
```
The main difference between a higher order function and a higher order component lies in the fact that a higher order function is a function that takes a function as an argument or returns a function as a result, while a higher order component is a component that takes a component as a prop or returns a component from a function.
```
4. A higher order component can allow us to enhance a component. (T or F)
```
True
```

## Exercises Level 2

1. Make a higher order component which can handle all the input type.
```js
import React from 'react';
import ReactDOM  from 'react-dom';

class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }

    render() {
        const { type } = this.props;
        return (
            <div>
                <input 
                    type={type} 
                    value={this.state.inputValue} 
                    onChange={this.handleInputChange} 
                />
            </div>
        );
    }
}


const App = () => {
    return (
        <div>
            <h2>Input Components</h2>
            <InputComponent type="text" />
            <InputComponent type="password" />
            <InputComponent type="email" />
        </div>
    );
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

## Exercises Level 3

coming

### [Home](../README.md) | [<< Day 15](./day_15.md) | [Day 17>>](./day_17.md/) <hr>
