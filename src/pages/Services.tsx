import React, { useState } from "react";
import Header from "../components/Header";

function Services() {
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

      <div className="services-container">
        <h2>Our Services</h2>
        <p>For more information please contant me on Discord via Greysilly7#8813</p>
        <p>We do MC and Discord Bot Hosting</p>
      </div>
    </div >
  );
}

export default Services;
