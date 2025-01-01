import React from "react";
import { icons, iconPath, navBarTitle } from "./../../assets/data";

function NavBar() {
  // const icons = [1, 2, 3, 4, 5, 6];
  // const iconPath = `./../../../images/iteration-2-images/icons/`;
  // const navBarTitle = [
  //   "YENİ! Kore",
  //   "Pizza",
  //   "Burger",
  //   "Kızartmalar",
  //   "Fast Food",
  //   "Gazlı İçecek",
  // ];

  return (
    <section className="container-home home-navbar">
      {icons.map((icon, index) => {
        return (
          <button
            className="d-flex flex-row align-items-center justify-content-center gap-3 btn btn-light rounded-pill "
            key={index}
          >
            <img src={iconPath + icon + ".svg"} alt={icon} />
            <p>{navBarTitle[index]}</p>
          </button>
        );
      })}
    </section>
  );
}

export default NavBar;
