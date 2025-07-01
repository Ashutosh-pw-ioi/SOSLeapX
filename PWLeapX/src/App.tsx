import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Experts from './components/Experts';
import Services from './components/Services';
import Clients from './components/Clients';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#E68C32]">
      <Header />
      <Hero />
      <AboutUs />
      <Experts />
      <Services />
      <Clients />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;