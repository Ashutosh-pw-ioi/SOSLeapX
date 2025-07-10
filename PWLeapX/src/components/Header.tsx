import { useState } from 'react';
import {Menu, X} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50 bg-white border-b border-[#F4A460] sticky top-0 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
            <div className="w-40 h-16 mb-4 mt-[-5px]">
              <img src="https://res.cloudinary.com/dsdcta1sr/image/upload/v1751659251/PW_Leap_X_fxqdkj.svg" alt="Name" className="mt-0" />
            </div>
          </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="bg-white text-[#E68C32] px-6 py-2 rounded-full font-semibold hover:bg-[#F4A460] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              About Us
            </button>
            <button
              onClick={() => navigate('/services-details')}
              className="bg-white text-[#E68C32] px-6 py-2 rounded-full font-semibold hover:bg-[#F4A460] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Our Services
            </button>

            <button
              onClick={() => navigate('/projects')}
              className="bg-white text-[#E68C32] px-6 py-2 rounded-full font-semibold hover:bg-[#F4A460] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Projects
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-[#E68C32] px-6 py-2 rounded-full font-semibold hover:bg-[#F4A460] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden bg-white p-2 rounded-lg shadow-md"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#E68C32]" />
            ) : (
              <Menu className="h-6 w-6 text-[#E68C32]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg mx-4">
            <nav className="flex flex-col space-y-2 p-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-[#E68C32] px-4 py-2 rounded-lg font-semibold hover:bg-[#F4A460] hover:text-white transition-all duration-300 text-left"
              >
                About Us
              </button>
              <button
                onClick={() => navigate('/services-details')}
                className="text-[#E68C32] px-4 py-2 rounded-lg font-semibold hover:bg-[#F4A460] hover:text-white transition-all duration-300 text-left"
              >
                Our Services
              </button>

              <button
                onClick={() => navigate('/projects')}
                className="text-[#E68C32] px-4 py-2 rounded-lg font-semibold hover:bg-[#F4A460] hover:text-white transition-all duration-300 text-left"
              >
                Projects
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="text-[#E68C32] px-4 py-2 rounded-lg font-semibold hover:bg-[#F4A460] hover:text-white transition-all duration-300 text-left"
              >
                Connect With Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;