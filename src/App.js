import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/main";
import Footer from "./components/footer/Footer";

class App extends React.Component {
    state = {
      loggedIn: false,
      techs: ['HTML', 'CSS', 'JS'],
      message: 'Click show time or Greet people to change me',
    }
    handleLogin = () => {
      this.setState({
        loggedIn: !this.state.loggedIn,
      })
    }
    showDate = (time) => {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
  
      const month = months[time.getMonth()].slice(0, 3)
      const year = time.getFullYear()
      const date = time.getDate()
      return `${month} ${date}, ${year}`
    }
     showCoords(event) {
      var x = event.clientX;
      var y = event.clientY;
      var coords = "X coords: " + x + ", Y coords: " + y;
      console.log(coords);
    }

    handleTime = () => {
      let message = this.showDate(new Date())
      this.setState({ message })
    }
    greetPeople = () => {
      let message = 'Welcome to 30 Days Of React Challenge, 2020'
      this.setState({ message })
    }
  
    render() {
      const data = {
        welcome: '30 Days Of React',
        title: 'Getting Started React',
        subtitle: 'JavaScript Library',
        author: {
          firstName: 'Asabeneh',
          lastName: 'Yetayeh',
        },
        date: 'Oct 9, 2020',
      }
      const techs = ['HTML', 'CSS', 'JavaScript']
  
      return (
        <div className='app'>
          {this.state.backgroundColor}
          <Header data={data} />
  
          <Main
            techs={techs}
            handleTime={this.handleTime}
            greetPeople={this.greetPeople}
            loggedIn={this.state.loggedIn}
            handleLogin={this.handleLogin}
            message={this.state.message}
          />
  
          <Footer date={new Date()} />
        </div>
      )
    }
  }
  

  export default App