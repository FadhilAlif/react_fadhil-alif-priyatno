import Logo from "../../assets/bootstrap-logo.png";
import "./DetailProduct.css";

const DetailProduct = () => {
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
          <h1 className="text-center pt-2">Create Product</h1>
          <p className="text-center lead pt-1">
            Below is an example form built entirely with Bootstrap’s form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
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
                className="form-control"
                name="product-name"
                maxLength={25}
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
                <option value="" selected="">
                  Choose...
                </option>
                <option value="Sneakers">Sneakers</option>
                <option value="Clothes">Clothes</option>
                <option value="Bag">Bag</option>
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
                  type="file"
                  className="form-control form input-forms"
                  name="product-image"
                  accept="image/*"
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
                  required=""
                />
                <label htmlFor="brand-new">Brand New</label>
              </div>
              <div className="form-check form-check-flex">
                <input
                  className="form-check-input"
                  type="radio"
                  name="product-freshness"
                  required=""
                />
                <label htmlFor="second-hank">Second Hand</label>
              </div>
              <div className="form-check form-check-flex">
                <input
                  className="form-check-input"
                  type="radio"
                  name="product-freshness"
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
                  style={{ height: "8rem" }}
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
                className="form-control"
                name="product-price"
                placeholder="$ 100"
                min={1}
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
