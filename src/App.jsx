import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
