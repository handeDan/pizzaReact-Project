import React from "react";

function Success({ orderData }) {
  return (
    <section className="success">
      <img
        alt="Teknolojik Yemekler"
        src="./images/iteration-1-images/logo.svg"
      />
      <div className="display-1 text-white m-auto">
        <p>TEBRİKLER!</p>
        <p>SİPARİŞİNİZ ALINDI!</p>
      </div>
    </section>
  );
}

export default Success;
