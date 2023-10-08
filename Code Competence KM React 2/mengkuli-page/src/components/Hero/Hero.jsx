import "./Hero.css";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 mb-2 text-center text-white">
                <h1 className="fw-bold">
                  Welcome to <span className="text-warning">Tukangin</span>
                </h1>
                <h3 className="fw-bold mb-3">
                  Bangun Impian, Satu Lapisan demi Satu Lapisan
                </h3>
                <p className="mb-4 opacity-75">
                  Kami adalah penyedia jasa tukang terbaik yang berdedikasi
                  untuk memberikan solusi bangunan yang berkualitas, andal, dan
                  sesuai dengan kebutuhan Anda. Di
                  <span className="fw-bold text-warning"> Tukangin</span>, kami
                  memahami betapa pentingnya rumah dan bangunan Anda bagi
                  kehidupan sehari-hari dan investasi masa depan Anda. Itulah
                  mengapa kami berkomitmen untuk memberikan pelayanan terbaik
                  dalam industri ini.
                </p>
                <button
                  type="button"
                  className="btn btn-outline-warning border-2 rounded-pill"
                >
                  Membangun Bersama Kami
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero End */}
    </div>
  );
};

export default Hero;
