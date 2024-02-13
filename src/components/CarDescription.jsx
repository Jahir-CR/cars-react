import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { carro1, carro2, carro3 } from "../assets/content/content";
import "./CarDescription.css";

const CarDescription = () => {
  const navigate = useNavigate();
  const [carro, setCar] = useState({});

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

  const handleOnChange = (e) => {
    const tipo = e.target.value;
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
        <select className="dropdown" onChange={handleOnChange}>
          <option selected disabled>
            Seleccionar carro...
          </option>
          <option value="deportivo">Deportivo</option>
          <option value="4x4">4x4</option>
          <option value="usado"> Usado</option>
        </select>
      </div>
    </>
  );
};

export default CarDescription;
