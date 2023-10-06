import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "../../redux/slice/productSlice";

const EditProduct = ({ productId }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === productId)
  );

  const [editedProduct, setEditedProduct] = useState({
    productName: product.productName,
    productCategory: product.productCategory,
    productImage: product.productImage,
    productFreshness: product.productFreshness,
    productDesc: product.productDesc,
    productPrice: product.productPrice,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };

  const handleEditProduct = () => {
    dispatch(editProduct({ id: productId, ...editedProduct }));
    // Tutup modal setelah penyuntingan
    closeModal();
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    const modal = document.querySelector(".modal");
    modal.classList.remove("show");
    modal.style.display = "none";
  };

  // Fungsi untuk membuka modal
  const openModal = () => {
    const modal = document.querySelector(".modal");
    modal.classList.add("show");
    modal.style.display = "block";
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-warning mt-2 "
        onClick={openModal}
        data-bs-toggle="modal"
        data-bs-target="#editProductModal"
      >
        <b>Open Form Edit</b>
      </button>
      <div className="modal" tabIndex={-1} id="editProductModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Edit Product</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              />
            </div>
            <div className="modal-body">
              <form>
                <>
                  <label htmlFor="edit-name" className="form-label">
                    Product Name
                  </label>
                  <div className="input-group mb-4">
                    <input
                      type="text"
                      className="form-control"
                      name="productName"
                      value={editedProduct.productName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <label htmlFor="productCategory" className="form-label">
                    Product Category
                  </label>
                  <div className="input-group mb-4">
                    <select
                      name="productCategory"
                      className="form-select"
                      value={editedProduct.productCategory}
                      onChange={handleInputChange}
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
                  </div>
                  <label htmlFor="edit-desc" className="form-label">
                    Product Description
                  </label>
                  <div className="input-group mb-4">
                    <textarea
                      className="form-control"
                      name="productDesc"
                      value={editedProduct.productDesc}
                      onChange={handleInputChange}
                    />
                  </div>
                  <label htmlFor="edit-price" className="form-label">
                    Product Price
                  </label>
                  <div className="input-group mb-4">
                    <span className="input-group-text">$</span>
                    <input
                      type="number"
                      className="form-control"
                      name="productPrice"
                      value={editedProduct.productPrice}
                      onChange={handleInputChange}
                    />
                  </div>
                </>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleEditProduct}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
