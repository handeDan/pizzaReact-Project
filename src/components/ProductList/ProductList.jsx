import React from "react";
import { cards, cardImagesPath } from "../../assets/data";

function ProductList() {
  return (
    <div>
      <div className="row container-home">
        {cards.map((card, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <img
                className="card-img-top"
                src={cardImagesPath + card.image}
                alt={card.title}
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <div className="d-flex justify-content-between">
                  <p className="card-text">{card.score}</p>
                  <p className="card-text">{card.comments}</p>
                  <p className="card-text fw-bold">{card.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
