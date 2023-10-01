import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.styles.css";

const LandingPage = () => {
  return (
    <div>
      {/* Font Jost + Open Sans */}
      <link href="https://fonts.googleapis.com/css2?family=Jost:wght@100;400;500;700&family=Open+Sans:wght@300;400;500;700&display=swap" />
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default LandingPage;
