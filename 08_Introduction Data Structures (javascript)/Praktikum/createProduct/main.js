document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const submitButton = document.querySelector('button[type="submit"]');
  const inputs = document.querySelectorAll("input, select, textarea");

  const productNameInput = document.getElementById("productName");
  const productCategorySelect = document.getElementById("productCategory");
  const imageProductInput = document.getElementById("imageOfProduct");
  const productFreshnessInputs = document.querySelectorAll(
    'input[name="flexRadioDefault"]'
  );
  const productDescriptionTextarea = document.getElementById("additionalDesc");
  const productPriceInput = document.getElementById("productPrices");

  const productListTable = document.querySelector(".table tbody");
  const searchInput = document.getElementById("btn-search");

  function updateSubmitButtonStatus() {
    // Validasi Data
    const productName = productNameInput.value.trim();
    const productCategory = productCategorySelect.value;
    const imageProduct = imageProductInput.value.trim();
    const productFreshness = Array.from(productFreshnessInputs).find(
      (input) => input.checked
    )?.value;
    const productDescription = productDescriptionTextarea.value.trim();
    const productPrice = productPriceInput.value.trim();

    // Validasi Field
    if (
      productName === "" ||
      productCategory === "" ||
      imageProduct === "" ||
      productFreshness === undefined ||
      productDescription === "" ||
      productPrice === ""
    ) {
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }

    // Validasi Panjang Char productName
    if (productName.length > 25) {
      alert("Product Name can't be 25 characters long");
      submitButton.disabled = true;
    }

    // Validasi Symbol dalam productName
    const forbiddenCharacters = /[@#{}]/;
    if (forbiddenCharacters.test(productName)) {
      alert("Product Name must not contain symbols '@#{}'.");
      submitButton.disabled = true;
    }
  }

  // Event listener untuk setiap input
  inputs.forEach((input) => {
    input.addEventListener("input", updateSubmitButtonStatus);
  });

  updateSubmitButtonStatus();

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Mengambil value dari setiap input
    const productName = productNameInput.value.trim();
    const productCategory = productCategorySelect.value;
    const imageProduct = imageProductInput.value.trim() || "Default Image";
    const productFreshness = Array.from(productFreshnessInputs).find(
      (input) => input.checked
    )?.value;
    const productDescription = productDescriptionTextarea.value.trim();
    const productPrice = productPriceInput.value.trim();

    // Menampilkan alert data yang telah diisi
    const inputMessage = `
      Product Name: ${productName}
      Product Category: ${productCategory}
      Image: ${imageProduct}
      Freshness: ${productFreshness}
      Description: ${productDescription}
      Price: ${productPrice}
    `;

    alert("Data Submitted:\n" + inputMessage);

    // Menambahkan Data ke Table
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
          <td>${productListTable.rows.length}</td>
          <td>${productNameInput.value.trim()}</td>
          <td>${productCategorySelect.value}</td>
          <td>${imageProductInput.value.trim() || "Default Image"}</td>
          <td>${
            Array.from(productFreshnessInputs).find((input) => input.checked)
              ?.value
          }</td>
          <td>${productDescriptionTextarea.value.trim()}</td>
          <td>${productPriceInput.value.trim()}</td>
      `;

    productListTable.appendChild(newRow);

    form.reset();
    submitButton.disabled = true; // Disabled tombol submit setelah form dikirim
  });
});
