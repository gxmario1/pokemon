import React from "react";
 import Navbar from "./components/Navbar";
 import './App.css';
 import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { Routes, Route } from 'react-router-dom';
 import Home from './views/Home';
 import Personajes from './views/Personajes';
 import PersonajeDetails from './views/PersonajeDetails';
 import "./App.css";
  import Footer from "./components/Footer";


 function App() {
   return (
    <div className="pp contenedor bg-image opacity-80">
      <BrowserRouter> 
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personajes" element={<Personajes />} />
            <Route path="/personajes/:name" element={<PersonajeDetails />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </div>
  );
}

export default App;