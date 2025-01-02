import React from "react";
import "../index.css";

function Dropdown() {
  return (
    <div>
      <li className="navbar-item dropdown">
        <a href="#">Seçenekler</a>
        <ul className="dropdown-menu">
          <li>
            <a href="#">Hakkımızda</a>
          </li>
          <li>
            <a href="#">İletişim</a>
          </li>
          <li>
            <a href="#">Sorun Bildir</a>
          </li>
        </ul>
      </li>
    </div>
  );
}

export default Dropdown;
