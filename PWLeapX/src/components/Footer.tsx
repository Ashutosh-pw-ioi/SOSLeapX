import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center space-x-2">
              {/* <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <img
                  src="https://images.seeklogo.com/logo-png/47/2/physics-wallah-logo-png_seeklogo-474856.png"
                  alt="PWLeapX Logo"
                />
              </div> */}
              <div className="w-24 h-10 mb-1 bg-white rounded-lg flex items-center justify-center">
                <img src="/public/logo.svg" alt="Name" />
              </div>
            </Link>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering businesses worldwide through expert-driven solutions and strategic guidance. Your success is our mission.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-[#E68C32] transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-[#E68C32] transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-[#E68C32] transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-[#E68C32] transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#E68C32] transition-colors">Strategic Planning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#E68C32] transition-colors">Growth Optimization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#E68C32] transition-colors">Process Improvement</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#E68C32] transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#E68C32] transition-colors">Risk Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#E68C32] transition-colors">Global Expansion</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#E68C32] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:hello@pwleapx.com" className="text-white hover:text-[#E68C32] transition-colors">
                    hello@pwleapx.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#E68C32] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a href="tel:+1-555-123-4567" className="text-white hover:text-[#E68C32] transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#E68C32] mt-1 flex-shrink-0" />
                <div>
                  {/* <p className="text-gray-400">Address</p> */}
                  <p className="text-white">
                    12th Floor, Brigade Signature Tower, Old Madras Rd, Sannatammanahalli, Bengaluru, Karnataka 560049
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 PWLeapX. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-[#E68C32] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-sm hover:text-[#E68C32] transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 text-sm hover:text-[#E68C32] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;