
# Exercise Day 2 - Getting Started React


## Exercise Answers


- ### [Exercise:What is React?](#exercise-what-is-react)

- ### [Exercises: Why React?](#exercise-why-react)

- ### [Exercises: JSX](#exercise-jsx)

- ### [Exercises: JSX Elements](#exercise-jsx-elements)

- ### [Exercises: Inline Style](#exercise-inline-style)

- ### [Exercises: Internal Styles](#exercise-internal-style)

- ### [Exercise: Inject data to JSX](#exercise-inject-data-to-jsx)


### [Home](../README.md) | [<< Day 1](day_01.md) | [Day 3 >>](day_03.md) <hr/>



### Exercise What is React?

1. What is React?

```
React is an open, efficient and flexible JavaScript library for creating user interfaces.
```

2. What is a library? 

```
Libraries are the concept of keeping frequently used elements such as functions, macros and data types in one place and calling them whenever you want, instead of writing them over and over again.
```

3. What is a single page application?

```
Single Page Application yani tek sayfa uygulaması, JavaScript arayüz sayesinde kullanıcı ile etkileşimi artıran modern internet siteleridir.
```

4. What is a component ?

```
Each of the forces that form a resultant." Resultant: "Coming together, coming together, combining
```
5. What is the latest version of React?

```
The latest version of the library, React 18, was released in March 2022.
```
6. What is DOM?

```
The JavaScript programming language can access and edit objects on a web page using the DOM API. This allows you to dynamically change the content of the page, update its properties and create an interactive web applications.
```

7. What is React Virtual DOM?

```
The virtual DOM is a lightweight copy of the real DOM that allows React to make changes to the UI without reloading the entire page.
```

8. What does a web application or a website(composed of) have?

```
A website is a collection of web pages defined by a domain name (google.com, etc.) and hosted on at least one web server.
```

## Exercise Why React

1. Why did you chose to use react?

```
Because I want to create fast and useful websites
```

2. What measures do you use to know popularity ?

```
I'm watching the star forks and moves of github libraries
```

3. What is more popular, React or Vue ?

```
As per StackOverflow Survey 2022, React is the favourite framework of 40.14% of developers, Angular with 22.96%, and Vue with 18.97% of developers.
```

## Exercise JSX

1. What is an HTML element?

```
Hypertext Markup Language is the standard text markup language used to create web pages.
```

2. How to write a self closing HTML element? 

```
HTML5 syntax: In HTML5, a self-closing tag can be easily closed using angle brackets ( > ), as in: <img src='image.jpg' alt ='Sample Image'>
```

3. What is an HTML attribute? Write some of them

```
An HTML attribute is a piece of markup language used to set the behavior or appearance of an HTML element. For example, attributes can be used to change the color, size, or functionality of HTML elements.
```

4. What is JSX?

```
JSX is a JavaScript syntax extension often used with React to describe user interface elements
```

5. What is babel?

```
Babel is a javascript transcompiler. In other words, it is used to translate a code written in a version of JavaScript (for example, written in EcmaScript7) into EcmaScript5 code, which is supported by all browsers.
```

6. What is a transpiler?

```
A transcompiler or transpiler is a type of translator that takes as input the source code of a program written in a programming language and produces an equivalent source code in the same or a different programming language. Source-to-source translator is also known as source-to-source compiler.
```

## Exercise JSX Elements

1. What is a JSX element?

```
It is a syntax extension for JavaScript that allows developers to write HTML-like code in JavaScript files.
```

2. Write your name in a JSX element and store it in a name variable

```js
   const name = <h1> Nevzat </h1
```

3. Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable

```js
 const user = (
     <div>
        <h1>Nevzat Atalay</h1>
        <p> Turkey</p>
        <p>Software Student </p>
        <p> Man</p>
        <p> nevzatatalay_79@gmail.com</p>
     </div>
     )
```

4. Write a footer JSX element

```js
      const footer = (
        <footer>
          <div className='footer-wrapper'>
          </div>
        </footer>
      )
```

## Exercise Inline Style

1. Create a style object for the main JSX

```js
 const main = (
     <div 
     style = {{border: '2px solid red', color:'white', background:'tomato'}} >
        <h1>Nevzat Atalay</h1>
        <p> Turkey</p>
        <p>Software Student </p>
        <p> Man</p>
        <p> nevzatatalay_79@gmail.com</p>
     </div>
     )
```

2. Create a style object for the footer and app JSX

```js
      const footer = (
        <footer
          style = {{font-size: 18px, color:'white', background:'red'}}>
          <div className='footer-wrapper'>
          </div>
        </footer>
      )
```

3. Add more styles to the JSX elements

```js
      const footer = (
        <footer
          style = {{font-size: 18px, color:'white', background:'red',display:'flex'}}>
          <div className='footer-wrapper'>
          </div>
        </footer>
      )
```


## Exercise Internal Style

1. Apply different styles to your JSX elements

```js
const style =  { border: '2px solid orange', color: 'black', fontSize: '18px' } 

const main = (
       <div style = {style}>
        <h1>Nevzat Atalay</h1>
        <p> Turkey</p>
        <p>Software Student </p>
        <p> Man</p>
        <p> nevzatatalay_79@gmail.com</p>
     </div>
)
```

## Exercise Inject data to JSX

1. Practice how to make JSX element and injecting dynamic data(string, number, boolean, array, object)

```js
//Injecting Strring

const welcome = 'Welcome to 30 Days Of React Exercise'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const authorFirstName = 'Nevzat'
const authorLastName = 'Atalay'
const date = 'Des 2, 2023'


// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {authorFirstName} {authorLastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

//Injecting Number

const numberOne = 25
const numberTwo = 13

const result = (
  <p>
    {numberOne} + {numberTwo} = {numberOne + numberTwo}
  </p>
)

// Injecting Array

const techs = ['HTML', 'CSS', 'JavaScript']

const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techs}</ul>
    </div>
  </main>
)

// Injecting Object

  const author = {
        firstName: 'Nevzat',
        lastName: 'Atalay',
      }

       const header = (
        <header>
              <p>
              Instructor: {author.firstName} {author.lastName}
            </p>
      )

```

### [Home](../README.md) | [<< Day 1](day_01.md) | [Day 3 >>](day_03.md) 
