import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useRef } from "react";
import Navbar from "./Components/Navbar";

function App() {
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Navbar
        testimonialRef={testimonialRef}
        aboutRef={aboutRef}
        workRef={workRef}
        contactRef={contactRef}
        footerRef={footerRef}
        scrollToSection={scrollToSection}
      />
      <Home />
      <About aboutRef={aboutRef} />
      <Work workRef={workRef} />
      <Testimonials testimonialRef={testimonialRef} />
      <Contact contactRef={contactRef} />
      <Footer footerRef={footerRef} />
    </div>
  );
}

export default App;
