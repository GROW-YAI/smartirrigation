import "@fortawesome/fontawesome-free/css/all.min.css";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">Smart Irrigation</h1>
            <p className="text-gray-400 mt-2">
              Efficient water management solutions for a sustainable future.
            </p>
          </div>
          <div className="flex mt-4 md:mt-0 space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-x-twitter"></i>{" "}
              {/* Replace this with an SVG if the icon isn't available */}
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <ul className="text-gray-400 text-center md:text-left space-y-2 md:space-y-0 md:space-x-6">
            <li className="inline-block hover:text-white transition-colors">
              <a href="#">Home</a>
            </li>
            <li className="inline-block hover:text-white transition-colors">
              <a href="#">About</a>
            </li>
            <li className="inline-block hover:text-white transition-colors">
              <a href="#">Services</a>
            </li>
            <li className="inline-block hover:text-white transition-colors">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 mt-6">
          <p>© 2024 Smart Irrigation. All Rights Reserved.</p>
          <p className="text-xs mt-2">
            Designed with <span className="text-red-500">♥</span> FutureDev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
