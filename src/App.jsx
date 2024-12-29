import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OrderPage from "./components/OrderPage";
import HomePage from "./components/HomePage";
import Success from "./components/Success";
import { useState } from "react";
import axios from "axios";

function App() {
  const [currentPage, setCurrentPage] = useState("home"); // Sayfa durumu
  const [orderData, setOrderData] = useState(null); // Sipariş bilgisi

  // Sayfa değişim fonksiyonu
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Sipariş formu verilerini gönder
  const handleOrderSubmit = (orderData) => {
    setOrderData(orderData);
    axios
      .post("https://reqres.in/api/pizza", orderData)
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          setCurrentPage("success");
        } // Sipariş başarıyla alındı sayfasına geçiş
      })
      .catch((error) => alert("Bir hata oluştu. Lütfen tekrar sipariş verin."));
  };

  return (
    <div>
      {currentPage === "home" && (
        <HomePage goToOrderPage={() => goToPage("order")} />
      )}
      {currentPage === "order" && <OrderPage onSubmit={handleOrderSubmit} />}
      {currentPage === "success" && <Success orderData={orderData} />}
    </div>
  );
}

export default App;
