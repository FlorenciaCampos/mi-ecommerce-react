import React from 'react';
import '../styles/producto.css';

function CardProducto({ imagen, nombre, precio }) {
  return (
    <div className="producto">
      <img src={imagen} alt={nombre} />
      <a href="#">{nombre}</a>
      <p>${precio}</p>
    </div>
  );
}

export default CardProducto;
