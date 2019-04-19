import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  const [topnavState, respTopnav] = useState(true);

  return (
    <React.Fragment>
      <div className={topnavState ? 'topnav' : 'topnav responsive'} id="myTopnav">
        <NavLink exact to="/" activeClassName="active">Inicio</NavLink>
        <NavLink to="/acerca" activeClassName="active">Acerca</NavLink>
        <NavLink to="/contacto" activeClassName="active">Contacto</NavLink>
        <NavLink to="/blog" activeClassName="active">Blog</NavLink>
        <a href={"javascript:void(0)"}
          className="icon" onClick={() => respTopnav(!topnavState)}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
     </React.Fragment>
  )
}

export default Header;
