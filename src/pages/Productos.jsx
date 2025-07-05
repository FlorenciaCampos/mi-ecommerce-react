// src/pages/Productos.jsx
import React from 'react';
import CardProducto from '../components/CardProducto';
import listaProductos from '../data/productosData';

function Productos() {
  return (
    <div className="contenedor-card">
      {listaProductos.map((prod, index) => (
        <CardProducto
          key={index}
          imagen={prod.imagen}
          nombre={prod.nombre}
          precio={prod.precio}
        />
      ))}
    </div>
  );
}

export default Productos;
