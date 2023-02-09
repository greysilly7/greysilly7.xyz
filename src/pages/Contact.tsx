import React, { useState } from "react";
import Header from "../components/Header";

function Contact() {
  const [currentTheme, setCurrentTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  const handleToggleTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark-theme");
      localStorage.setItem("theme", "dark-theme");
    } else {
      setCurrentTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className={`${currentTheme}`}>
      <div className="header-container">
        <Header onToggleTheme={handleToggleTheme} />
      </div>

      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>You can contact me via Discord, Greysilly7#8813</p>
      </div>
    </div>
  );
}

export default Contact;
