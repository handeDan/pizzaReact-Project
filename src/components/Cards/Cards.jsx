import React from "react";
import { cards, cardsImagesPath } from "../../assets/data";

function Cards() {
  return (
    <div className="cardGroup container-home">
      <div
        className="card-1 bg w-50"
        style={{
          backgroundImage: `url(
              "./../../../images/iteration-2-images/cta/kart-1.png"
            )`,
        }}
      >
        <h1 className="display-2">Özel Lezzetus</h1>
        <p>Position:Absolute Acı Burger</p>
        <button className="btn btn-light rounded-pill text-danger fw-bold mt-2">
          SİPARİŞ VER
        </button>
      </div>
      <div className="d-flex flex-column gap-3 w-50">
        <div
          className="card-2 bg "
          style={{
            backgroundImage: `url(
              "./../../../images/iteration-2-images/cta/kart-2.png"
            )`,
          }}
        >
          <h2>Hackathlon</h2>
          <h2>Burger Menü</h2>
          <button className="btn btn-light rounded-pill text-danger fw-bold mt-2">
            SİPARİŞ VER
          </button>
        </div>
        <div
          className="card-2 bg"
          style={{
            backgroundImage: `url(
              "./../../../images/iteration-2-images/cta/kart-3.png"
            )`,
          }}
        >
          <h2 className="text-danger">
            Çoooook <span className="text-dark">hızlı</span>
          </h2>
          <h2 className="text-dark"> npm gibi kurye</h2>
          <button className="btn btn-light rounded-pill text-danger fw-bold mt-2">
            SİPARİŞ VER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
