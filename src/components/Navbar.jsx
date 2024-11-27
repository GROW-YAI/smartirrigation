import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-teal-700 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold">Smart Irrigation</h1>

        {/* Menu Toggle for Mobile */}
        <button
          className="md:hidden block"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-icons">menu</span>
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-6 items-center ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <a
              href="#home"
              className="block py-2 px-4 hover:bg-teal-600 rounded"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block py-2 px-4 hover:bg-teal-600 rounded"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="block py-2 px-4 hover:bg-teal-600 rounded"
            >
              Features
            </a>
          </li>
          <li>
            <a href="#contact" className="block py-2 px-4 hover:bg-teal-600">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
