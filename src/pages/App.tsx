import React, { useState } from "react";
import Header from "../components/Header";
import "../css/App.css"

function App() {
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
    <div className={currentTheme}>
      <div className="header-container">
        <Header onToggleTheme={handleToggleTheme} />
      </div>
      <div className="center-image-container">
        <img src="https://github.com/greysilly7.png" className="center-image glow" alt="" />
        <p style={{ paddingTop: "20px" }}>
          Haiii!! I am greysilly7, I do programming and gaming.
        </p>
        <p>
          You can read more about me on my profile at{" "}
          <a href="https://github.com/greysilly7">Github</a>
        </p>
      </div>
    </div>
  );
}

export default App;
