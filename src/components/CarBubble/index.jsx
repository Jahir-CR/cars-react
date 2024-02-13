import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

export const CarBubble = ({ marca, modelo, precio, imagen, path }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="car">
        <h2>Marca: {marca}</h2>
        <h2>Modelo: {modelo}</h2>
        <h2>Precio: {precio}</h2>
        <img src={imagen} />
      </div>
      <div className="botones">
        <button className="boton-comprar">Comprar</button>
        <button className="boton-volver" onClick={() => navigate(path)}>
          Volver
        </button>
      </div>
    </>
  );
};
