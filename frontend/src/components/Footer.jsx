import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    let navigate = useNavigate();
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-800">
        {/* Brand and Social */}
        <div>
          <h2 className="font-bold text-2xl text-red-600 mb-3 hover:cursor-pointer" onClick={()=> navigate("/")}>🍅AguKart</h2>
          <p className="mb-4 text-gray-400">Building reliable solutions for the modern web. Follow on socials:</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-400 hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 hover:text-white transition">
              <FaGithub />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-700 hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        {/* Menu Links */}
        <div>
          <h4 className="font-semibold text-lg  text-[#e63946] mb-4">Menu</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#e63946] transition">About</a></li>
            <li><a href="#" className="hover:text-[#e63946] transition">Team</a></li>
            <li><a href="#" className="hover:text-[#e63946] transition">Products</a></li>
            <li><a href="#" className="hover:text-[#e63946] transition">FAQ</a></li>
          </ul>
        </div>
        {/* Categories */}
        <div>
          <h4 className="font-semibold text-lg  text-[#e63946] mb-4">Category</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#e63946] transition">Electronics</a></li>
            <li><a href="#" className="hover:text-[#e63946] transition">Shoes</a></li>
            <li><a href="#" className="hover:text-[#e63946] transition">Clothes</a></li>
            <li><a href="#" className="hover:text-[#e63946] transition">Paintings</a></li>
          </ul>
        </div>
        {/* Others */}
        <div>
          <h4 className="font-semibold text-lg text-[#e63946] mb-4">Others</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#e63946] transition">Styleguide</a></li>
            <li><a href="#" className="hover:text-[#e63946] transition">Changelog</a></li>
            <li><a href="#" className="hover:text-[#e63946] transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#e63946] transition">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
      {/* Copyright */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8">
        <span className="text-gray-500 text-sm mb-3 md:mb-0">
          © {new Date().getFullYear()} - All Rights Reserved by <span className="text-white font-bold">Santos Murmu</span>
        </span>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white text-xs">Privacy Policy</a>
          <span className="text-gray-700">|</span>
          <a href="#" className="hover:text-white text-xs">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
