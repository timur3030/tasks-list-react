import React from "react";
import "./header.css";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__row">
          <div className="display-4 mb-2 title">Приложение</div>
          <BtnDarkMode />
        </div>
        <div className="h4 mb-5">Cписок задач или покупок</div>
      </div>
    </div>
  );
}

export default Header;
