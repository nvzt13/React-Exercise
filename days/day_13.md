# Day 13 -  Uncontrolled Component

## Exercises Answers

- ### [Exercises:Level 1](#exercises-level-1)

### [Home](../README.md) | [<< Day 12](./day_12.md) | [Day 14>>](./day_14.md) <hr>


## Exercises Level 1

1. What is a controlled input?
```
 The React component that renders an element also controls what happens in that element on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled input.”
```
2. What is an uncontrolled input
```
 Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.
```
3. How do you get a content of a certain HTML element in React ?
```
React useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Once a ref is created we can directly access and modify the content of that DOM element.
```
4. Why it is not a good idea to touch the DOM directly in React ?
```
querySelector goes against this principle, as it bypasses React's virtual DOM and can lead to unexpected behavior.
```
5. What is most frequently used in React ? Controlled or Uncontrolled input.
```
The most controlled component is used in react.
```
6. What do you need to write uncontrolled input?
```
To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.
```
7. Does state require to write uncontrolled input?
```
Yes, the state requires writing uncontrolled input. In JavaScript, it's possible to store user input directly in a variable without using React's state hooks.
```
8. When do you use uncontrolled input?
```
You want to minimize the number of renders for performance reasons.
You want to access native browser behavior that is not easily replicable using controlled components.
You're integrating with a third-party library that does not expect its inputs to be controlled.
```
9. When do you use controlled input?
```
When you need to keep track of the input value for business logic or to prevent the input from changing.
When you need to validate the input and display feedback to the user.
When you need to create custom input behaviors or handle specific user interactions.
```
10. Do you use a controlled or uncontrolled input to validate form input 
fields?
```
I use a controlled input to validate form input fields. 
```

### [Home](../README.md) | [<< Day 12](./day_12.md) | [Day 14>>](./day_14.md/) <hr>
