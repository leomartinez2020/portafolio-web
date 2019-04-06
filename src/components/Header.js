import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <React.Fragment>
      <div className="topnav" id="myTopnav">
        <a href="/" className="active">Inicio</a>
        <a href="acerca.html">Acerca</a>
        <a href="contacto.html">Contacto</a>
        <a href="#TODO" className="icon">
          <i className="fa fa-bars"></i>
        </a>
      </div>
     </React.Fragment>
  )
}

export default Header;
