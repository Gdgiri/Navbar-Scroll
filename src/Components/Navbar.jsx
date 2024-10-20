// Navbar.jsx
import React from "react";
import Download from "./Download";

const Navbar = ({ activeSection, setActiveSection, handleScrollToSection }) => {
  return (
    <nav>
      <ul>
        <Download />
        <li
          onClick={() => handleScrollToSection("home")}
          className={`text-center ${activeSection === "home" ? "active" : ""}`}
        >
          Home
        </li>
        <li
          onClick={() => handleScrollToSection("about")}
          className={activeSection === "about" ? "active" : ""}
        >
          About
        </li>
        <li
          onClick={() => handleScrollToSection("services")}
          className={activeSection === "services" ? "active" : ""}
        >
          Services
        </li>
        <li
          onClick={() => handleScrollToSection("contact")}
          className={activeSection === "contact" ? "active" : ""}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
