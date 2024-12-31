import React from "react";
import "./footer.css";
import { iconsFooter, instaFooter, footerPath } from "./../../assets/data";

function Footer() {
  return (
    <section className="footer-bg footer">
      <div className="container-footer">
        <div>
          <img
            className="mb-5"
            alt="Teknolojik Yemekler"
            src="./images/iteration-2-images/footer/logo-footer.svg"
            width={120}
          />
          <div className="footer-icons">
            {iconsFooter.map((icon, index) => (
              <div className="d-flex" key={index}>
                <img src={footerPath + icon.image} alt="" />
                <p>{icon.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4>Sıcacık Menüler</h4>
          <div className="d-flex flex-column mt-4">
            <p>Terminal Pizza</p>
            <p>5 Kişilik Hackathlon Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Console Frosty</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acı Burger</p>
          </div>
        </div>
        <div className="footer-insta-images-wrapper">
          <h4>Instagram</h4>
          <br />
          <div className="footer-insta-images">
            {instaFooter.map((ins, index) => (
              <img key={index} src={footerPath + ins.image} alt="" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
