import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" alt="Hospital Sabara" height="40" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Início</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/servicos">Serviços</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/especialidades">Especialidades</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/estrutura-tecnologia">Estrutura e Tecnologia</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contato">Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 