import axios from "axios";

const baseURL = "https://651e432b44a3a8aa4767f0e1.mockapi.io";

// Fungsi untuk mengambil daftar produk
export const getProducts = () => {
  return axios({
    url: `${baseURL}/products`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
