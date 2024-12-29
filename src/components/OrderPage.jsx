import React, { useState } from "react";
import "../index.css";
import OrderRadio from "./OrderRadio";
import OrderSelection from "./OrderSelection";
import Checkbox from "./Checkbox";

function OrderPage({ onSubmit }) {
  const [orderData, setOrderData] = useState({});
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState([]);
  const [errorMaterial, setErrorMaterial] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorSubmit, setErrorSubmit] = useState("");

  //const [selectedDough, setSelectedDough] = useState([]);
  //const [selectedSize, setSelectedSize] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    orderData.quantity = orderQuantity;
    orderData.material = selectedMaterial;
    onSubmit(orderData); // Sipariş verilerini üst bileşene gönder
  };

  const handleSizeChange = (size) => {
    orderData.size = size;
  };

  const handleDoughChange = (e) => {
    console.log(e);
    orderData.dough = e.target.value;
  };

  const handlePersonChange = (e) => {
    orderData.person = e.target.value;
    setOrderData(orderData);
  };

  const handleNoteChange = (e) => {
    orderData.note = e.target.value;
  };

  const materials = [
    "Pepperoni",
    "Domates",
    "Biber",
    "Sosis",
    "Mısır",
    "Sucuk",
    "Kanada Jambonu",
    "Ananas",
    "Tavuk Izgara",
    "Jalepeno",
    "Kabak",
    "Soğan",
    "Sarımsak",
  ];
  const doughList = [
    "İncecik Hamur",
    "İnce Hamur",
    "Klasik Hamur",
    "Kalın Hamur",
  ];

  const sizeList = ["Küçük", "Orta", "Büyük"];

  const handleCheckboxChange = (material) => {
    setSelectedMaterial((prevSelected) => {
      if (prevSelected.includes(material)) {
        // Eğer malzeme daha önce seçildiyse, onu array'den çıkar
        return prevSelected.filter((item) => item !== material);
      } else {
        // Eğer malzeme seçilmediyse, array'e ekle
        return [...prevSelected, material];
      }
    });
  };

  return (
    <section className="orderpage">
      <header>
        <div className="container gap-5">
          <img
            alt="Teknolojik Yemekler"
            src="./images/iteration-1-images/logo.svg"
          />
          <nav>
            <a href="">Ana Sayfa</a>
            <span className="text-white">-</span>
            <a href="">Seçenekler</a>
            <span className="text-white">-</span>
            <a href="#" className="fw-bold">
              Sipariş Oluştur
            </a>
          </nav>
        </div>
      </header>
      <main className="container">
        <br />
        <h4 className="w-100">Position Absoulute Acı Pizza</h4>
        <br />
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="fw-bold fs-3">85.50₺ </p>
            <div className="d-flex gap-5">
              4.9<span>(200)</span>
            </div>
          </div>
          <p>
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
        <br />

        <form>
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h6>
                Boyut Seç <span className="text-danger"> *</span>
              </h6>
              <div className="d-flex justify-content-start ">
                <OrderRadio
                  sizeList={sizeList}
                  handleSizeChange={handleSizeChange}
                />
              </div>
            </div>
            <div className="d-block">
              <h6>
                Hamur Seç<span className="text-danger"> *</span>
              </h6>
              <div className="mt-3 form-control">
                <OrderSelection
                  doughList={doughList}
                  onChange={handleDoughChange}
                />
              </div>
            </div>
          </div>
          <br />
          <div>
            <h6>Ek Malzemeler</h6>
            <p>En fazla 10 malzeme seçebilirsiniz.</p>
            <div className="row">
              {materials.map((material, index) => (
                <Checkbox
                  key={index}
                  material={material}
                  checked={selectedMaterial.includes(material)}
                  onChange={() => handleCheckboxChange(material)}
                ></Checkbox>
              ))}
            </div>
          </div>
          <br />
          <br />
          <br />
        </form>
      </main>
      <section className="container">
        <div className="d-flex flex-column w-100">
          <h6>
            Ad Soyad<span className="text-danger"> *</span>
          </h6>
          <input
            type="text"
            className="form-control"
            placeholder="Örnek: Ali Çetin"
            onKeyDown={handlePersonChange}
          />
          {orderData.person && orderData.person.length < 3 && (
            <p style={{ color: "red" }}>En az 3 karakter girmelisiniz.</p>
          )}
          <br />
          <h6>Sipariş Notu</h6>
          <textarea
            type="text"
            className="form-control"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            onKeyDown={handleNoteChange}
          />
        </div>
        <hr />
        <div className="d-flex w-100 t-0">
          <div
            className="btn-group h-25 w-25"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              onClick={() => setOrderQuantity((pre) => (pre > 0 ? pre - 1 : 0))}
              type="button"
              className="btn btn-warning"
            >
              -
            </button>
            <button type="button" className="btn border bg-white">
              {orderQuantity}
            </button>
            <button
              onClick={() => setOrderQuantity((pre) => pre + 1)}
              type="button"
              className="btn btn-warning"
            >
              +
            </button>
          </div>
          <div className="border rounded bg-white w-50 d-flex ms-auto align-items-center justify-content-center flex-column ">
            <div className="w-100 d-flex gap: flex-column gap-2 p-5">
              <h6>Sipariş Toplamı</h6>
              <div className="d-flex justify-content-between">
                Seçimler<span>25.00₺</span>
              </div>
              <div className="d-flex justify-content-between text-danger fw-bold">
                Toplam <span>110.50₺</span>
              </div>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="border-0 bg-warning fw-bold w-100 p-2"
            >
              <small>SİPARİŞ VER</small>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default OrderPage;
