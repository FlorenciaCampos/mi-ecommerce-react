import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Header from './components/Header';
import Layout from './layout/Layout'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/productos"
          element={
            <Layout>
              <Productos />
            </Layout>
          }
        />
         <Route
          path="/contacto"
          element={
            <Layout>
              <Contacto />
            </Layout>
          }
        />
         <Route
          path="/nosotros"
          element={
            <Layout>
              <Nosotros />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



