import React, { useEffect, useState } from "react";
import Header from "../components/Header";

function Services() {
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

      <div className="services-container">
        <h2>Our Services</h2>
        <p>For more information please contant me on Discord via Greysilly7#8813</p>
        <p>We do MC and Discord Bot Hosting</p>
      </div>
    </div >
  );
}

export default Services;
