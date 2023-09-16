const Navbar = document.querySelector(".navbar");
const form = document.getElementById("form");

window.addEventListener("scroll", () => {
  const windowPosition = window.scrollY > 0;
  Navbar.classList.toggle("scroll-active", windowPosition);
});

formContact.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  alert(`
        Firstname : ${firstName}
        Lastname : ${lastName}
        Email : ${email}
        Pertanyaan : ${message}
    `);
  form.reset();
});
