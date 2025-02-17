import React, { useEffect, useState } from "react";
import "../index.css";
import OrderRadio from "../components/OrderRadio";
import OrderSelection from "../components/OrderSelection";
import Checkbox from "../components/Checkbox";
import { materials, sizeList, doughList, sauceList } from "../assets/data";
import Footer from "../components/Footer/Footer";
import CheckboxSauce from "../components/CheckboxSauce";
import Dropdown from "../components/Dropdown";

function OrderPage({ onSubmit }) {
  //state'ler:
  const [orderData, setOrderData] = useState({}); //orderData(initial:{})
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [orderPerson, setOrderPerson] = useState("");
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedSauces, setSelectedSauces] = useState([]);
  const [errorMaterial, setErrorMaterial] = useState(false);
  const [errorName, setErrorName] = useState(true);
  const [errorSubmit, setErrorSubmit] = useState(
    "Lütfen gerekli alanları doldurun."
  );

  const mainPrice = 85.5;
  const materialPrice = 5.0;

  // useEffect, quantity değiştiğinde çalışır
  useEffect(() => {
    console.log("Size değişti:", orderQuantity);
    checkForm();
  }, [
    orderQuantity,
    selectedMaterials,
    selectedSauces,
    orderData,
    orderPerson,
  ]);

  //fonksiyonlar:
  const handleSubmit = (e) => {
    e.preventDefault();
    orderData.quantity = orderQuantity;
    orderData.material = selectedMaterials;
    orderData.sauce = selectedSauces;
    orderData.person = orderPerson;
    orderData.totalPrice = calculateTotalPrice();
    orderData.totalEkPrice = calculateEkPrice();
    if (!!errorSubmit) {
      return;
    }
    onSubmit(orderData); //Sipariş verilerini üst bileşene gönder
  };
  // Submit doğrulaması:
  const checkForm = () => {
    const isExistPersonName = !!orderPerson;
    console.log(orderPerson, orderData);
    console.log(isExistPersonName);
    setErrorSubmit("");
    if (orderQuantity === 0) {
      setErrorSubmit("Lütfen en az 1 adet seçim yapın.");
    } else if (!orderData.size) {
      setErrorSubmit("Lütfen boyut seçiniz.");
    } else if (!orderData.dough) {
      setErrorSubmit("Lütfen hamur seçiniz.");
    } else if (isExistPersonName === false || orderPerson.length < 3) {
      setErrorSubmit("Lütfen en az 3 karakterli ad soyad giriniz.");
    }
  };

  const handleSizeChange = (size) => {
    orderData.size = size; //orderData'ya size keyi ekleyip gelen değeri value olarak veriyoruz.
    setOrderData(orderData);
    checkForm();
  };

  const handleDoughChange = (e) => {
    console.log(e);
    orderData.dough = e.target.value; //orderData'ya dough keyi ekleyip gelen değeri value olarak veriyoruz.
    setOrderData(orderData);
    checkForm();
  };

  const handlePersonChange = (e) => {
    const orderPerson = e.target.value; //orderData'ya person keyi ekleyip gelen değeri value olarak veriyoruz.
    setOrderPerson(orderPerson);
    if (orderPerson.length < 3) {
      setErrorName(true);
    } else {
      setErrorName(false);
      checkForm();
    }
  };

  const handleNoteChange = (e) => {
    orderData.note = e.target.value; //orderData'ya note keyi ekleyip gelen değeri value olarak veriyoruz.
    setOrderData(orderData);
  };

  const handleCheckboxChange = (event) => {
    const material = event.target.value;
    const isChecked = event.target.checked;

    // Eğer checkbox seçildiyse ve sınırı aşmıyorsa ekle
    if (isChecked && selectedMaterials.length < 10) {
      setSelectedMaterials([...selectedMaterials, material]);
    }
    // Checkbox işaret kaldırıldığında çıkar
    else if (!isChecked) {
      setSelectedMaterials(
        selectedMaterials.filter((item) => item !== material)
      );
    }
  };
  //Sos seçim fonksiyonu:
  const handleCheckboxSauceChange = (event) => {
    const sauce = event.target.value;
    const isChecked = event.target.checked;

    // Eğer checkbox seçildiyse ve sınırı aşmıyorsa ekle
    if (isChecked && selectedSauces.length < 2) {
      setSelectedSauces([...selectedSauces, sauce]);
    }
    // Checkbox işaret kaldırıldığında çıkar
    else if (!isChecked) {
      setSelectedSauces(selectedSauces.filter((item) => item !== sauce));
    }
  };

  const calculateEkPrice = () => {
    return (materialPrice * selectedMaterials.length).toFixed(2);
  };

  const calculateTotalPrice = () => {
    const ekTotalPrice = Number(calculateEkPrice());
    return ((mainPrice + ekTotalPrice) * orderQuantity).toFixed(2);
  };

  return (
    <div>
      <section className="orderpage">
        <header>
          <div className="container gap-5">
            <img
              alt="Teknolojik Yemekler"
              src="./images/iteration-1-images/logo.svg"
            />
          </div>
        </header>
        <main className="container-main">
          <div className="container">
            <img
              alt="Teknolojik Yemekler"
              src="./images/iteration-2-images/pictures/form-banner.png"
            />
            <br />
            <nav>
              <a href="">Ana Sayfa</a>
              <span>-</span>
              <Dropdown />
              <span>-</span>
              <a href="#" className="fw-bold text-danger">
                Sipariş Oluştur
              </a>
            </nav>
            <br /> <br />
            <h4 className="w-100">Position Absoulute Acı Pizza</h4>
            <br />
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="fw-bold fs-3">85.50₺ </p>
                <div className="d-flex gap-5">
                  4.9<span>(200)</span>
                </div>
              </div>
              <article>
                Frontend Dev olarak hala position:absolute kullanıyorsan bu çok
                acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
                çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel
                olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
                genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan
                oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya
                bazen pizzetta denir.
              </article>
            </div>
          </div>
        </main>
        <br />
        <form className="container">
          <div className="w-100">
            <div className="w-50 d-inline-block">
              <h6>
                Boyut Seç <span className="text-danger"> *</span>
              </h6>
              <div>
                <OrderRadio
                  sizeList={sizeList}
                  handleSizeChange={handleSizeChange}
                />
              </div>
            </div>
            <div className="w-50 d-inline-block">
              <h6>
                Hamur Seç<span className="text-danger"> *</span>
              </h6>
              <div>
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
                  selectedMaterials={selectedMaterials}
                  onChecked={handleCheckboxChange}
                ></Checkbox>
              ))}
              {selectedMaterials.length > 9 && (
                <p className="text-danger">Sadece 10 malzeme seçebilirsiniz!</p>
              )}
            </div>
            {errorMaterial && <p style={{ color: "red" }}>{errorMaterial}</p>}
          </div>
          <div className="w-100">
            <h6>Soslar</h6>
            <p>En fazla 2 sos seçebilirsiniz.</p>
            <div className="row">
              {sauceList.map((sauce, index) => (
                <CheckboxSauce
                  key={index}
                  sauce={sauce}
                  selectedSauces={selectedSauces}
                  onChecked={handleCheckboxSauceChange}
                ></CheckboxSauce>
              ))}
              {selectedSauces.length > 1 && (
                <p className="text-danger">En fazla 2 sos seçebilirsiniz!</p>
              )}
            </div>
          </div>
          <br />
        </form>
        <section className="container">
          <div className="d-flex flex-column w-100">
            <h6>
              Ad Soyad<span className="text-danger "> *</span>
            </h6>
            <input
              type="text"
              name="name"
              className="form-control textarea"
              placeholder="Örnek: Ali Çetin"
              onChange={handlePersonChange}
            />
            {errorName && (
              <p style={{ color: "red" }}>En az 3 karakter girmelisiniz.</p>
            )}
            <br />
            <h6>Sipariş Notu</h6>
            <textarea
              type="text"
              className="form-control textarea"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              onChange={handleNoteChange}
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
                onClick={() =>
                  setOrderQuantity((pre) => (pre > 0 ? pre - 1 : 0))
                }
                type="button"
                className="btn btn-warning"
              >
                -
              </button>
              <button type="button" className="btn border textarea">
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
              <div className="w-100 d-flex flex-column p-4 textarea">
                <h6>Sipariş Toplamı</h6>
                <div className="d-flex justify-content-between">
                  Seçimler
                  <span>{calculateEkPrice()} ₺</span>
                </div>
                <div className="d-flex justify-content-between text-danger fw-bold">
                  Toplam <span>{calculateTotalPrice()}₺</span>
                </div>{" "}
                <br />
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="border-0 bg-warning fw-bold p-2"
                  disabled={errorSubmit}
                >
                  <small>SİPARİŞ VER</small>
                </button>
                {errorSubmit && (
                  <p style={{ color: "red", paddingTop: "10px", margin: "0" }}>
                    {errorSubmit}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default OrderPage;
