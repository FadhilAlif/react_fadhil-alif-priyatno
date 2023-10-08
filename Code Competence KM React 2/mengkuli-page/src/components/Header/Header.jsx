import { useEffect } from "react";
import "./Header.css";

const Header = () => {
  useEffect(() => {
    const Navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
      const windowPosition = window.scrollY > 0;
      Navbar.classList.toggle("scroll-active", windowPosition);
    });
  }, []);

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        {/* Navbar */}
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-dark"
          id="navbar"
        >
          <div className="container">
            <a className="navbar-brand fw-bold fs-4 text-warning" href="#">
              Tukangin<span className="text-white">.</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Tentang Kami
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Proyek
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Layanan
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
