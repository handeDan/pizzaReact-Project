import React from "react";

function SuccessPage({ orderData }) {
  const { person, size, dough, quantity, material } = orderData;
  return (
    <section className="success">
      <div className="container">
        <img
          alt="Teknolojik Yemekler"
          src="./images/iteration-1-images/logo.svg"
        />
        <section className="display-1 text-white mt-3">
          <h4>Merhaba {person},</h4>
          <p className="order-title">lezzetin yolda</p>
          <p>SİPARİŞ ALINDI</p>
        </section>
        <div className="border-top border-1 border-white w-100 text-align-left" />
        <section className="d-flex flex-column align-items-center text-white mt-3">
          <h3 className="text-white w-100">Position Absolute Acı Pizza</h3>
          <div className="d-flex flex-column text-start flex-wrap w-50 mt-1 mb-1">
            <p>
              Adet:&nbsp;<strong>{quantity}</strong>
            </p>
            <p>
              Boyut:&nbsp;<strong>{size}</strong>
            </p>
            <p>
              Hamur:&nbsp;
              <strong>{dough}</strong>
            </p>
            <p>
              Ek Malzemeler:&nbsp;<strong>{material.join(", ")}</strong>
            </p>
          </div>
        </section>
        <section className="order-summary-table">
          <div className="d-flex flex-column gap-3 p-3 text-white ">
            <h5 className="d-flex text-align-left">Sipariş Toplamı</h5>
            <div className="d-flex justify-content-between text-white">
              <h5>Seçimler</h5>
              <h5>{orderData.totalEkPrice} ₺</h5>
            </div>
            <div className="d-flex justify-content-between text-white fw-bold">
              <h5>Toplam</h5>
              <h5>{orderData.totalPrice}₺</h5>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default SuccessPage;
