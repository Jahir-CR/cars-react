import "./Cars.css";
import { useNavigate } from "react-router-dom";

const Hilux = () => {
  const navigate = useNavigate();
  const storedCar = JSON.parse(localStorage.getItem("carro"));
  console.log("Otro lado ",storedCar);


  return <>
  <div className="car">
        <h2>Marca: {storedCar.marca}</h2>
        <h2>Modelo: {storedCar.modelo}</h2>
        <h2>Precio: {storedCar.precio}</h2>
        <img src={storedCar.imagen}/>
        
  </div>
  <div className="botones">
    <button className="boton-comprar">Comprar</button>
    <button className="boton-volver" onClick = {()=> navigate("../CarDescription")}>Volver</button>
  </div>
  
  
  </>;
};

export default Hilux;