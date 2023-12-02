// index.js
import React from 'react'
import ReactDOM from 'react-dom'


import html from './image/html_logo.png'
import css from './image/css_logo.png'
import js from './image/js_logo.png'
import react from './image/react_logo.png'


const frontend = (
    <div className='front-end'>
        <h3>Front End Tecnologies</h3>
       <div>
        <img src={html} alt=""/>
        <img src={css} alt=""/>
        <img src={js} alt=""/>
        <img src={react} alt=""/>
        </div>
    </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(frontend,rootElement)