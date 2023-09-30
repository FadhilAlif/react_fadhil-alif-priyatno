import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const ListProduct = ({ productsTable, setProductsTable }) => {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      const filteredTable = productsTable.filter(
        (product) => product.productId != id
      );
      setProductsTable([...filteredTable]);
    }
  };

  const handleClickDetail = (productId, product) => {
    navigate(`/DataProduct/${productId}`, { state: { product } });
  };

  return (
    <main className="row justify-content-center">
      <div className="col-md-10">
        <section className="mt-4">
          <h1 className="text-center fw-medium mb-2 text-center">
            List Product
          </h1>
          <table className="table table-primary table-bordered table-hover mt-2">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Category</th>
                <th scope="col">Product Image</th>
                <th scope="col">Product Freshness</th>
                <th scope="col">Product Price</th>
                <th scope="col" colSpan={2}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {productsTable.map((product) => (
                <tr key={product.productId}>
                  <td>
                    <a
                      onClick={() =>
                        handleClickDetail(`${product.productId}`, product)
                      }
                    >
                      {product.productId}
                    </a>
                  </td>
                  <td>{product.productName}</td>
                  <td>
                    <img
                      src={product.productImage}
                      style={{ maxWidth: "200px", marginLeft: "20px" }}
                    ></img>
                  </td> 
                  <td>{product.productCategory}</td>
                  <td>{product.productFreshness}</td>
                  <td>{product.productPrice}</td>
                  <td>
                    <div className="d-grid gap-2 d-md-flex">
                      <Button className="btn btn-secondary" label="Edit" />
                      <Button
                        onClick={() => handleDelete(product.productId)}
                        className="btn btn-danger"
                        label="Delete"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
};

export default ListProduct;
