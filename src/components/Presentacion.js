import React from 'react';
import './Presentacion.css';

const WorkDone = () => {
  return (
    <div className="work work-1">
      <div className="snippet snippet-1">

      </div>
      <p>
        Esta aplicación muestra el mapa de los terremotos ocurridos
        en la última semana a nivel mundial. Los datos se obtienen de la api
        del servicio geológico de Estados Unidos. La aplicación está alojada
        en Firebase hosting y está creada en React.
      </p>
    </div>
  )
}

const Presentacion = () => {
  return (
    <React.Fragment>
      <div className="presentacion-wrapper">
    <div className="presentacion">
        <div className="text-wrapper">
        <h1 className="texto-nombre">Leonardo Martinez</h1>
        <h2>Desarrollador <span id="developer"></span></h2>
        </div>
    </div>
    </div>
      <pre style={{textAlign:'center',color:'#9a9a9a'}}>Image Credits: Fabian Grohs on Unsplash</pre>
    <div className="container">        
        <div className="portafolio">
            <div className="portafolio-titulo">
                <h1>Portafolio de Proyectos</h1>
            </div>
            <div className="trabajos-hechos" id="work-done">
                <WorkDone />
                <WorkDone />
                <WorkDone />
                <WorkDone />
            </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Presentacion;
