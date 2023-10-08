import AboutCard from "../Card/Card";
import TukangKita from "../../assets/img/tukang-kita.jpg";
import Proyekan from "../../assets/img/proyekan.jpg";
import AlatBerat from "../../assets/img/alat-berat.jpg";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="content d-flex flex-column text-center mt-5 mb-5">
          <h1 className="fw-bold text-warning ">About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            aliquet varius magna at dictum. Proin vel lacus id urna semper
            rutrum vel eget enim. Integer dignissim placerat vestibulum. Donec
            scelerisque ex nibh, at tempor justo tincidunt nec. Morbi non tempor
            diam, ut tristique turpis. Morbi interdum ligula malesuada volutpat
            lobortis.
          </p>
        </div>

        <div className="aboutCard d-flex flex-row gap-5 justify-content-center mb-5">
          <AboutCard imageUrl={TukangKita} title="Tukang Kami" />
          <AboutCard imageUrl={Proyekan} title="Proyekan" />
          <AboutCard imageUrl={AlatBerat} title="Alat Berat" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
