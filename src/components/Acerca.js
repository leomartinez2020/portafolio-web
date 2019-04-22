import React from 'react';
import perfil from '../perfil.jpg';

const Acerca = () => {
  return (
    <div className="container acerca">
      <h1>Acerca</h1>
      <img src={perfil} alt="perfil" />
      <p>
        Desarrollador Python con conocimientos en SQL, Mongodb, JavaScript,
        Flask, Django y React. Consciente de que hay que aprender y trabajar duro
        constantemente para estar al día con la llegada de nuevas tecnologías.
      </p>
    </div>
  )
}

export default Acerca;
