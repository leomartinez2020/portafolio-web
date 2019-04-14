import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className="container contacto">
      <h1>Contacto</h1>
      <dl>
        <dt>Correo:</dt>
        <dd> <i className="far fa-envelope"></i> <a href="mailto:leonardomartinez2019@yahoo.com">leonardomartinez2019@yahoo.com</a></dd>

        <dt>Teléfono:</dt>
        <dd> <i className="fas fa-phone"></i> 3107489655</dd>

        <dt>Twitter:</dt>
        <dd> <i className="fab fa-twitter"></i> <a href="https://twitter.com/pythonista100">Pythonista100</a></dd>

        <dt>Ubicación:</dt>
        <dd> <i class="fas fa-map-marker-alt"></i> Barranquilla</dd>
        
      </dl>
    </div>
  )
}

export default Contacto;
