import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/producto.css';

function CardProducto({ product }) {
  return (
    <div className="producto">
      <img src={product.imagen} alt={product.nombre} />
      <h3>{product.nombre}</h3>
      <p>${product.precio}</p>
      <Link to={`/producto/${product.id}`}>Ver producto</Link>
    </div>
  );
}

export default CardProducto;
