import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
 const navigate = useNavigate();
  return (
    <>
      <h1>Luxe Motors</h1>
      <div className="home">
        <h2>
          Nuestro objetivo es que puedas conseguir el carro de tus suenos a buen
          precio.
        </h2>
      </div>
      
      <button onClick={()=>{
        navigate('../CarDescription');   
      }}>Comprar carro</button>
    </>
  );
};

export default Home;
