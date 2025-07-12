import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between mr-8 ml-5 items-start gap-12">

        {/* Left Section: Logos & Copyright */}
        <div className="space-y-4 max-w-sm">
          <div className="flex items-center space-x-2">
                <div className="w-40 h-16 mb-4 mt-[-25px]">
                  <img src="https://res.cloudinary.com/dsdcta1sr/image/upload/v1752083292/PW_Leap_X_white_ijlnqu.svg" alt="logoName" className="mt-0" />
                </div>
          </div>
          <p className="text-gray-400">
            Copyright © 2025 Physics Wallah Pvt. Ltd. <br />
            All rights reserved.
          </p>
        </div>


        {/* Middle Section: Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#E68C32]">Contact Us</h3>
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-[#E68C32] mt-1" />
            <div>
              <a href="mailto:contact@pwleapx.com" className="text-white hover:text-[#E68C32] transition">
                contact@pwleapx.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-[#E68C32] mt-1" />
            <div>
              <a href="tel:+919481912068" className="text-white hover:text-[#E68C32] transition">
                +91 9481912068
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-[#E68C32] mt-1" />
            <div>
              <a href="tel:+917240981514" className="text-white hover:text-[#E68C32] transition">
                +91 7240981514
              </a>
            </div>
          </div>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.instagram.com/pwschoolofstartups/?hl=en" className="bg-gray-200 text-black p-2 rounded-full hover:bg-[#E68C32] transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/pw-school-of-startups/?originalSubdomain=in" className="bg-gray-200 text-black p-2 rounded-full hover:bg-[#E68C32] transition" target='_blank'>
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        {/* Right Section: Legal Links */}
        <div className="space-y-3 text-gray-400 flex flex-col">
          <Link to="https://www.pw.live/privacy-policy" target='_blank' className="hover:text-[#E68C32] transition">Privacy Policy</Link>
          <Link to="https://www.pw.live/terms-and-conditions" target='_blank' className="hover:text-[#E68C32] transition">Terms of Service</Link>
          <Link to="/cookie-policy" className="hover:text-[#E68C32] transition">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
