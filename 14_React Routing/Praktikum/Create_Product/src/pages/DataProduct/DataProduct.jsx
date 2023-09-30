import { useLocation, useParams } from "react-router-dom";

const DataProduct = () => {
  const { productId } = useParams();
  const { state } = useLocation();
  const product = state;
  // const item = product.find((item) => item.productId === productId);

  return (
    <>
      <div className="container">
        <h2>Detail Product</h2>
        <h3>{productId}</h3>
        <h5> Product Name : {product.product.productName}</h5>
        <h5> Product Category : {product.product.productCategory}</h5>
        <h5>
          Product Image :
          <img
            src={product.product.productImage}
            style={{ maxWidth: "200px", marginLeft: "20px" }}
          ></img>
        </h5>
        <h5> Product Freshness : {product.product.productFreshness}</h5>
        <h5> Product Description : {product.product.productDesc}</h5>
        <h5> Product Price : {product.product.productPrice}</h5>
      </div>
    </>
  );
};

export default DataProduct;
