import { useSelector } from "react-redux";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const ListProduct = ({ productsTable, setProductsTable }) => {
  const navigate = useNavigate();

  const data = useSelector((state) => state.products);
  console.log(data);
  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      const filteredTable = productsTable.filter(
        (product) => product.id != id
      );
      setProductsTable([...filteredTable]);
    }
  };

  const handleClickDetail = (id, product) => {
    navigate(`/DataProduct/${id}`, { state: product });
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
                <th scope="col">Product Description</th>
                <th scope="col">Product Price</th>
                <th scope="col" colSpan={2}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.products.length > 0 &&
                data.products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <a
                        onClick={() =>
                          handleClickDetail(`${product.id}`, product)
                        }
                      >
                        {product.id}
                      </a>
                    </td>
                    <td>{product.productName}</td>
                    <td>{product.productCategory}</td>
                    <td>
                      <img
                        src={product.productImage}
                        style={{ width: "100px" }}
                      ></img>
                    </td>
                    <td>{product.productFreshness}</td>
                    <td>{product.productDesc}</td>
                    <td>{product.productPrice}</td>
                    <td>
                      <div className="d-grid gap-2 d-md-flex">
                        <Button className="btn btn-secondary" label="Edit" />

                        {/* Button Delete */}
                        <Button
                          onClick={() => handleDelete(product.id)}
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
