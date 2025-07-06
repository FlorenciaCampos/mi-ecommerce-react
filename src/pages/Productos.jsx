import React from 'react';
import listaProductos from '../data/productosData';
import CardProducto from '../components/CardProducto';
import '../styles/producto.css';

function Productos() {
  return (
    <main className="contenedor-card">
      {listaProductos.map((producto) => (
        <CardProducto key={producto.id} product={producto} />
      ))}
    </main>
  );
}

export default Productos;
