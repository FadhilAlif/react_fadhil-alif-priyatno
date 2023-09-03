// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const table = document.getElementById("tableListProduct");
const tableBody = document.getElementById("tableBody");
const form = document.getElementById("form");

//Menambahkan Table kedalam baris
function addRowToTable(data) {
  const row = document.createElement("tr");

  // Looping data yang diterima dan buat td untuk masukin data
  for (const value of data) {
    const cell = document.createElement("td");
    cell.textContent = value;
    row.appendChild(cell);
  }

  // Tambahkan baris ke dalam tabelbody
  tableBody.appendChild(row);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Ambil value dari input
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const gender = document.querySelector(
    'input[name="flexRadioDefault"]:checked'
  ).value;
  const address = document.getElementById("address").value;
  const address2 = document.getElementById("address2").value;
  const nationality = document.getElementById("nationality").value;
  const language = document.querySelector(
    'input[name="checkboxLanguage"]:checked'
  ).value;

  // Masukkan data ke dalam array
  const rowData = [
    firstName,
    lastName,
    username,
    email,
    gender,
    address,
    address2,
    nationality,
    language,
  ];

  // Tambahkan baris ke dalam tabel
  addRowToTable(rowData);

  // Reset form
  form.reset();
  form.classList.remove("was-validated");
});

const btnDelete = document.getElementById("btn-delete");
btnDelete.addEventListener("click", function () {
  // Dapatkan semua baris dalam tabel
  const rows = tableBody.querySelectorAll("tr");

  // Hapus baris terakhir jika ada
  if (rows.length > 0) {
    tableBody.removeChild(rows[rows.length - 1]);
  }
});

// Tombol Search
const btnSearch = document.getElementById("btn-search");
btnSearch.addEventListener("click", function () {
  // Dapatkan input username dari pengguna
  const searchUsername = prompt("Masukkan username yang ingin dicari:");

  // Dapatkan semua baris dalam tabel
  const rows = tableBody.querySelectorAll("tr");

  let found = false;

  // Loop melalui setiap baris dan mencari username yang cocok
  rows.forEach((row) => {
    const usernameCell = row.querySelector("td:nth-child(3)"); // Kolom username berada di indeks ke-3

    if (usernameCell.textContent === searchUsername) {
      // Jika username cocok, tampilkan data dalam alert
      alert(`Data ditemukan : \n${row.textContent}`);
      found = true;
    }
  });

  if (!found) {
    alert("Data tidak ditemukan");
  }
});
