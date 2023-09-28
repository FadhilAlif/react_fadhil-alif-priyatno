import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import DetailProduct from "./components/DetailProduct/DetailProduct";
import ListProduct from "./components/ListProduct/ListProduct";
import RandomNumber from "./components/RandomNumber/RandomNumber";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [productsTableData, setProductsTableData] = useState([]);

  useEffect(() => {
    alert("Welcome to Create Product");
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Title />
      <DetailProduct setProductsTable={setProductsTableData} />
      <RandomNumber />
      <ListProduct
        productsTable={productsTableData}
        setProductsTable={setProductsTableData}
      />
    </div>
  );
}

export default App;
