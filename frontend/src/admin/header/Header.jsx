import React from "react";
import "./Header.css";


function Header() {
  return (
    <>
      <header className="header ">
        <div className="menu">
          <i class="fa-solid fa-bell"></i>
        </div>
        <div className="header-left">
          <i class="fa-regular fa-envelope"></i>
        </div>
        <div className="header-right">
          <i class="fa-solid fa-user"></i>
        </div>
      </header>
    </>
  );
}

export default Header;
