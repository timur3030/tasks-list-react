import React, { useEffect, useState } from "react";
import "./btnDarkMode.css";
import sun from "../../img/sun.svg";
import moon from "../../img/moon.svg";

function BtnDarkMode() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" ? true : false
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <button
      className={
        darkMode ? "dark-mode-btn dark-mode-btn-active" : "dark-mode-btn"
      }
      onClick={() => setDarkMode(!darkMode)}
    >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}

export default BtnDarkMode;
