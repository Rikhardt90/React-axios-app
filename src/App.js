import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Characters from "./components/Characters/Characters";
import Navbar from "./components/Navbar/Navbar";
import Locations from "./components/Location/Location";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route index element={<Home />} />
        <Route path="characters" element={<Characters />} />
        <Route path="locations" element={<Locations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
