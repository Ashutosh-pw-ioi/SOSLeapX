import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import ServicesDetails from './components/SevicesDetails'


function App() {
  return (
    <div className="min-h-screen bg-[#FFF5D8]">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services-in-details" element={<ServicesDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;