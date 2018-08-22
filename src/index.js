import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './app/Home'
import KajianKoding from './app/KajianKoding'
import SantrenKilat from './app/SantrenKilat'
import Mondok from './app/Mondok'
import Tentang from './app/Tentang'
import Login from './app/Login'
import NotFound from './app/NotFound'

import './styles/bootstrap.min.css'
import './styles/styles.css'

import registerServiceWorker from './registerServiceWorker'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/kajiankoding" component={KajianKoding}/>
              <Route path="/santrenkilat" component={SantrenKilat}/>
              <Route path="/mondok" component={Mondok}/>
              <Route path="/tentang" component={Tentang}/>
              <Route path="/login" component={Login}/>
              <Route component={NotFound}/>
            </Switch>
          <Footer/>
          </div>
        </BrowserRouter>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
