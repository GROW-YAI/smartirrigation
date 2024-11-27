// import { useState } from "react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="bg-teal-700 text-white">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         {/* Logo */}
//         <h1 className="text-3xl font-bold">Smart Irrigation</h1>

//         {/* Menu Toggle for Mobile */}
//         <button
//           className="md:hidden block"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <span className="material-icons">menu</span>
//         </button>

//         {/* Navigation Links */}
//         <ul
//           className={`md:flex md:space-x-6 items-center ${
//             isMenuOpen ? "block" : "hidden"
//           }`}
//         >
//           <li>
//             <a
//               href="#home"
//               className="block text-xl py-2 px-4 hover:bg-teal-600 rounded"
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#about"
//               className="block text-xl py-2 px-4 hover:bg-teal-600 rounded"
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href="#features"
//               className="block text-xl py-2 px-4 hover:bg-teal-600 rounded"
//             >
//               Features
//             </a>
//           </li>
//           <li>
//             <a
//               href="#pricing"
//               className="block text-xl py-2 px-4 hover:bg-teal-600 rounded"
//             >
//               Pricing
//             </a>
//           </li>
//           <li>
//             <a
//               href="#contact"
//               className="block text-xl py-2 px-4 hover:bg-teal-600"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    // Close the menu when a link is clicked
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-teal-800 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold">SmartIrrigation</h1>

        {/* Menu Toggle for Mobile */}
        <button
          className="md:hidden block text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-icons text-3xl">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-6 items-center transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden"
          } md:block bg-teal-800 md:bg-transparent absolute md:relative w-full md:w-auto left-0 top-full md:top-auto mt-4 md:mt-0 p-4 md:p-0 rounded-md md:shadow-none shadow-lg md:flex-row flex-col`}
        >
          <li>
            <a
              href="#home"
              className="block text-xl py-2 px-4 text-white hover:bg-teal-700 rounded"
              onClick={handleLinkClick}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block text-xl py-2 px-4 text-white hover:bg-teal-700 rounded"
              onClick={handleLinkClick}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="block text-xl py-2 px-4 text-white hover:bg-teal-700 rounded"
              onClick={handleLinkClick}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="block text-xl py-2 px-4 text-white hover:bg-teal-700 rounded"
              onClick={handleLinkClick}
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-xl py-2 px-4 text-white hover:bg-teal-700 rounded"
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
