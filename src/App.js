import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Acerca from './components/Acerca';
import Contacto from './components/Contacto';
//import Header from './components/Header';
import Footer from './components/Footer';
import Presentacion from './components/Presentacion';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="topnav" id="myTopnav">
            <NavLink exact to="/" activeClassName="active">Inicio</NavLink>
            <NavLink to="/acerca" activeClassName="active">Acerca</NavLink>
            <NavLink to="/contacto" activeClassName="active">Contacto</NavLink>
            <a href="#TODO" className="icon">
              <i className="fa fa-bars"></i>
            </a>
          </div>
          <Route exact path="/" component={Presentacion} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/contacto" component={Contacto} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
