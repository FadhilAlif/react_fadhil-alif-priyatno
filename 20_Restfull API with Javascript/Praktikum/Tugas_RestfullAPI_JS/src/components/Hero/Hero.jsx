import { useNavigate } from "react-router-dom";
import HeroImage from "../../assets/heroImg.svg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
              <h1>Better Solutions For Your Business</h1>
              <h2>
                We are team of talented designers making websites with Bootstrap
              </h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a href="#">
                  <button
                    className="btn-get-started"
                    onClick={() => navigate("/CreateProduct")}
                  >
                    Get Started
                  </button>
                </a>
                <a
                  href="https://youtu.be/giqJjp_Zi7Y"
                  className="btn-watch-video"
                >
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={HeroImage} className="img-fluid" alt="ini-gambar" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
