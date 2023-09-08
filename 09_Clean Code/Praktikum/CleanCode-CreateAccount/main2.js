(() => {
  "use strict";

  // Form Validation
  const forms = document.querySelectorAll(".needs-validation");
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      // Memastikan bahwa validasi form berfungsi dengan baik
      if (!form.checkValidity()) {
        event.preventDefault(); // Mencegah pengiriman form jika tidak valid
        event.stopPropagation();
      }
      form.classList.add("was-validated"); // Menandai form sebagai sudah divalidasi
    });
  });

  // Table Handling
  const tableBody = document.getElementById("tableBody");
  const form = document.getElementById("form");
  let rowNum = 1; // Nomor urut awal

  // Fungsi untuk menambahkan baris ke tabel
  function addRowToTable(data) {
    const row = document.createElement("tr");

    // Tambahkan nomor urut
    const numberCell = document.createElement("td");
    numberCell.textContent = rowNum++;
    row.appendChild(numberCell);

    // Tambahkan data dari form ke dalam baris
    data.forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    tableBody.appendChild(row);
  }

  // Event listener untuk pengiriman form
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Mencegah pengiriman form secara default
    try {
      const formData = {
        firstName: validateInput("firstName"),
        lastName: validateInput("lastName"),
        username: validateInput("username"),
        email: validateInput("email"),
        gender: validateRadioInput("flexRadioDefault"),
        address: validateInput("address"),
        address2: document.getElementById("address2").value,
        nationality: validateInput("nationality"),
        language: validateCheckboxInput("checkboxLanguage"),
      };
      addRowToTable(Object.values(formData)); // Menambahkan data ke tabel
      form.reset(); // Reset form agar kosong kembali
      form.classList.remove("was-validated"); // Menghapus tanda validasi
    } catch (error) {
      alert("Terjadi kesalahan: " + error.message);
    }
  });

  // Fungsi untuk validasi input teks
  function validateInput(inputId) {
    const input = document.getElementById(inputId);
    if (input.checkValidity()) {
      return input.value;
    } else {
      throw new Error("Harap isi semua field dengan benar.");
    }
  }

  // Fungsi untuk validasi input radio
  function validateRadioInput(inputName) {
    const selectedRadio = document.querySelector(
      `input[name="${inputName}"]:checked`
    );
    if (selectedRadio) {
      return selectedRadio.value;
    } else {
      throw new Error("Pilih salah satu opsi.");
    }
  }

  // Fungsi untuk validasi input checkbox
  function validateCheckboxInput(inputName) {
    const checkedCheckboxes = document.querySelectorAll(
      `input[name="${inputName}"]:checked`
    );
    if (checkedCheckboxes.length > 0) {
      return Array.from(checkedCheckboxes)
        .map((checkbox) => checkbox.value)
        .join(", ");
    } else {
      throw new Error("Pilih setidaknya satu bahasa.");
    }
  }

  // Delete Button
  const btnDelete = document.getElementById("btn-delete");
  btnDelete.addEventListener("click", () => {
    const rows = tableBody.querySelectorAll("tr");
    if (rows.length > 0) {
      tableBody.removeChild(rows[rows.length - 1]); // Menghapus baris terakhir
      rowNum--; // Mengurangi nomor urut saat menghapus baris
    }
  });

  // Search Button
  const btnSearch = document.getElementById("btn-search");
  btnSearch.addEventListener("click", () => {
    const searchUsername = prompt("Search by Username:");
    if (searchUsername !== null) {
      const rows = tableBody.querySelectorAll("tr");
      let found = false;
      rows.forEach((row) => {
        const usernameCell = row.querySelector("td:nth-child(3)");
        if (usernameCell.textContent === searchUsername) {
          alert(`Data Found:\n${row.textContent}`);
          found = true;
        }
      });
      if (!found) {
        alert("Data Not Found");
      }
    }
  });
})();
