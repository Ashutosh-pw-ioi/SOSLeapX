import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Experts from './components/Experts';
import Services from './components/Services';
import Clients from './components/Clients';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ServicesDetails from './components/SevicesDetails'

// Home page component with all sections
const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Clients />
      <Services />
      <Experts />
      <Achievements />
      <Contact />
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-[#FFF5D8]">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services-in-details" element={<ServicesDetails />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;