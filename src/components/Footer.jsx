// src/components/Footer.jsx
import React from 'react';
 // Si tenés estilos, podés agregarlos

function Footer() {
  return (
    <footer>
      <div className="categoria">
        <p>Categorías</p>
        <a href="/">Inicio</a>
        <a href="/productos">Productos</a>
        <a href="/contacto">Contacto</a>
      </div>

      <div className="redes">
        <p>Seguinos</p>
        <a href="https://www.instagram.com/mi_cuoco/" target="_blank" rel="noreferrer">
          {/* Instagram */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" strokeWidth="1.5">
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M16.5 7.5l0 .01" />
          </svg>
        </a>

        <a href="#">
          {/* Facebook */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" strokeWidth="1.5">
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg>
        </a>

        <a href="#">
          {/* Twitter */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" strokeWidth="1.5">
            <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
          </svg>
        </a>
      </div>

      <div className="contacto">
        <p>Contactanos</p>
        <ul>
          <li><a href="#">E-mail: micuoco@gmail.com</a></li>
          <li><a href="#">Whatsapp: 11222222222</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
