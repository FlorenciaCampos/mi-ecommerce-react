import React from 'react';
import { Link } from 'react-router-dom';

function CardDestacada({ imagen, alt, titulo, link }) {
    return (
      <div className="card">
        <img src={imagen} alt={alt} />
        <div className="info">
          <h3>{titulo}</h3>
          <Link to={link}>VER PRODUCTO</Link>
        </div>
      </div>
    );
  }
  
  export default CardDestacada;