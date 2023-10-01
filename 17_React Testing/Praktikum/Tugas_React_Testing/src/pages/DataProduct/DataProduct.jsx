import { useLocation } from "react-router-dom";

const DataProduct = () => {
  // const { productId } = useLocation();
  // console.log(productId);
  const { state } = useLocation();
  console.log(state);
  const product = state;
  console.log(product);
  // const item = product.find((item) => item.productId === productId);

  return (
    <>
      <div className="container">
        <h2>Detail Product</h2>
        <h3>{product.productId}</h3>
        <h5> Product Name : {product.productName}</h5>
        <h5> Product Category : {product.productCategory}</h5>
        <h5>
          Product Image :
          <img src={product.productImage} style={{ width: "100px" }}></img>
        </h5>
        <h5> Product Freshness : {product.productFreshness}</h5>
        <h5> Product Description : {product.productDesc}</h5>
        <h5> Product Price : {product.productPrice}</h5>
      </div>
    </>
  );
};

export default DataProduct;
