const ListProduct = () => {
  return (
    <main className="row justify-content-center">
      <div className="col-md-10">
        <section className="mt-4">
          <h1 className="text-center fw-medium mb-2 text-center">
            List Product
          </h1>
          <table className="table mt-2">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Category</th>
                <th scope="col">Image of Product</th>
                <th scope="col">Product Freshness</th>
                <th scope="col">Additional Description</th>
                <th scope="col">Product Price</th>
              </tr>
            </thead>
            <tbody id="table-product" />
          </table>
        </section>
        <div>
          <div className="mb-2 d-md-flex row-cols-3">
            <input
              type="text"
              className="form-control"
              id="input-search"
              placeholder="Search..."
            />
          </div>
          <div className="d-flex justify-content-start gap-2 mb-4">
            <button type="button" className="btn btn-danger" id="btn-delete">
              Delete
            </button>
            <button type="button" className="btn btn-primary" id="btn-search">
              Search
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ListProduct;
