import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CarDescription.css";
import { carro1, carro2, carro3 } from "../assets/information";

const CarDescription = (marca, modelo, precio, imagen) => {
  const navigate = useNavigate();
  const [tipo, setTipo] = useState("");
  const [carro, setCar] = useState({});

  useEffect(() => {
    getCar();
  }, [tipo]);

  useEffect(() => {
    if (JSON.stringify(carro) === JSON.stringify(carro1)) {
      navigate("../Toyota-Supra");
    }
    if (JSON.stringify(carro) === JSON.stringify(carro2)) {
      navigate("../Toyota-Hilux");
    }
    if (JSON.stringify(carro) === JSON.stringify(carro3)) {
      navigate("../Toyota-Prius");
    }
  }, [carro]);

  const getCar = () => {
    if (tipo === "deportivo") {
      setCar(carro1);
    }
    if (tipo === "4x4") {
      setCar(carro2);
    }
    if (tipo === "economico") {
      setCar(carro3);
    }
  };

  //GUARDAR EL CARRO EN LOCALSTORAGE
  localStorage.setItem("carro", JSON.stringify(carro));

  return (
    <>
      <div className="dropdown">
        <h1>Comprar Carro</h1>
        <h3>Primero selecciona el tipo de carro que deseas comprar</h3>
        <button className="dropbtn">Tipo de carro</button>
        <div className="dropdown-content">
          <button
            onClick={() => {
              setTipo("deportivo");
            }}
          >
            Deportivo🏎
          </button>
          <button onClick={() => setTipo("4x4")}>4x4🛻</button>
          <button onClick={() => setTipo("economico")}>Usado🚗</button>
        </div>
        </div>
    </>
  );
};

export default CarDescription;
