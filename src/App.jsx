import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Productos from './pages/Productos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



//<Route path="/contacto" element={<Contacto />} />
//<Route path="/nosotros" element={<Nosotros />} />



