import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import DataProduct from "./pages/DataProduct/DataProduct";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [datas, setDatas] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route
          path="/CreateProduct"
          element={<CreateProduct setData={setDatas} />}
        />
        <Route
          exact
          path="/DataProduct/:id"
          element={<DataProduct product={datas} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
