import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [, setIsLoggedIn] = useState<boolean>(false);
  const [isSignUp] = useState<boolean>(false); // Toggle between login/signup
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");



  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoggedIn(true);
    setIsLoginOpen(false);
  };

  const handleSignUpSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoggedIn(true);
    setIsLoginOpen(false);
  };

  const handleGoogleSignIn = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    // Placeholder for Google sign-in logic
    setIsLoggedIn(true);
    setIsLoginOpen(false);
  };



  return (
    <div>
      {/* Navbar */}
      <nav className="bg-teal-800 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="container max-w-7xl mx-auto flex justify-between items-center p-3 relative">
          {/* Logo */}
          <Link to="/">
            <a className="text-3xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
              LithiumTech<span className="text-white">.</span>
            </a>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden text-white text-3xl absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-icons">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>

          {/* Flex Container to Center Nav Links */}
          <div className="flex-grow flex justify-center">
            <ul
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:flex md:space-x-2 items-center justify-center w-full md:w-auto absolute md:relative top-full left-0 md:top-auto md:left-auto bg-teal-800 md:bg-transparent p-4 md:p-0 flex-col md:flex-row`}
            >
              <li>
                <a
                  href="/"
                  className="block text-xl py-2 px-4 text-white hover:bg-teal-700 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block text-xl py-2 px-4 text-white hover:bg-teal-700 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/features"
                  className="block text-xl py-2 px-4 text-white hover:bg-teal-700 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="block text-xl py-2 px-4 text-white hover:bg-teal-700 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block text-xl py-2 px-4 text-white hover:bg-teal-700 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right-Aligned Elements: Menu Button and Login/Logout Icon */}
          {/* (intentionally left untouched) */}
        </div>
      </nav>

      {/* Login / Sign-Up Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-96">
            <div className="flex justify-center mb-4">
              <div className="bg-teal-500 text-white w-12 h-12 flex items-center justify-center rounded-full">
                <span className="text-2xl font-bold">LT</span>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-4">
              {isSignUp ? "Sign Up" : "Welcome"}
            </h2>
            <p className="text-center text-gray-600 mb-6">
              {isSignUp
                ? "Sign up to Smart Irrigation to continue."
                : "Log in to Smart Irrigation to continue."}
            </p>

            {/* Google Sign-In Button */}
            <button
              type="submit"
              className="cde7ef202 cef709325 c7b5c36ae w-full bg-red-500 text-white py-2 rounded-md flex justify-center items-center"
              data-provider="google"
              data-action-button-secondary="true"
              onClick={handleGoogleSignIn}
            >
              Sign in with Google
            </button>

            {/* Form Fields */}
            <form onSubmit={isSignUp ? handleSignUpSubmit : handleLoginSubmit}>
              {!isSignUp && (
                <>
                  <label className="block mb-2 text-gray-600">
                    Email address*
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                    />
                  </label>
                  <label className="block mb-4 text-gray-600">
                    Password*
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                    />
                  </label>
                </>
              )}
              {isSignUp && (
                <>
                  <label className="block mb-2 text-gray-600">
                    Email address*
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                    />
                  </label>
                  <label className="block mb-4 text-gray-600">
                    Password*
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                    />
                  </label>
                </>
              )}
              <button className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600">
                {isSignUp ? "Sign Up" : "Continue"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

