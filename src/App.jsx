import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OrderPage from "./components/OrderPage";
import HomePage from "./components/HomePage";
import Success from "./components/Success";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home"); // Sayfa durumu
  const [order, setOrder] = useState(null); // Sipariş bilgisi

  // Sayfa değişim fonksiyonu
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Sipariş formu verilerini gönder
  const handleOrderSubmit = (orderData) => {
    setOrder(orderData);
    setCurrentPage("success"); // Sipariş başarıyla alındı sayfasına geçiş
  };

  return (
    <div>
      {currentPage === "home" && (
        <HomePage goToOrderPage={() => goToPage("order")} />
      )}
      {currentPage === "order" && <OrderPage onSubmit={handleOrderSubmit} />}
      {currentPage === "success" && <Success order={order} />}
    </div>
  );
}

export default App;
