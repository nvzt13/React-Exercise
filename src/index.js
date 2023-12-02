// index.js
import React from 'react'
import ReactDOM from 'react-dom'

import image from './image/nevzat.jpg'


const header = (
    <header className='header'>
      <div className='img-wrapper'>
      <img src={image} alt=''/>
      </div>
      <h1>Nevzat Atalay</h1>
    </header>
)

// const main = (
//   <header className='main'>

//   </header>
// )
// const footer = (
//   <header className='footer'>

//   </header>
// )

// const app = ( 
//   {header},
//   // {main},
//   // {footer}
// )

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(header,rootElement)