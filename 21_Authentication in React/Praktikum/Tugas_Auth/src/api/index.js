import axios from "axios";

const baseURL = "https://651e432b44a3a8aa4767f0e1.mockapi.io";

// Fungsi untuk mengambil daftar produk
export const getProducts = () => {
  return axios.get(`${baseURL}/products`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const addProductData = (data) => {
  return axios.post(`${baseURL}/products`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateProductData = (data) => {
  return axios.put(`${baseURL}/products/${data.id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteProductData = (id) => {
  return axios.delete(`${baseURL}/products/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
