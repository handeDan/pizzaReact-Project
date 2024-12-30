import React from "react";
import { products, productsImagesPath } from "../../assets/data";

function ProductList() {
  return (
    <div>
      <div className="row container-home">
        {products.map((product, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <img
                className="card-img-top"
                src={productsImagesPath + product.image}
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <div className="d-flex justify-content-between">
                  <p className="card-text">{product.score}</p>
                  <p className="card-text">{product.comments}</p>
                  <p className="card-text fw-bold">{product.price}</p>
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
