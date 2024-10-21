import { useState } from 'react';
import logo from '../assets/logo.svg';

const Header = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#5a2940] text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-semibold text-yellow-300">
          <img src={logo} alt="The Wedding Corporate" className="inline-block h-11 w-13" />
          The Wedding Corporate
        </div>

        {/* Navigation - Desktop */}
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="text-white hover:text-yellow-300">Home</a>
          <a href="#" className="text-white hover:text-yellow-300">Services</a>
          <a href="#" className="text-white hover:text-yellow-300">About Us</a>
          <a href="#" className="text-white hover:text-yellow-300">Contact Us</a>
        </nav>

        {/* Buttons - Desktop */}
        <div className="hidden md:flex space-x-4">
          <button className="text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-[#5a2940]">
            Login
          </button>
          <button className="bg-white text-[#5a2940] px-4 py-2 rounded-full hover:bg-yellow-300">
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#5a2940] text-white space-y-4 py-4 text-center transition duration-300 ease-in-out">
          <a href="#" className="block text-white hover:text-yellow-300">Home</a>
          <a href="#" className="block text-white hover:text-yellow-300">Services</a>
          <a href="#" className="block text-white hover:text-yellow-300">About Us</a>
          <a href="#" className="block text-white hover:text-yellow-300">Contact Us</a>
          <div className="space-y-4">
            <button className="w-full text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-[#5a2940]">
              Login
            </button>
            <button className="w-full bg-white text-[#5a2940] px-4 py-2 rounded-full hover:bg-yellow-300">
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
