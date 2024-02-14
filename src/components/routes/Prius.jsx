import "./Cars.css";
import { useNavigate } from "react-router-dom";
import CarBubble from "../CarBubble/index"


const Prius = () => {
  const storedCar = JSON.parse(localStorage.getItem("carro"));
  console.log("Otro lado ",storedCar);
  const path = "../CarDescription";


  return <CarBubble 
    marca = {storedCar.marca}
    modelo = {storedCar.modelo}
    precio = {storedCar.precio}
    imagen = {storedCar.imagen}
    path = {path}>
    </CarBubble>
};

export default Prius;