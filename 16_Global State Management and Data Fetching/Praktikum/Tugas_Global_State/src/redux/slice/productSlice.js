import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product", // untuk penamaan slice
  initialState: {
    products: [
      {
        id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
        productName: "John",
        productCategory: "Doe",
        productImage: "Doe",
        productFreshness: "Doe",
        productDesc: "Doe",
        productPrice: "Doe",
      },
    ],
  },
  reducers: {
    // addProduct(state, action) {
    //   // fungsi menambahkan data article ke store
    //   console.log("state add product", state);
    //   console.log("action add product", action);
    //   const { payload } = action;
    //   const product = {
    //     id: payload.id,
    //     productName: payload.productName,
    //     productCategory: payload.productCategory,
    //     productImage: payload.productImage,
    //     productFreshness: payload.productFreshness,
    //     productDesc: payload.productDesc,
    //     productPrice: payload.productPrice,
    //   };
    //   // push data ke state
    //   // state.push(article)

    //   // melakukan penyalinan data lama dengan data baru
    //   // return [...state.products, product];
    //   state.products.push(product);
    // },
    addProduct(state, action) {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    },
    deleteProduct(state, action) {
      // fungsi menghapus data article dari store
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    editProduct: (state, action) => {
      const { id, ...updatedProduct } = action.payload;
      const productIndex = state.products.findIndex((p) => p.id === id);
      if (productIndex !== -1) {
        state.products[productIndex] = { id, ...updatedProduct };
      }
    },
  },
});

// export action untuk dispatch
export const { addProduct, deleteProduct, editProduct } = productSlice.actions;

// export reducer untuk configure store
export default productSlice.reducer;
