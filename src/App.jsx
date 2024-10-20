import React, { useRef, useState } from "react";
import "./index.css"; // Ensure this is included
import Download from "./Download";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollToSection = (sectionRef, sectionName) => {
    setActiveSection(sectionName);
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <nav>
        <ul>
          <Download />
          <li
            onClick={() => handleScrollToSection(homeRef, "home")}
            className={`text-center ${
              activeSection === "home" ? "active" : ""
            }`}
          >
            Home
          </li>
          <li
            onClick={() => handleScrollToSection(aboutRef, "about")}
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </li>
          <li
            onClick={() => handleScrollToSection(servicesRef, "services")}
            className={activeSection === "services" ? "active" : ""}
          >
            Services
          </li>
          <li
            onClick={() => handleScrollToSection(contactRef, "contact")}
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </li>
        </ul>
      </nav>

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
