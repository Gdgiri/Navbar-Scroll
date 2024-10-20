// App.jsx
import React, { useRef, useState } from "react";
import "./index.css"; // Ensure this is included
import Navbar from "./Components/Navbar";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollToSection = (sectionName) => {
    setActiveSection(sectionName);
    const sectionRef = {
      home: homeRef,
      about: aboutRef,
      services: servicesRef,
      contact: contactRef,
    }[sectionName];
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        handleScrollToSection={handleScrollToSection}
      />

      <div className="content">
        <section ref={homeRef} id="home" className="center-content">
          <h2>Home</h2>
          <p>Welcome to the Home Page!</p>
        </section>

        <section ref={aboutRef} id="about" className="center-content">
          <h2>About</h2>
          <p>Learn more about us in the About section.</p>
        </section>

        <section ref={servicesRef} id="services" className="center-content">
          <h2>Services</h2>
          <p>Check out our Services.</p>
        </section>

        <section ref={contactRef} id="contact" className="center-content">
          <h2>Contact</h2>
          <p>Get in touch with us via the Contact section.</p>
        </section>
      </div>
    </div>
  );
};

export default App;
