// Class component
import React from 'react'

// Footer Component
// Class component
class Footer extends React.Component {

  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}


  export default Footer