import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../../components/Navbar/Navbar";
import Title from "../../components/Title/Title";
import DetailProduct from "../../components/DetailProduct/DetailProduct";
import RandomNumber from "../../components/RandomNumber/RandomNumber";
import ListProduct from "../../components/ListProduct/ListProduct";

function CreateProduct({ setData }) {
  // useEffect(() => {
  //   alert("Welcome to Create Product");
  // }, []);

  const [productsTableData, setProductsTableData] = useState([]);
  useEffect(() => {
    setData(productsTableData);
  }, [productsTableData]);

  return (
    <div>
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

export default CreateProduct;
