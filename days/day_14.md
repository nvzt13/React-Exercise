# Day 14 - Component Life Cycles

## Exercises Answers

- ### [Exercises:Level 1](#exercises-level-1)

### [Home](../README.md) | [<< Day 13](./day_13.md) | [Day 15>>](./day_15.md/) <hr>



## Exercises: Level 1

1. What is component life cycles
```
Component Life Cycles describe the process from creation to removal of a React component. Components call various methods that are executed at different occasions throughout their lifetime.
```
2. What is the purpose of life cycles
```
React'te yaşam döngülerinin amacı, programcının bileşenlerin çeşitli aşamaları üzerinde kontrol edebilmesini sağlamaktır. Bu, verimli ve performanslı uygulamalar oluşturmayı mümkün kılar. 
```
3. What are the three stages of a component life cycle
```
- Assembly: Lifecycle methods run when the component is first added to the DOM. constructor, static getDerivedStateFromProps, render, and componentDidMount are called here.

- Update: Lifecycle methods work when the component is already connected and receives new props. static getDerivedStateFromProps, shouldComponentUpdate, render, and getSnapshotBeforeUpdate are called here.

- Unmount: Lifecycle methods run when the component is removed from the DOM. componentWillUnmount is called here.
```
4. What does mounting means?
```
Assembly: Lifecycle methods run when the component is first added to the DOM.```

5. What does updating means
```
Updating is one of the phases in which the component operates. Once a component is created and connected, the update process begins.

The update is triggered when the component's props change or the component's state changes. In these cases, the component is re-executed and new content is displayed in the DOM.
```
6. What does unmounting means?
```
Unbinding means clearing a component's event listeners or data subscriptions.

When a component is removed from the DOM, the event listeners and data subscriptions created by that component are no longer redundant. Clearing these prevents the component from being accidentally triggered by another component.
```
7. What is the most common built-in mounting life cycle method?
```
One of React's built-in assembly lifecycle methods can be "componentDidMount". This method runs immediately after the component is bound to the DOM, so it can be used to retrieve data or add event listeners as needed.
```
8. What are the mounting life cycle methods?
```
- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()
```
9. What are the updating life cycle methods?
```
- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()
```
10. What is the unmounting life cycle method?
```
- componentWillUnmount()
```

## Exercises: Level 2

Coming

## Exercises: Level 3

Coming


### [Home](../README.md) | [<< Day 13](./day_13.md) | [Day 15>>](./day_15.md/) <hr>
