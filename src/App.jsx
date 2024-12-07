// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Features from "./pages/Features";
// import Contact from "./pages/Contact";
// import Pricing from "./pages/Pricing";

// const ScrollToTop = () => {
//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [location]);

//   return null;
// };

// const App = () => {
//   return (
//     <div>
//       <ScrollToTop />
//       <Navbar />
//       <Home />
//       <About />
//       <Features />
//       <Pricing />
//       <Contact />
//       <Footer />
//     </div>
//   );
// };

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Features from "./pages/Features";
// import Contact from "./pages/Contact";
// import Pricing from "./pages/Pricing";

// Scroll Restoration Component
// const ScrollToTop = () => {
//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [location]);

//   return null; // No visual output needed
// };

// const App = () => {
//   return (
//     <Router>
//       <ScrollToTop />
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
// <Route path="/about" element={<About />} />
// <Route path="/features" element={<Features />} />
// <Route path="/pricing" element={<Pricing />} />
// <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;

import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null; // No visual output needed
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Features />
              <Pricing />
              <Contact />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
