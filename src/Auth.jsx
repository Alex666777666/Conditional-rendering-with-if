import React from 'react'
import { Component } from 'react'
import Greeting from './Greeting.jsx'

class Auth extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
    }
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    })
  }

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    })
  }

  render() {
    return (
      <div className='panel'>
        <Greeting isLoggedIn={this.state.isLoggedIn} />

        {this.state.isLoggedIn ? (
          <button className='btn logout' onClick={this.onLogout}>
            Logout
          </button>
        ) : (
          <button className='btn login' onClick={this.onLogin}>
            Login
          </button>
        )}
      </div>
    )
  }
}

export default Auth
