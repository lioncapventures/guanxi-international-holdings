import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import LanguageSelector from './components/LanguageSelector';
import './App.css';

function App() {
  const { i18n } = useTranslation();
  const [showLanguageSelector, setShowLanguageSelector] = useState(true);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setShowLanguageSelector(false);
    }
  }, [i18n]);

  const handleLanguageSelect = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
    setShowLanguageSelector(false);
    localStorage.setItem('preferredLanguage', selectedLanguage);
  };

  return (
    <Router>
      <div className="App">
        {showLanguageSelector && (
          <LanguageSelector onSelectLanguage={handleLanguageSelect} />
        )}
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;