import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => {
  console.log(props) // empty object, {}
  return (
    <header>
      <div className='header-wrapper'>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <Header />
    </div>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)