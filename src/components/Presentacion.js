import React from 'react';
import './Presentacion.css';

const portafolioData = [
  {
    titulo: "Mapa de terremotos",
    descripcion: "Muestra los lugares a nivel mundial donde ocurrieron terremotos en la últimas 48 horas",
    herramientas: ["React", "Google Maps", "Api de USGS", "Firebase"],
    imgUrl: "",
    siteUrl: "",
    githubUrl: ""
  },
  {
    titulo: "Blog Personal",
    descripcion: "Blog creado con Jekyll dedicado a Python y otras tecnologías",
    herramientas: ["Jekyll", "Github Pages"],
    imgUrl: "",
    siteUrl: "",
    githubUrl: ""
  },
  {
    titulo: "Sitio con autenticación para publicar entradas de blog",
    descripcion: "Construido con Flask, permite al usuario autenticarse y crear contenido",
    herramientas: ["Flask", "MySQL", "SQLalchemy"],
    imgUrl: "",
    siteUrl: "",
    githubUrl: ""
  },
  {
    titulo: "",
    descripcion: "",
    herramientas: ["", "", ""],
    imgUrl: "",
    siteUrl: "",
    githubUrl: ""
  },
];

const WorkDone = (props) => {
  return (
    <div className="work work-1">
      <div className="snippet snippet-1">

      </div>
      <p>
        {
          props.dato.descripcion
        }
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
        <h2>Desarrollador <span id="developer">Python</span></h2>
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
                {portafolioData.map( (dato, index) => <WorkDone key={index} dato={dato} />)}
            </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Presentacion;
