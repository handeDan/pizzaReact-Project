import React from "react";
import Cards from "../components/ProductList/ProductList.jsx";
import ProductList from "../components/Cards/Cards.jsx";
import Footer from "../components/Footer/Footer.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import Options from "../components/Options/Options.jsx";

function HomePage({ goToOrderPage }) {
  return (
    <section>
      <main className="homepage-main">
        <img
          alt="Teknolojik Yemekler"
          src="./images/iteration-1-images/logo.svg"
        />
        <div className="display-1 text-white">
          <p className="order-title">fırsatı kaçırma</p>
          <p>KOD ACIKTIRIR</p>
          <p>PİZZA, DOYURUR</p>
        </div>
        <button
          className="btn btn-warning btn-lg rounded-pill px-5"
          onClick={goToOrderPage}
        >
          ACIKTIM
        </button>
      </main>
      <NavBar />
      <Cards />
      <div>
        <p></p>
        <p></p>
      </div>
      <Options></Options>
      <ProductList></ProductList>
      <Footer></Footer>
    </section>
  );
}

export default HomePage;
