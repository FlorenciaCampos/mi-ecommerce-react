
import { useParams, Link } from 'react-router-dom';
import productos from '../data/productosData'; 
import '../styles/productDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === Number(id)); 

  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div className="detalle-producto">
      <div className="detalle-contenido">
        <img src={producto.imagen} alt={producto.nombre} className="detalle-img" />
        <div className="detalle-info">
          <h2>{producto.nombre}</h2>
          <p><strong>Precio:</strong> ${producto.precio}</p>
          <p><strong>Descripción:</strong> {producto.descripcion}</p>
          <Link to="/productos" className="volver">← Volver a productos</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
