import "./App.css";
import Home from "./components/Home";
import CarDescription from "./components/CarDescription";
import Supra from "./components/routes/Supra";
import Hilux from "./components/routes/Hilux";
import Prius from "./components/routes/Prius";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CarDescription" element={<CarDescription />} />
      <Route path="/Toyota-Supra" element={<Supra />} />
      <Route path="/Toyota-Hilux" element={<Hilux />} />
      <Route path="/Toyota-Prius" element={<Prius />} />

    </Routes>
  </BrowserRouter>
  );
};

export default App;
