import React from "react";
import nevzat from '../nevzat.jpg'



// A button component
const Button = ({ text, onClick, style }) => (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  )
  
  // TechList Component
  // class base component
  class TechList extends React.Component {
    render() {
      const { techs } = this.props
      const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
      return techsFormatted
    }
  }
  

// User Card Component
const UserCard = () => (
    <div className='user-card'>
      <img src={nevzat} alt='' />
      <h2>Asabeneh Yetayeh</h2>
    </div>
  )
  
  // Hexadecimal color generator
  const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }
  
  const HexaColor = () => <div>{hexaColor()}</div>
  
  const Message = ({ message }) => (
    <div>
      <h1>{message}</h1>
    </div>
  )
  const Login = () => (
    <div>
      <h3>Please Login</h3>
    </div>
  )
  const Welcome = (props) => (
    <div>
      <h1>Welcome to 30 Days Of React</h1>
    </div>
  )



// CSS styles in JavaScript Object
const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: 10,
    border: 'none',
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 22,
    color: 'white',
  }
  
// Main Component
// Class Component
class Main extends React.Component {
    render() {
      const {
        techs,
        greetPeople,
        handleTime,
        loggedIn,
        handleLogin,
        message,
      } = this.props
      console.log(message)
  
      const status = loggedIn ? <Welcome /> : <Login />
      return (
        <main>
          <div className='main-wrapper'>
            <p>Prerequisite to get started react.js:</p>
            <ul>
              <TechList techs={this.props.techs} />
            </ul>
            {techs.length === 3 && (
              <p>You have all the prerequisite courses to get started React</p>
            )}
            <div>
              <UserCard/>
              <HexaColor/>
              <Button
                text='Show Time'
                onClick={handleTime}
                style={buttonStyles}
              />{' '}
              <Button
                text='Greet People'
                onClick={greetPeople}
                style={buttonStyles}
              />
              {!loggedIn && <p>Please login to access more information about 30 Days Of React challenge</p>}
            </div>
            <div style={{ margin: 30 }}>
              <Button
                text={loggedIn ? 'Logout' : 'Login'}
                style={buttonStyles}
                onClick={handleLogin}
              />
              <br />
              {status}
            </div>
            <Message message={message} />
          </div>
        </main>
      )
    }
  }
  
  export default Main