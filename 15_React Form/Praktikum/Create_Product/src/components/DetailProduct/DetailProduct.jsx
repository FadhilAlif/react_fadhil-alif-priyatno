import { useState } from "react";
import uuidNum from "react-uuid";
import Button from "../Button/Button";
import Input from "../Input/Input";

const DetailProduct = ({ setProductsTable }) => {
  const formData = {
    productId: uuidNum(),
    productName: "",
    productCategory: "",
    productImage: "",
    productFreshness: "",
    productDesc: "",
    productPrice: "",
  };

  const formErrors = {
    productName: "",
    productCategory: "",
    productImage: "",
    productFreshness: "",
    productDesc: "",
    productPrice: "",
  };

  const [data, setData] = useState(formData);
  const [errors, setErrors] = useState(formErrors);
  // const [setProductFreshness] = useState(formData);
  const error = {};

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("name " + name + " value " + value);
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "productName") {
      if (value.length >= 10) {
        alert("Product name must not exceed 10 characters");
        error.productName = "Product name must not exceed 10 characters";
      } else {
        error.productName = "";
      }
      setErrors(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.productName) {
      error.productName = "Please enter a valid product name";
    }
    if (!data.productCategory) {
      error.productCategory = "Product Category is required";
    }
    if (!data.productImage) {
      error.productImage = "Product Image is required";
    }
    if (!data.productDesc) {
      error.productDesc = "Product Description is required";
    }
    if (!data.productPrice) {
      error.productPrice = "Product Price is required";
    }

    setErrors(error);

    if (Object.keys(error).length === 0) {
      setProductsTable((prev) => [...prev, data]);
      setData((prev) => ({ ...prev, productId: uuidNum() }));
      alert("Form submitted succesfully");
      console.log(data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mt-5 w-50"
      id="productForm"
    >
      <h2 className="mt-4 mb-4">Detail Product</h2>
      <div className="mb-4 mt-4 w-50">
        <label className="form-label has-success" htmlFor="productName">
          Product Name
        </label>
        <Input
          type="text"
          name="productName"
          className={`form-control ${errors.productName ? "is-invalid" : ""}`}
          value={data.productName}
          onChange={handleInput}
        />
        <div id="nameError" className="text-danger">
          {errors.productName}
        </div>
      </div>
      <div className="mb-4 w-50">
        <label className="form-label" htmlFor="productCategory">
          Product Category
        </label>
        <select
          name="productCategory"
          value={data.productCategory}
          className={`form-select ${
            errors.productCategory ? "is-invalid" : ""
          }`}
          aria-label="Default select example"
          onChange={handleInput}
        >
          <option value="">Choose...</option>
          <option name="category" value="Sneakers">
            Sneakers
          </option>
          <option name="category" value="Clothes">
            Clothes
          </option>
          <option name="category" value="Hoodie">
            Hoodie
          </option>
        </select>
        <div id="categoryError" className="text-danger">
          {errors.productCategory}
        </div>
      </div>
      <div className="mb-4 w-50">
        <label className="form-label" htmlFor="productImage">
          Image of Product
        </label>
        <input
          className={`form-control ${
            errors.productCategory ? "is-invalid" : ""
          }`}
          name="productImage"
          value={data.productImage}
          type="file"
          onChange={handleInput}
        />
        <div id="imageError" className="text-danger">
          {errors.productImage}
        </div>
      </div>
      <div className="mb-4">
        <label className="form-label" htmlFor="productFreshness">
          Product Freshness
        </label>
        <div className="form-check">
          <input
            id="new"
            name="productFreshness"
            className="form-check-input"
            type="radio"
            defaultValue="Brand New"
            value="Brand New"
            checked={data.productFreshness === "Brand New"}
            onChange={handleInput}
          />
          <label className="form-check-label" htmlFor="new">
            Brand New
          </label>
        </div>
        <div className="form-check">
          <input
            id="second"
            name="productFreshness"
            className="form-check-input"
            type="radio"
            defaultValue="Second Hand"
            value="Second Hand"
            checked={data.productFreshness === "Second Hand"}
            onChange={handleInput}
          />
          <label className="form-check-label" htmlFor="second">
            Second Hand
          </label>
        </div>
        <div className="form-check">
          <input
            id="refurbished"
            name="productFreshness"
            className="form-check-input"
            type="radio"
            defaultValue="Refurbished"
            value="Refurbished"
            checked={data.productFreshness === "Refurbished"}
            onChange={handleInput}
          />
          <label className="form-check-label" htmlFor="refurbished">
            Refurbished
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="form-label" htmlFor="productDesc">
          Additional Description
        </label>
        <textarea
          rows={5}
          className={`form-control ${errors.productDesc ? "is-invalid" : ""}`}
          name="productDesc"
          value={data.productDesc}
          onChange={handleInput}
        />
        <div id="descError" className="text-danger">
          {errors.productDesc}
        </div>
      </div>
      <div className="mb-4 w-50">
        <label className="form-label" htmlFor="productPrice">
          Product Price
        </label>
        <input
          type="number"
          className={`form-control ${errors.productPrice ? "is-invalid" : ""}`}
          name="productPrice"
          value={data.productPrice}
          onChange={handleInput}
        />
        <div id="priceError" className="text-danger">
          {errors.productPrice}
        </div>
      </div>
      <Button
        type="submit"
        className="btn btn-primary w-100 mt-5"
        label="Submit"
      />
    </form>
  );
};

export default DetailProduct;
