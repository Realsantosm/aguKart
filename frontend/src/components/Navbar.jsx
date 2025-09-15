import React from "react";
import { FiShoppingCart, FiUser, FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0" onClick={() => navigate("/")}>
            <a href="/" className="text-2xl font-bold text-red-600">
              🍅AguKart
            </a>
          </div>

          {/* Navigation Links - hidden on small screens */}
          <div className="hidden md:flex space-x-8">
            <a href="/products" className="text-gray-700 hover:text-red-600 font-medium transition">
              Products
            </a>
            <a href="/deals" className="text-gray-700 hover:text-red-600 font-medium transition">
              Deals
            </a>
            <a href="/about" className="text-gray-700 hover:text-red-600 font-medium transition">
              About Us
            </a>
            <a href="/contact" className="text-gray-700 hover:text-red-600 font-medium transition">
              Contact
            </a>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-6 max-w-lg hidden md:block">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border rounded-lg py-2 px-4 outline-none border-gray-300 focus:border-red-600 transition"
              aria-label="Search products"
            />
          </div>

          {/* User and Cart Icons */}
          <div className="flex items-center space-x-6">
            <button aria-label="Account" className="text-gray-700 hover:text-red-600 transition text-xl">
              <FiUser />
            </button>
            <button aria-label="Shopping Cart" className="text-gray-700 hover:text-red-600 transition text-xl relative">
              <FiShoppingCart />
              {/* Cart Badge */}
            
            </button>
            {/* Mobile menu button */}
            <button aria-label="Menu" className="md:hidden text-gray-700 hover:text-red-600 transition text-2xl">
              <FiMenu />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
