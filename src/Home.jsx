import React from 'react';
import Carousel from '../src/components/Carousel';
import Header from '../src/components/Header'; // ✅ correcto






const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Carousel />
      </main>
    </>
  );
};


export default Home;