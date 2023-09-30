import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="display-4 mb-2 title">Приложение</div>
        <div className="h4 mb-5">Cписок задач или покупок</div>
      </div>
    </div>
  );
}

export default Header;
