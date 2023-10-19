import React from 'react';
import Avatar from './avatar';  // Asegúrate de que la ruta sea correcta
import './card.css';
import Nick from './Nick';

function Card() {
  const estiloCard = {
    width: "484px",
    height: "321px",
    backgroundColor: "blue",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",     
  };

  return (
    <div style={estiloCard}>
      <Avatar /> {}
      <Nick/>
    </div>
  );
}

export default Card;