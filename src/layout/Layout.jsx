import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* Acá se renderiza la página */}
      <Footer />
    </>
  );
};

export default Layout;
