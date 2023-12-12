# Day 10 -  Events

## Exercises Answers

- ### [Exercises:Level 1](#exercises-level-1)
- ### [Exercises:Level 2](#exercises-level-2)
- ### [Exercises:Level 3](#exercises-level-3)

### [Home](../README.md) | [<< Day 10](./day_10.md) | [Day 12>>](./day_11.md/) <hr>


## Exercises Level 1

1. What is an event?
```
An event is an action that occurs as per the user's instruction as input and gives the output in response. We can consider different types of inputs, such as mouse clicks, button presses, and when users press tab and text box change.23
```
2. What is the different between an HTML element event and React event?
```
HTML ve React olay işleme arasındaki fark
React olay işleme, söz dizimindeki bazı değişikliklerle HTML'ye benzer, örneğin: React olay adları için camelCase'i kullanırken HTML küçük harf kullanır. Olay işleyicisi olarak bir dize iletmek yerine, React.29'da bir işlevi iletiyoruz.
```
3. Write at least 4 keyboard events?

```
keyup, keydown, keypress
```
4. Write at least 8 mouse events?
```
onClick, oncontextmenu, ondblclick, onmousedown, onmouseenter, onmousemove, onmouseup, onmouseover
```
5. What are the most common mouse and keyboard events?
```
The most commonly used mouse events are click and dblclick.
```
6. Write an event specific to input element?
```
oninout
```
7. Write an event specific to form element?
```
form tag submit
```
8. Display the coordinate of the view port when a mouse is moving on the body?
```js
// app.js

function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  console.log(coords);
}

```
9. What is the difference between onInput, onChange and onBlur?
```
- onInput: This event is triggered when the value of an input element changes, as the user types or pastes text into the field. 
- onChange: This event is triggered when the value of an input element changes and the element loses focus (i.e., the user clicks outside of the field or presses the Tab key to move to the next field). 
- onBlur: This event is triggered when an element loses focus (i.e., the user clicks outside of the field or presses the Tab key to move to the next field), regardless of whether the value of the element has changed.
```
10. Where do we put the onSubmit event ?
```
onsubmit event is used on the form
```

## Exercises Level 2

```js 
// index.js

import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { useState } from "react";

function RandomButton(props) {
  // Butonun konumunu tutan state
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // Butonun üzerine gelindiğinde çalışacak fonksiyon
  function handleHover() {
    // Rastgele bir konum belirle
    const randomTop = Math.floor(Math.random() * 500);
    const randomLeft = Math.floor(Math.random() * 500);

    // Konum state'ini güncelle
    setPosition({ top: randomTop, left: randomLeft });
  }

  // Buton komponentini döndüren fonksiyon
  return (
    <button
      style={{
        position: "absolute",
        top: position.top + "px",
        left: position.left + "px",
        padding:"15px 100px"
      }}
      onMouseEnter={handleHover}
    >   30 Days Of React
      {props.name}
    </button>
  );
}

export default RandomButton;

const domNode = document.getElementById("root");
ReactDOM.render(<RandomButton />, domNode);

```

![On mouse enter event](../images/react_event_on_mouse_enter.gif)

## Exercises Level 3

Coming
