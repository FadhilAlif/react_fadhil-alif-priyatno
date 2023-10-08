import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../redux/slice/productslice";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import EditProduct from "../../pages/EditProduct/editProduct";
import { deleteProductData, getProducts, updateProductData } from "../../api";

const ListProduct = ({
  productsTable,
  setProductsTable,
  setIsEdit,
  setEditProduct,
}) => {
  console.log("isi ptd", productsTable);
  const navigate = useNavigate();
  const [updateProduct, setUpdatedProduct] = useState([]);
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  // const [isEdit] = useState(false);
  // const data = useSelector((state) => state.products);

  const handleEdit = (product) => {
    // Tambah updateProductData using API
    // updateProductData(id)
    //   .then((response) => {
    //     console.log("update api data sucsess =>", response.data);
    //     setUpdatedProduct(response.products); // Simpan data produk yang telah diupdate ke dalam state
    //   })
    //   .catch((error) => {
    //     console.error("Error updating product:", error);
    //   });
    setEditProduct(product);
    console.log("edit product nih :", product);
    setIsEdit(true);
    // navigate(`/EditProduct/${product.id}`);
  };

  const fetchProducts = () => {
    getProducts()
      .then((response) => {
        setProductsTable(response.data);
        console.log("update api data sucsess =>", response.data);
      })
      .catch((error) => {
        console.log("update api data error =>", error);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      // const filteredTable = productsTable.filter((product) => product.id != id);
      // setProductsTable([...filteredTable]);
      deleteProductData(id)
        .then((respone) => {
          console.log("product deleted =>", respone.data);
          fetchProducts();
        })
        .catch((error) => {
          console.log("Error delete product =>", error);
        });
      dispatch(deleteProduct(id));
    }
  };

  const handleClickDetail = (id, product) => {
    navigate(`/DataProduct/${id}`, { state: product });
  };

  useEffect(() => {
    getProducts()
      // Menampilkan Data langsung ke table
      .then((response) => {
        setProductsTable(response.data);
        console.log("Data dari api masuk bos =>", response.data);
      })
      .catch((error) => {
        console.log("Data dari api ga masuk =>", error);
      });
  }, []);

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
              {productsTable?.length > 0 &&
                productsTable.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
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
                        {/* Button Edit */}
                        <Button
                          className="btn btn-secondary"
                          label="Edit"
                          onClick={() => handleEdit(product)}
                        />
                        {/* Button Delete */}
                        <Button
                          onClick={() => handleDelete(product.id)}
                          className="btn btn-danger"
                          label="Delete"
                        />
                        {/* Button Detail */}
                        <Button
                          className="btn btn-info text-white"
                          label="Detail"
                          onClick={() =>
                            handleClickDetail(`${product.id}`, product)
                          }
                        />
                      </div>
                      {editProductId && (
                        <EditProduct productId={editProductId} />
                      )}
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
