import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../../components/Navbar/Navbar";
import Title from "../../components/Title/Title";
import DetailProduct from "../../components/DetailProduct/DetailProduct";
import RandomNumber from "../../components/RandomNumber/RandomNumber";
import ListProduct from "../../components/ListProduct/ListProduct";
import EditProduct from "../EditProduct/editProduct";

function CreateProduct({ setData }) {
  // useEffect(() => {
  //   alert("Welcome to Create Product");
  // }, []);

  const [isEdit, setIsEditTable] = useState(false);

  const [productsTableData, setProductsTableData] = useState([]);
  const [editProduct, setEditProductData] = useState({});
  console.log("Isi productsTable data : ", productsTableData);
  console.log("Isi editProduct data : ", editProduct);
  useEffect(() => {
    setData(productsTableData);
  }, [productsTableData]);

  return (
    <div>
      <Navbar />
      <Title />
      <DetailProduct setProductsTable={setProductsTableData} />
      <RandomNumber />
      {isEdit ? 
        <EditProduct product={editProduct} />
       : 
        <ListProduct
          setEditProduct={setEditProductData}
          setIsEdit={setIsEditTable}
          productsTable={productsTableData}
          setProductsTable={setProductsTableData}
        />
      }
      {/* <ListProduct
        setIsEdit={setIsEditTable}
        productsTable={productsTableData}
        setProductsTable={setProductsTableData}
      /> */}
    </div>
  );
}

export default CreateProduct;
