import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import React Router components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import './App.css';  // Import your CSS file for styling

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
