import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className="container contacto">
      <h1>Contacto</h1>
      <div>
        <p> <i className="far fa-envelope"></i> <a href="mailto:leonardomartinez2019@yahoo.com">leonardomartinez2019@yahoo.com</a></p>

        <p> <i className="fas fa-phone"></i> 3107489655</p>

        <p> <i className="fab fa-twitter"></i> <a href="https://twitter.com/pythonista100">Pythonista100</a></p>

        <p> <i className="fas fa-map-marker-alt"></i> Barranquilla</p>
        
      </div>
    </div>
  )
}

export default Contacto;
