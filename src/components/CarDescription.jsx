import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CarDescription.css";

const carro1 = {
  marca: "Toyota",
  modelo: "Supra",
  precio: "₡8.000.000",
  imagen: "../images/supra.webp",
};
const carro2 = {
  marca: "Toyota",
  modelo: "Hilux",
  precio: "₡15.000.000",
  imagen: "../images/hilux.webp",
  
};
const carro3 = {
  marca: "Toyota",
  modelo: "Prius",
  precio: "₡5.000.000",
  imagen: "../images/prius.jpeg",
};

const CarDescription = () => {
  const navigate = useNavigate(); 
  const [tipo, setTipo] = useState("");
  const [carro, setCar] = useState({});


  //   useEffect(() => {
  //     const storedCar = localStorage.setItem("carro", JSON.stringify(carro));
  //     console.log("Carro JSON ", JSON.parse(localStorage.getItem("carro")));
  //   }, []);

  useEffect(() => {
    const getCar = async () => {
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
    getCar();
    
  }, [tipo]);

  useEffect(()=>{
    if(JSON.stringify(carro) === JSON.stringify(carro1)){
        navigate("../Toyota-Supra")
    }
    if(JSON.stringify(carro) === JSON.stringify(carro2)){
        navigate("../Toyota-Hilux")
    }
    if(JSON.stringify(carro) === JSON.stringify(carro3)){
        navigate("../Toyota-Prius")
    }
  }, [carro])

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
              // navigate('../Toyota-Supra');
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
