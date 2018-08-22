import React, { Component } from 'react'

import Logo from '../components/Logo'
import '../styles/notfound.css'

class NotFound extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <h4>404 Route Not Found</h4>
        </header>
      </div>
    )
  }
}

export default NotFound
