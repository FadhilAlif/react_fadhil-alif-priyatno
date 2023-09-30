import { useLocation, useParams } from "react-router-dom";

const DataProduct = () => {
  const { productId } = useParams();
  console.log(productId);
  const { state } = useLocation();
  console.log(state);
  const product = state;
  console.log(product);
  // const item = product.find((item) => item.productId === productId);

  return (
    <>
      <div className="text-center">
        <h2>Detail Product</h2>
        <h3>{productId}</h3>
        <h5> Product Name : {product.product.productName}</h5>
        <h5> Product Category : {product.product.productCategory}</h5>
        <h5> Product Image : {product.product.productImage}</h5>
        <h5> Product Freshness : {product.product.productFreshness}</h5>
        <h5> Product Description : {product.product.productDesc}</h5>
        <h5> Product Price : {product.product.productPrice}</h5>
      </div>
    </>
  );
};

export default DataProduct;
