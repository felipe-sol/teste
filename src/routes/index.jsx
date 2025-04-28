import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import EstruturaTecnologia from '../pages/EstruturaTecnologia';
import Contato from '../pages/Contato';
import Login from '../pages/Login';
import Consultas from "../pages/Consultas"
const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estrutura-tecnologia" element={<EstruturaTecnologia />} />
          <Route path="/contato" element={<Contato />} />
          <Route path='/login' element={<Login />} />
          <Route path='/consultas' element={<Consultas />} />
          {/* Add more routes here as needed */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRoutes; 