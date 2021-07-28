import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Componente(props){
  alert(props.titulo);
  alert(props.contenido);
  return(
    <div>
      <h1>REACT JS</h1>
      <div>Hola desde React</div>
    </div>
  );
}

ReactDOM.render(
  //Vamos a renderizar...
  <Componente titulo="JAVA" contenido="POO"/>,
  document.getElementById('root')
);

