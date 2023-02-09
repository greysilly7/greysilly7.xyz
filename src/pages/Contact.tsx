import React, { useEffect, useState } from "react";
import Header from "../components/Header";

function Contact() {
  const [currentTheme, setCurrentTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.className = currentTheme;
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const handleToggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark-theme" : "light");
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
