
import React from 'react';
import Carousel from '../src/components/Carousel';
import CardDestacada from '../src/components/CardDestacada';
import './styles/index.css';
import imgMeriendas from './assets/Meriendas.jpeg';
import imgBatidora from './assets/Batidora.jpeg';
import imgMate from './assets/Kit Mate.jpeg';



const Home = () => {
  return (
    <>
    <Carousel />
    <div className='card-container'>
    <CardDestacada
      imagen={imgMeriendas}
      alt="Kits Comiditas en tela"
      titulo="COMIDITAS EN TELA"
      link="/productos"
    />

    <CardDestacada
      imagen={imgBatidora}
      alt="Juguetes de madera"
      titulo="JUGUETES DE MADERA"
      link="/productos"
    />

    <CardDestacada
      imagen={imgMate}
      alt="Accesorios"
      titulo="ACCESORIOS"
      link="/productos"
    />

    </div>
   
    
    </>
  


      
  );
};

export default Home;
