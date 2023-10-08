import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer id="footer-top" className="container mt-5">
        <div className="row">
          <div className="col-lg d-flex flex-column mt-4">
            <div className="wrapper-col-1">
              <h1 className="fw-bolder text-warning">
                Tukangin<span className="text-white">.</span>
              </h1>
              <p className="fst-italic text-white">
                Bangun Impian, Satu Lapisan demi Satu Lapisan
              </p>
            </div>
            <div className="wrapper-icon">
              <a
                href="https://www.instagram.com/fdhlalf_/"
                alt="instagram-icon"
                className="text-warning fs-3 me-3"
              >
                <i className="bi bi-instagram" />
              </a>
              <a
                href="https://github.com/FadhilAlif"
                alt="github-icon"
                className="text-warning fs-3 me-3"
              >
                <i className="bi bi-github" />
              </a>
              <a
                href="https://t.me/fadhil_alif"
                alt="telegram-icon"
                className="text-warning fs-3 me-3"
              >
                <i className="bi bi-telegram" />
              </a>
            </div>
          </div>
          <div className="col col-md-3 d-flex flex-column mt-4">
            <h4 className="fw-bold text-white">Ini Tukangin</h4>
            <a
              href=""
              className="text-warning opacity-75 mt-3 text-decoration-none"
            >
              Tentang Kami
            </a>
            <a
              href=""
              className="text-warning opacity-75 mt-2 text-decoration-none"
            >
              Berita
            </a>
            <a
              href=""
              className="text-warning opacity-75 mt-2 text-decoration-none"
            >
              Blog
            </a>
            <a
              href=""
              className="text-warning opacity-75 mt-2 text-decoration-none"
            >
              Karir
            </a>
          </div>
          <div className="col col-md-3 d-flex flex-column mt-4">
            <h4 className="fw-bold text-white">Layanan</h4>
            <a
              href=""
              className="text-warning opacity-75 mt-3 text-decoration-none"
            >
              Konsumen
            </a>
            <a
              href=""
              className="text-warning opacity-75 mt-2 text-decoration-none"
            >
              Perusahaan
            </a>
            <a
              href=""
              className="text-warning opacity-75 mt-2 text-decoration-none"
            >
              Tukang Kami
            </a>
            <a
              href=""
              className="text-warning opacity-75 mt-2 text-decoration-none"
            >
              Pengembang
            </a>
          </div>
          <div className="col col-md-3 d-flex flex-column mt-4">
            <h4 className="fw-bold text-white">Hubungi Kami</h4>
            <a
              href=""
              className="text-warning opacity-75 mt-3 text-decoration-none"
            >
              Customer Service
            </a>
            <a
              href=""
              className="text-warning opacity-75 mt-2 text-decoration-none"
            >
              Kebijakan &amp; Privasi
            </a>
            <a
              href=""
              className="text-warning opacity-75 mt-2 text-decoration-none"
            >
              Syarat &amp; Ketentuan
            </a>
            <a
              href=""
              className="text-warning opacity-75 mt-2 text-decoration-none"
            >
              Bantuan
            </a>
          </div>
        </div>
      </footer>
      <hr />
      <footer id="footer-bottom">
        <div className="d-flex justify-content-center align-items-center pt-2 pb-2 text-white">
          <span>
            © 2023 Copyright by <b>Fadhil Alif P</b>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
