import React from "react";
import "../css/Header.css"

interface Props {
  onToggleTheme: () => void;
}

const Header: React.FC<Props> = ({ onToggleTheme }) => {
  return (
    <header>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <button id="theme-toggle" onClick={onToggleTheme}>
        Toggle Theme
      </button>
    </header>
  );
};

export default Header;
