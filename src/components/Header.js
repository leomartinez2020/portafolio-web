import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <React.Fragment>
      <div className="topnav" id="myTopnav">
        <NavLink to="/" className="active">Inicio</NavLink>
        <NavLink to="acerca.html">Acerca</NavLink>
        <NavLink to="contacto.html">Contacto</NavLink>
        <a href="javascript:void(0)" className="icon">
          <i className="fa fa-bars"></i>
        </a>
      </div>
     </React.Fragment>
  )
}

export default Header;
