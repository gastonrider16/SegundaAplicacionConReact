import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Componente({titulo, contenido}){
  return(
    <div>
      <h1>{titulo}</h1>
      <div>{contenido}</div>
    </div>
  );
}

ReactDOM.render(
  //Vamos a renderizar...
  <Componente titulo="JAVA" contenido="POO"/>,
  document.getElementById('root')
);
