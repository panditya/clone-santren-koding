import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
        <Navbar color="light" light expand="md">
          <div className="navbar-brand">
            <Link to="/" className="navbar-brand">
              <img src="http://i63.tinypic.com/oid9xu.png" height="50px" alt="Logo Santren Koding"/>
            </Link>
            <Link to="/" className="navbar-brand">Santren Koding</Link>
          </div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/kajiankoding" className="nav-link">Kajian Koding</Link>
              </NavItem>
              <NavItem>
                <Link to="/santrenkilat" className="nav-link">Santren Kilat</Link>
              </NavItem>
              <NavItem>
                <Link to="/mondok" className="nav-link">Mondok</Link>
              </NavItem>
              <NavItem>
                <Link to="/tentang" className="nav-link">Tentang Kami</Link>
              </NavItem>
              <NavItem>
                <Link to="/login" className="btn btn-outline-primary">Login/Singup</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    )
  }
}
