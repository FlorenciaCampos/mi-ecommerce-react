import React from 'react';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';


function Layout ({children}) {
    const location = useLocation();
    const esHome = location.pathname === '/';    
    return (
        <>
        <Header />
        <main>
        {esHome && <Carousel />}
        </main>
        {children}
        <Footer /> {/* 👈 agregado al final */}
      </>
    )
}

export default Layout;
