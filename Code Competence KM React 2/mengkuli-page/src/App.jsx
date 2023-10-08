import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
