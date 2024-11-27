import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
