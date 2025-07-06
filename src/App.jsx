import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import ProductDetail from './pages/ProductDetail';
import Layout from './layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Productos />} />
          <Route path="producto/:id" element={<ProductDetail />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="nosotros" element={<Nosotros />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
