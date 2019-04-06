import React from 'react';
import './Presentacion.css';

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
                <h1>Portafolio de Trabajos</h1>
            </div>
            <div className="trabajos-hechos" id="work-done">
                <div className="work work-1">
                    <div className="snippet snippet-1"></div>
                    <p>
                      Esta aplicación muestra el mapa de los terremotos ocurridos
                      en la última semana a nivel mundial. Los datos se obtienen de la api
                      del servicio geológico de Estados Unidos. La aplicación está alojada
                      en Firebase hosting y está creada en React.
                    </p>
                </div>
                <div className="work work-2">
                    <div className="snippet snippet-2"></div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ipsa corrupti, molestias perferendis quo corporis quidem accusantium eaque eum necessitatibus quibusdam laborum! Error sequi magnam temporibus aliquam, quo nostrum ratione?</p>
                </div>
                <div className="work work-3">
                    <div className="snippet snippet-3"></div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ipsa corrupti, molestias perferendis quo corporis quidem accusantium eaque eum necessitatibus quibusdam laborum! Error sequi magnam temporibus aliquam, quo nostrum ratione?</p>
                </div>
                <div className="work work-4">
                    <div className="snippet snippet-4"></div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ipsa corrupti, molestias perferendis quo corporis quidem accusantium eaque eum necessitatibus quibusdam laborum! Error sequi magnam temporibus aliquam, quo nostrum ratione?</p>
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Presentacion;
