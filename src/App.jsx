import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Productos from './pages/Productos';
import  Header  from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/header" element={<Header />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;



//<Route path="/contacto" element={<Contacto />} />
//<Route path="/nosotros" element={<Nosotros />} />



