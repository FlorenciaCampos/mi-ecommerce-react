import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';



function Layout ({children}) {
    
   
    return (
        <>
        <Header />
        {children}
        <Footer /> {/* 👈 agregado al final */}
      </>
    )
}

export default Layout;
