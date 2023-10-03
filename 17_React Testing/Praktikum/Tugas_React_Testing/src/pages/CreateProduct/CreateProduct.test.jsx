import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import CreateProduct from "./CreateProduct";

describe("CreateProduct", () => {
  it("Test Product Name Input", () => {
    // Render Ke Create Product
    render(
      <BrowserRouter>
        <CreateProduct setProductsTable={() => {}} />
      </BrowserRouter>
    );

    // Get Input By Label "Product Name"
    const productNameInput = screen.getByLabelText("Product Name");

    // Get Button By Text "Submit"
    const submitButton = screen.getByText("Submit");

    // Mengirimkan Input Nama Produk "Test"
    fireEvent.change(productNameInput, { target: { value: "Test" } });
    // Menekan Button Submit
    fireEvent.click(submitButton);

    // Expect Product Name Value Muncul "Test"
    expect(productNameInput).toHaveValue("Test");
  });

  it("Test Product Name Validation Characters Long and Regex", () => {
    render(
      <BrowserRouter>
        <CreateProduct setProductsTable={() => {}} />
      </BrowserRouter>
    );

    const productNameInput = screen.getByLabelText("Product Name");
    const submitButton = screen.getByText("Submit");

    // Mengirimkan Input Product Name Kosongan
    fireEvent.change(productNameInput, { target: { value: "" } });
    fireEvent.click(submitButton);

    // Memastikan Pesan Validasi Muncul
    expect(
      screen.getByText("Please enter a valid product name")
    ).toBeInTheDocument();

    // Mengirimkan Input Product Name Yang Tidak Valid
    fireEvent.change(productNameInput, {
      target: { value: "@Test#ProductErrorPastinya]" },
    });
    fireEvent.click(submitButton);

    // Memastikan Pesan Validasi dari Product Name Muncul
    expect(
      screen.getByText(
        "Product name must be alphanumeric, 1-10 characters long, and cannot contain special characters"
      )
    ).toBeInTheDocument();

    // Mengirimkan Input Product Name Yang Valid
    fireEvent.change(productNameInput, { target: { value: "Test" } });
    fireEvent.click(submitButton);

    // Memastikan Pesan Validasi Tidak Muncul
    expect(
      screen.queryByText("Please enter a valid product name")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        "Product name must be alphanumeric, 1-10 characters long, and cannot contain special characters"
      )
    ).not.toBeInTheDocument();
  });

  it("Test Product Category Input", () => {
    render(
      <BrowserRouter>
        <CreateProduct setProductsTable={() => {}} />
      </BrowserRouter>
    );

    const productCategorySelect = screen.getByLabelText("Product Category");
    const submitButton = screen.getByText("Submit");

    fireEvent.change(productCategorySelect, { target: { value: "Sneakers" } });
    fireEvent.click(submitButton);

    expect(screen.getByText("Sneakers")).toBeInTheDocument();
  });

  it("Test Product Image Input", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <CreateProduct setProductsTable={() => {}} />
      </BrowserRouter>
    );
    const Image = getByLabelText("Image of Product");

    const file = new File(["image"], "image.png", {
      type: "image/png",
    });
    fireEvent.change(Image, { target: { files: [file] } });

    expect(Image.files[0]).toBe(file);
  });

  it("Test Product Freshness Input", () => {
    render(
      <BrowserRouter>
        <CreateProduct setProductsTable={() => {}} />
      </BrowserRouter>
    );

    const brandNewRadio = screen.getByLabelText("Brand New");
    const submitButton = screen.getByText("Submit");

    fireEvent.click(brandNewRadio);
    fireEvent.click(submitButton);

    expect(screen.getByText("Brand New")).toBeInTheDocument();
  });

  it("Test Additional Description Input", () => {
    render(
      <BrowserRouter>
        <CreateProduct setProductsTable={() => {}} />
      </BrowserRouter>
    );

    const descriptionInput = screen.getByLabelText("Additional Description");
    const submitButton = screen.getByText("Submit");

    fireEvent.change(descriptionInput, {
      target: { value: "Test Product Description" },
    });
    fireEvent.click(submitButton);

    expect(screen.getByText("Test Product Description")).toBeInTheDocument();
  });

  it("Test Product Price Input", () => {
    render(
      <BrowserRouter>
        <CreateProduct setProductsTable={() => {}} />
      </BrowserRouter>
    );

    const priceInput = screen.getByLabelText("Product Price");
    const submitButton = screen.getByText("Submit");

    fireEvent.change(priceInput, { target: { value: 50 } });
    fireEvent.click(submitButton);

    expect(priceInput).toHaveValue(50);
  });
});
