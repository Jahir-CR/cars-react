import { CarBubble } from "../components/CarBubble/index";

const Hilux = () => {
  const storedCar = JSON.parse(localStorage.getItem("carro"));
  console.log("Otro lado ", storedCar);
  const path = "../CarDescription";

  return (
    <>
      <CarBubble
        marca={storedCar.marca}
        modelo={storedCar.model}
        precio={storedCar.precio}
        imagen={storedCar.imagen}
        path={path}
      />
    </>
  );
};

export default Hilux;
