import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import DetailProduct from "./components/DetailProduct/DetailProduct";
import ListProduct from "./components/ListProduct/ListProduct";
import RandomNumber from "./components/RandomNumber/RandomNumber";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <DetailProduct />
      <RandomNumber />
      <ListProduct />
    </div>
  );
}

export default App;
