import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import DetailProduct from "./components/Detail Product/DetailProduct";
import ListProduct from "./components/List Product/ListProduct";
import article from "./Article";
import "./App.css";

function App() {
  const [indonesian, setIsIndonesian] = useState(false);
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState();
  const [productPrice, setProductPrice] = useState();
  
  const handleRandomNumber = (e) => {
    e.preventDefault();
    console.log(Math.floor(Math.random() * 100));
  };

  const handleBahasa = () => setIsIndonesian(!indonesian);
  const handleProductName = (e) => {
    if (e.target.value.length >= 10) {
      alert("Product name tidak boleh lebih dari 10 karakter");
      e.target.value = "";
    }
    setProductName(e.target.value);
  };
  const handleProductImage = (e) => setProductImage(e.target.value);
  const handleProductPrice = (e) => setProductPrice(e.target.value);
  return (
    <div>
      <Navbar />
      <DetailProduct
        randomNumber={handleRandomNumber}
        article={article}
        bahasa={indonesian}
        gantiBahasa={handleBahasa}
        handleProductName={handleProductName}
        productName={productName}
        handleProductImage={handleProductImage}
        productImage={productImage}
        handleProductPrice={handleProductPrice}
        productPrice={productPrice}
      />
      <ListProduct />
    </div>
  );
}

export default App;
