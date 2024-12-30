import React from "react";

function HomePage({ goToOrderPage }) {
  return (
    <section className="homepage">
      <img
        alt="Teknolojik Yemekler"
        src="./images/iteration-1-images/logo.svg"
      />
      <div className="display-1 text-white">
        <p>KOD ACIKTIRIR</p>
        <p>PİZZA, DOYURUR</p>
      </div>
      <button
        className="btn btn-warning btn-lg rounded-pill px-5"
        onClick={goToOrderPage}
      >
        ACIKTIM
      </button>
    </section>
  );
}

export default HomePage;
