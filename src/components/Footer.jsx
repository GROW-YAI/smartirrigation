import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-left border-b border-gray-700 pb-8">
          <div className="text-left md:text-left mb-6 md:mb-0">
            <h1 className="text-3xl font-bold tracking-wide">
              Lithium Technology Enterprise
            </h1>
            <p className="text-gray-400 mt-2">
              Efficient water management solutions for a sustainable future.
              Locally designed <br />
              and assembled solutions, ensuring affordability and reliability.{" "}
              <br />
              Commitment to youth empowerment and technological self-reliance.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://web.facebook.com/profile.php?id=61570203652997"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-blue-500 transition-colors text-xl"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-400 hover:text-blue-400 transition-colors text-xl"
            >
              <i className="fab fa-x-twitter"></i>{" "}
              {/* Use this if "fa-x-twitter" exists in your font-awesome package */}
            </a>

            <a
              href="https://www.instagram.com/lithiumtech_ent/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-pink-500 transition-colors text-xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-blue-700 transition-colors text-xl"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://vm.tiktok.com/ZMkLxrnj5/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-gray-400 hover:text-black transition-colors text-xl"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-start mt-8">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-center">
            <li className="hover:text-white transition-colors">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="#">About</a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="#">Services</a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 mt-12">
          <p>
            &copy; {new Date().getFullYear()} Lithium Technology Enterprise. All
            Rights Reserved.
          </p>
          <p className="text-xs mt-2">
            Designed with <span className="text-red-500">♥</span> by FutureDev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
