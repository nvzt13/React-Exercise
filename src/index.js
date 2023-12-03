// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import style from  './style.css'
import image from './image/nevzat.jpg'

import tic from './image/circle-check-solid.svg'

const header = (
    <header className='header'>
      <div className='img-wrapper'>
      <img src={image} alt=''/>
      </div>
      <h1>Nevzat Atalay</h1>
      <img src={tic} alt='' className='tic'></img>
      <p>Senior developer, TURKEY</p>
    </header>
)

const main = (
  <header className='main'>
      <h3>SKILLS</h3>
      <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>NODE</li>
      <li>Phyton</li>
      <li>TypeScript</li>
      <li>SQL</li>
      <li>MongoDB</li>
    </ul>
  </header>
)

const footer = (
  <header className='footer'>
    <p>Joined on Des 3, 2023</p>
  </header>
)

const app = ( 
<div className='app'>
  {header}
  {main}
  {footer}
</div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app,rootElement)