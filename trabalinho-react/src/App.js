import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Planos from "./pages/Planos";
import Contato from "./pages/Contato";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Menu />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App;