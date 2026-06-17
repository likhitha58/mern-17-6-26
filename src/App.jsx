import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;