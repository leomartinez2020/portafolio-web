import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="icons">
            <a href="https://twitter.com/pythonista100">
                <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="https://linkedin.com/in/leonardo-martinez-sarmiento-8495bb183">
                <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/leomartinez2019">
                <i className="fab fa-github fa-2x"></i>
            </a>
        </div>
    </footer>
    </React.Fragment>
  )
}

export default Footer;
