import Logo from "../../assets/bootstrap-logo.png";

const DetailProduct = ({
  randomNumber,
  handleSubmit,
  article,
  bahasa,
  gantiBahasa,
  handleProductName,
  productName,
  handleProductImage,
  productImage,
  handleProductPrice,
  productPrice,
}) => {
  return (
    <main className="main row justify-content-center">
      <div className="col-md-8">
        {/* Title */}
        <section
          id="title"
          className="pt-4 d-flex flex-column justify-content-center align-items-center"
        >
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Logo Bootstrap" />
          </a>
          <h1 className="text-center pt-2">
            {bahasa ? article.title.id : article.title.en}
          </h1>
          <p className="text-center lead pt-1">
            {bahasa ? article.description.id : article.description.en}
          </p>
          <button className="btn btn-primary" onClick={gantiBahasa}>
            {bahasa ? "Ganti Bahasa" : "Change Language"}
          </button>
        </section>
      </div>
      {/* Detail Product */}
      <div className="col-md-6">
        <section id="detail-product" className="container pt-4 pb-4">
          <h3 className="mt-5 mb-4">Detail Product</h3>
          <form id="forms" className="needs-validation" noValidate="">
            {/* Product Name */}
            <div className="group-form mb-4">
              <label htmlFor="product-name" className="form-label">
                Product name :
              </label>
              <input
                id="product-name"
                type="text"
                className={
                  productName ? "form-control" : "form-control is-invalid"
                }
                value={productName}
                onChange={handleProductName}
                required=""
              />
              <div className="invalid-feedback">Field must be filled in</div>
            </div>
            {/* Product Category */}
            <div className="group-form mb-4 col-md-6">
              <label htmlFor="product-category" className="form-label">
                Product Category :
              </label>
              <select
                id="product-category"
                name="product-category"
                className="form-select"
                required=""
              >
                <option value="">Choose...</option>
                <option value={1}>Sneakers</option>
                <option value={2}>Clothes</option>
                <option value={3}>Bag</option>
              </select>
              <div className="invalid-feedback">Field must be filled in</div>
            </div>
            {/* Product Image */}
            <div className="group-form mb-4 col-md-6">
              <div className="d-flex flex-column">
                <label htmlFor="product-image" className="form-label">
                  Image of Products
                </label>
                <input
                  id="product-image"
                  className={
                    productImage ? "form-control" : "form-control is-invalid"
                  }
                  type="file"
                  value={productImage}
                  onChange={handleProductImage}
                  required=""
                />
                <div className="invalid-feedback">Field must be filled in</div>
              </div>
            </div>
            {/* Product Freshness */}
            <div className="group-form mb-4">
              <label className="form-label">Product Freshness :</label>
              <div className="form-check form-check-flex">
                <input
                  className="form-check-input"
                  type="radio"
                  name="product-freshness"
                  defaultValue="Brand New"
                  required=""
                />
                <label htmlFor="brand-new">Brand New</label>
              </div>
              <div className="form-check form-check-flex">
                <input
                  className="form-check-input"
                  type="radio"
                  name="product-freshness"
                  defaultValue="Second Hand"
                  required=""
                />
                <label htmlFor="second-hank">Second Hand</label>
              </div>
              <div className="form-check form-check-flex">
                <input
                  className="form-check-input"
                  type="radio"
                  name="product-freshness"
                  defaultValue="Refurbished"
                  required=""
                />
                <label htmlFor="refurbished">Refurbished</label>
                <div className="invalid-feedback">Field must be filled in</div>
              </div>
            </div>
            {/* Product Description */}
            <div className="group-form mb-4">
              <div className="d-flex flex-column">
                <label htmlFor="product-description" className="form-label">
                  Aditional Description
                </label>
                <textarea
                  id="product-description"
                  name="product-description"
                  className="form-control"
                  rows={5}
                  required=""
                  defaultValue={""}
                />
                <div className="invalid-feedback">Field must be filled in</div>
              </div>
            </div>
            {/* Product Price */}
            <div className="group-form mb-4">
              <label htmlFor="product-price" className="form-label">
                Product Price :{" "}
              </label>
              <br />
              <input
                id="product-price"
                type="number"
                className={
                  productPrice ? "form-control" : "form-control is-invalid"
                }
                name="product-price"
                placeholder="$ 1"
                value={productPrice}
                onChange={handleProductPrice}
                required=""
              />
              <div className="invalid-feedback">Field must be filled in</div>
            </div>
            {/* Button Submit */}
            <div
              className="group-form d-grid mb-4"
              style={{ paddingTop: "4rem" }}
            >
              <button
                id="btn-submit"
                type="submit"
                className="btn btn-primary"
                disabled=""
                onClick={randomNumber}
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default DetailProduct;
