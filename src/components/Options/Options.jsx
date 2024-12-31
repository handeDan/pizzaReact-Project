import React from "react";
import { options, optionsPath, optionsTitle } from "./../../assets/data";

function Options() {
  return (
    <section className="container-home d-flex flex-column">
      <p className="nav-title">en çok paketlenen menüler</p>
      <h1 className="display-5 fw-bold">Acıktıran Kodlara Doyuran Lezzetler</h1>
      <div className="d-flex flex-row justify-content-around w-100 mt-3 home-options">
        {options.map((option, index) => {
          return (
            <button
              className="d-flex flex-row align-items-center justify-content-center gap-3 btn btn-light rounded-pill "
              key={index}
            >
              <img src={optionsPath + option + ".svg"} alt={option} />
              <p>{optionsTitle[index]}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default Options;
