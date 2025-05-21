import React from 'react';
import { Link } from 'react-router-dom';
import '../Style.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img src="/logo.png" alt="Logo Céos" style={{ height: '48px', width: '48px' }} />
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} className='display-3'>Céos</Link>
      </div>
      <nav>
        <ul className="menu">
          <li className="dropdown">
            <span>Ambiente de Estudo ▼</span>
            <ul className="submenu">
              <li className='active'><Link to="/matematica">Matemática</Link></li>
              <li><Link to="#" disabled>Química</Link></li>
              <li><Link to="#" disabled>Física</Link></li>
              
            </ul>
          </li>
          <li><Link to="/faq">Central de Ajuda</Link></li>
          <li><Link to="#">Planos</Link></li>
        </ul>
      </nav>
      <div className="buttons">
        <Link to="/login" className="btn btn-light">Entrar</Link>
        <Link to="#" className="btn btn-dark">Cadastre-se</Link>
      </div>
    </header>
  );
}

export default Navbar;
