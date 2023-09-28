import Button from "../Button/Button";

const ListProduct = ({ productsTable, setProductsTable }) => {
  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      const filteredTable = productsTable.filter(
        (product) => product.productId != id
      );
      setProductsTable([...filteredTable]);
    }
  };

  return (
    <main className="row justify-content-center">
      <div className="col-md-10">
        <section className="mt-4">
          <h1 className="text-center fw-medium mb-2 text-center">
            List Product
          </h1>
          <table className="table table-responsive table-primary table-bordered border-dark table-hover text-center mt-2">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Category</th>
                <th scope="col">Product Freshness</th>
                <th scope="col">Product Price</th>
                <th scope="col" colSpan={2}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {productsTable.map((product) => (
                <tr key={product.id}>
                  <td>{product.productId}</td>
                  <td>{product.productName}</td>
                  <td>{product.productCategory}</td>
                  <td>{product.productFreshness}</td>
                  <td>{product.productPrice}</td>
                  <td>
                    <div className="d-grid gap-2 d-md-flex justify-content-center">
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
