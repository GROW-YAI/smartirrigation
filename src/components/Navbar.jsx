import { useState } from "react";
import { UserPlusIcon, UserMinusIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginToggle = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setIsLoginOpen(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-teal-800 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center p-3">
          {/* Logo */}
          <h1 className="text-2xl font-bold">SmartIrrigation</h1>

          {/* Flex Container to Center Nav Links */}
          <div className="flex-grow flex justify-center">
            <ul
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:flex md:space-x-6 items-center justify-center w-full md:w-auto absolute md:relative top-full left-0 md:top-auto md:left-auto bg-teal-800 md:bg-transparent p-4 md:p-0 flex-col md:flex-row`}
            >
              <li>
                <a
                  href="#home"
                  className="block text-xl py-2 px-4 text-white hover:bg-teal-700 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block text-xl py-2 px-4 text-white hover:bg-teal-700 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="block text-xl py-2 px-4 text-white hover:bg-teal-700 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="block text-xl py-2 px-4 text-white hover:bg-teal-700 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block text-xl py-2 px-4 text-white hover:bg-teal-700 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right-Aligned Elements: Menu Button and Login/Logout Icon */}
          <div className="ml-auto flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden block text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-icons text-3xl">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>

            {/* Login/Logout Icon */}
            <div className="relative group">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="text-white hover:text-gray-300"
                >
                  <UserMinusIcon className="w-8 h-8" />
                </button>
              ) : (
                <button
                  onClick={handleLoginToggle}
                  className="text-white hover:text-gray-300"
                >
                  <UserPlusIcon className="w-8 h-8" />
                </button>
              )}
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-30px] opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded px-2 py-1 shadow-md transition-opacity duration-300">
                {isLoggedIn ? "Logout" : "Login"}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-96">
            <div className="flex justify-center mb-4">
              <div className="bg-teal-500 text-white w-12 h-12 flex items-center justify-center rounded-full">
                <span className="text-2xl font-bold">SI</span>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-4">Welcome</h2>
            <p className="text-center text-gray-600 mb-6">
              Log in to Smart Irrigation to continue.
            </p>

            <form onSubmit={handleLoginSubmit}>
              <label className="block mb-2 text-gray-600">
                Email address*
                <input
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                />
              </label>
              <label className="block mb-4 text-gray-600">
                Password*
                <input
                  type="password"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                />
              </label>
              <button className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600">
                Continue
              </button>
            </form>

            <div className="text-center mt-4">
              <a href="#" className="text-teal-500 text-sm">
                Forgot password?
              </a>
            </div>
            <div className="text-center mt-2">
              <p className="text-sm">
                Don’t have an account?{" "}
                <a href="#" className="text-teal-500">
                  Sign up
                </a>
              </p>
            </div>
          </div>

          {/* Close Modal */}
          <button
            onClick={() => setIsLoginOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <span className="material-icons text-3xl">close</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
