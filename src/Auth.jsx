import React from 'react'
import { Component } from 'react'
import Greeting from './Greeting.jsx'
import Logger from './Logger.jsx'

class Auth extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
    }
  }

  onLogin = () => {
    this.setState({ isLoggedIn: true })
  }

  onLogout = () => {
    this.setState({ isLoggedIn: false })
  }

  render() {
    return (
      <div className='panel'>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <Logger
          isLoggedIn={this.state.isLoggedIn}
          onLogin={this.onLogin}
          onLogout={this.onLogout}
        />
      </div>
    )
  }
}

export default Auth
