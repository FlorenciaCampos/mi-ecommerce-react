import React from "react";
import "../styles/nosotros.css";
import familiaImg from "../assets/familia.jpeg";

const QuienesSomos = () => {
  return (
    <>
      <div className="quienes-somos">
      </div>
      <div className="contenido-nosotros">
        <img src={familiaImg} alt="familia" className="img-familia" />
        <p>
          Mi Cuoco nació en plena pandemia como un proyecto familiar. En medio
          del encierro, una mamá creativa, un papá entusiasta y dos pequeñas —
          una de 10 años y una bebé de 2 — comenzaron a jugar con telas y a
          crear pequeños mundos de imaginación. Así surgieron nuestras comiditas
          de tela, hechas con amor, dedicación y muchas risas compartidas en
          casa. Hoy seguimos creciendo, con la misma pasión y el deseo de
          ofrecer productos que despierten la creatividad de los más chicos.
        </p>
      </div>
    </>
  );
};

export default QuienesSomos;
