const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl bg-body-tertiary bg-light fixed-top shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Simple Header
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <a
                className="nav-link active text-white bg-primary rounded px-3"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-primary" href="#">
                Features
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-primary" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-primary" href="#">
                FAQs
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-primary" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
