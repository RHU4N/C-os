import React from 'react';
import './App.css';
import './Style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Matematica from './pages/Matematica';
import Funcao from './pages/Funcao';
import AnaliseComb from './pages/AnaliseComb';
import Estatistica from './pages/Estatistica';
import Footer from './components/Footer';
import FAQ from './pages/FAQ';
import Sobre from './components/Sobre';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matematica" element={<Matematica />} />
          <Route path="/matematica/funcao" element={<Funcao />} />
          <Route path="/matematica/analise-combinatoria" element={<AnaliseComb />} />
          <Route path="/matematica/estatistica" element={<Estatistica />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
