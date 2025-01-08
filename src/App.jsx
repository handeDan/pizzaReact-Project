import "bootstrap/dist/css/bootstrap.min.css";
import OrderPage from "./pages/OrderPage";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import axios from "axios";
import SuccessPage from "./pages/SuccessPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          toast.success("Siparişiniz başarıyla alındı!");
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
      {currentPage === "success" && <SuccessPage orderData={orderData} />}
      <ToastContainer />
    </div>
  );
}

export default App;
