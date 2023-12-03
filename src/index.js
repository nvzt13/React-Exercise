// index.js
import React from 'react'
import ReactDOM from 'react-dom'

import './style.css'

const successMessage = "This is a success message"
const warningMessage = "This is a warning message"


const Warning = ()=> (
    <div className='alert-box'>
        <p>{warningMessage}</p>
    </div>
) 

const Succes = ()=> (
    <div className='alert-box'>
        <p>{successMessage}</p>
    </div>
) 

const app = (
    <>
        <Succes/>
        <Warning/>
   </>
)
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app,rootElement)