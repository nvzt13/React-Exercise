// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

import nevzat from './image/nevzat.jpg'
import tic from './image/circle-check-solid.svg'



const Header = () => (
  <div className='header'> 
    <div className='img-wrapper'>
      <img src={nevzat} alt=''/>
    </div>
    <div className='substr'>
      <h3>Nevzat Atalay</h3>
      <img className='tic' src={tic} alt=''/>
    </div>
    <p>Senior Developer, Turkey</p>
  </div>
)
const Main = () => (
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

const Footer = () =>  (
  <header className='footer'>
    <p>Joined on Des 3, 2023</p>
  </header>
)


const app = (
<>
    <Header/>
    <Main/>
    <Footer/>
</>

)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app ,rootElement)