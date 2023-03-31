import React from 'react'
import Login from './Login.jsx'
import Logout from './Logout.jsx'

const Logger = props => {
  if (props.isLoggedIn) {
    return <Logout onLogout={props.onLogout} />
  }
  return <Login onLogin={props.onLogin} />
}

export default Logger
