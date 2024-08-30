import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Project from './pages/Project';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
