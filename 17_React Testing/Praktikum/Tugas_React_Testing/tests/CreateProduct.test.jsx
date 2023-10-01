import { render, screen, fireEvent } from "@testing-library/react";
import CreateProduct from "../src/pages/CreateProduct/CreateProduct";

describe("CreateProduct", () => {
  it("renders headline", () => {
    render(<CreateProduct />);

    // Temukan input dengan atribut name="productName"
    const productNameInput = screen.getByLabelText("Product Name");

    // Simulasikan input teks
    fireEvent.change(productNameInput, {
      target: { value: "Nama Produk Test" },
    });

    // Periksa apakah nilai input telah diubah
    expect(productNameInput.value).toBe("Nama Produk Test");
  });
});
